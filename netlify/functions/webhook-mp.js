exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 200, body: 'OK' };
  }

  try {
    const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

    const body = JSON.parse(event.body);
    console.log('Webhook recibido:', body);

    // Solo nos interesan las notificaciones de pago
    if (body.type !== 'payment' || !body.data?.id) {
      return { statusCode: 200, body: 'OK' };
    }

    const paymentId = body.data.id;

    // Obtener detalles del pago desde MP
    const r = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` },
    });
    const pago = await r.json();

    const pedidoId = pago.external_reference;
    const status = pago.status;  // 'approved', 'pending', 'rejected'

    if (!pedidoId) {
      console.warn('Pago sin external_reference:', paymentId);
      return { statusCode: 200, body: 'OK' };
    }

    // Mapear status de MP a nuestro estado_pago
    let estadoPago = 'pendiente';
    if (status === 'approved') estadoPago = 'pagado';
    else if (status === 'rejected' || status === 'cancelled') estadoPago = 'cancelado';

    // Actualizar pedido en Supabase
    await fetch(`${SUPABASE_URL}/rest/v1/pedidos?id=eq.${pedidoId}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ estado_pago: estadoPago }),
    });

    // Si fue aprobado, marcar la venta como cobrada
    if (status === 'approved') {
      await fetch(`${SUPABASE_URL}/rest/v1/ventas?pedido_id=eq.${pedidoId}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_SERVICE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cobrado: true }),
      });
    }

    return { statusCode: 200, body: 'OK' };
  } catch (e) {
    console.error('Error en webhook:', e);
    return { statusCode: 200, body: 'OK' };  // Siempre 200 para que MP no reintente
  }
};

exports.handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' };
  }

  try {
    const { pedidoId, numeroPedido, cuadroNombre, precio, clienteEmail, clienteNombre } = JSON.parse(event.body);
    const ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;
    const SITE_URL = process.env.SITE_URL || 'immitaller.ar';

    const preferencia = {
      items: [{
        title: `${cuadroNombre} - Immi Taller`,
        description: `Pedido N° ${numeroPedido}`,
        quantity: 1,
        currency_id: 'ARS',
        unit_price: Number(precio),
      }],
      payer: {
        email: clienteEmail,
        name: clienteNombre,
      },
     back_urls: {
       success: `${SITE_URL}/?pago=exitoso&pedido=${numeroPedido}`,
       pending: `${SITE_URL}/?pago=pendiente&pedido=${numeroPedido}`,
       failure: `${SITE_URL}/?pago=rechazado&pedido=${numeroPedido}`,
     },
      auto_return: 'approved',
      external_reference: pedidoId,
      notification_url: `${SITE_URL}/.netlify/functions/webhook-mp`,
      payment_methods: {
        installments: 1,  // Sin cuotas
      },
      expires: true,
      expiration_date_to: new Date(Date.now() + 30 * 60 * 1000).toISOString(),  // 30 minutos
    };

    const r = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(preferencia),
    });

    const data = await r.json();

    if (!r.ok) {
      console.error('Error MP:', data);
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({ error: data.message || 'Error creando preferencia' }),
      };
    }

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        init_point: data.init_point,
        preference_id: data.id,
      }),
    };
  } catch (e) {
    console.error('Error:', e);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: e.message }),
    };
  }
};

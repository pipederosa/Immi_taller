-- =====================================================
-- IMMI TALLER - SUPABASE SCHEMA
-- Pegar este SQL en el SQL Editor de Supabase
-- =====================================================

-- Tabla de cuadros
CREATE TABLE IF NOT EXISTS cuadros (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  codigo_id TEXT UNIQUE NOT NULL, -- ej: "IMM-001"
  nombre TEXT NOT NULL,
  descripcion TEXT,
  tecnica TEXT CHECK (tecnica IN ('acrilico', 'oleo', 'acuarela')),
  tamanio TEXT CHECK (tamanio IN ('15x15', '20x20', 'personalizado')),
  imagen_url TEXT,
  estado TEXT DEFAULT 'stock' CHECK (estado IN ('stock', 'consignacion', 'vendido', 'agotado')),
  cantidad_disponible INTEGER DEFAULT 1,
  precio DECIMAL(10,2),
  fecha_creacion TIMESTAMPTZ DEFAULT NOW(),
  activo BOOLEAN DEFAULT TRUE
);

-- Tabla de lugares de consignación
CREATE TABLE IF NOT EXISTS consignaciones (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cuadro_id UUID REFERENCES cuadros(id) ON DELETE CASCADE,
  nombre_lugar TEXT NOT NULL,
  direccion TEXT,
  google_maps_url TEXT,
  telefono TEXT,
  activo BOOLEAN DEFAULT TRUE
);

-- Tabla de precios
CREATE TABLE IF NOT EXISTS precios (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tamanio TEXT UNIQUE NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  descripcion TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de pedidos
CREATE TABLE IF NOT EXISTS pedidos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  numero_pedido TEXT UNIQUE NOT NULL,
  tipo TEXT NOT NULL CHECK (tipo IN ('stock', 'personalizado_archivo', 'personalizado_nuevo')),
  cuadro_id UUID REFERENCES cuadros(id),
  -- Datos del cliente
  cliente_nombre TEXT NOT NULL,
  cliente_email TEXT NOT NULL,
  cliente_telefono TEXT,
  -- Detalles del pedido
  tamanio TEXT,
  descripcion_personalizado TEXT,
  imagen_referencia_url TEXT,
  -- Pago y entrega
  zona_envio TEXT,
  metodo_pago TEXT CHECK (metodo_pago IN ('efectivo', 'mercadopago')),
  estado_pago TEXT DEFAULT 'pendiente' CHECK (estado_pago IN ('pendiente', 'pagado', 'cancelado')),
  mp_payment_id TEXT,
  precio_total DECIMAL(10,2),
  -- Canal de venta
  canal TEXT DEFAULT 'web' CHECK (canal IN ('web', 'consignacion', 'particular')),
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de configuración general
CREATE TABLE IF NOT EXISTS configuracion (
  clave TEXT PRIMARY KEY,
  valor TEXT,
  descripcion TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- DATOS INICIALES
-- =====================================================

-- Precios base
INSERT INTO precios (tamanio, precio, descripcion) VALUES
  ('15x15', 15000, 'Cuadro 15x15 cm'),
  ('20x20', 22000, 'Cuadro 20x20 cm'),
  ('personalizado', 0, 'Precio a acordar según tamaño y complejidad')
ON CONFLICT (tamanio) DO NOTHING;

-- Configuración inicial
INSERT INTO configuracion (clave, valor, descripcion) VALUES
  ('instagram_url', 'https://www.instagram.com/immi.taller/', 'URL de Instagram'),
  ('whatsapp_numero', '5491100000000', 'Número de WhatsApp del vendedor (con código de país)'),
  ('email_vendedor', 'immi.taller@gmail.com', 'Email del vendedor'),
  ('descripcion_emprendimiento', 'Immi Taller es un emprendimiento de arte sacro hecho con amor y fe. Cada obra es pintada a mano en acrílico, óleo o acuarela, transmitiendo devoción y espiritualidad a través del arte.', 'Descripción del emprendimiento'),
  ('recargo_personalizado_archivo', '10', 'Porcentaje de recargo para cuadros del archivo en versión personalizada')
ON CONFLICT (clave) DO NOTHING;

-- Lugares físicos de ejemplo
INSERT INTO cuadros (codigo_id, nombre, descripcion, tecnica, tamanio, estado, cantidad_disponible, precio) VALUES
  ('IMM-001', 'Virgen de Luján', 'Hermosa representación de la patrona argentina', 'acrilico', '20x20', 'stock', 2, 22000),
  ('IMM-002', 'Sagrado Corazón de Jesús', 'Obra devocional en técnica mixta', 'oleo', '15x15', 'stock', 1, 15000),
  ('IMM-003', 'San Expedito', 'Pintado en acuarela con detalles dorados', 'acuarela', '20x20', 'consignacion', 1, 22000)
ON CONFLICT (codigo_id) DO NOTHING;

-- Consignación de ejemplo
INSERT INTO consignaciones (cuadro_id, nombre_lugar, direccion, google_maps_url, telefono)
SELECT id, 'Santería El Ángel', 'Av. Corrientes 1234, CABA', 'https://maps.google.com/?q=-34.603722,-58.381592', '1112345678'
FROM cuadros WHERE codigo_id = 'IMM-003';

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

ALTER TABLE cuadros ENABLE ROW LEVEL SECURITY;
ALTER TABLE consignaciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE precios ENABLE ROW LEVEL SECURITY;
ALTER TABLE pedidos ENABLE ROW LEVEL SECURITY;
ALTER TABLE configuracion ENABLE ROW LEVEL SECURITY;

-- Políticas públicas (lectura)
CREATE POLICY "Cuadros visibles al público" ON cuadros FOR SELECT USING (activo = TRUE);
CREATE POLICY "Consignaciones visibles al público" ON consignaciones FOR SELECT USING (activo = TRUE);
CREATE POLICY "Precios visibles al público" ON precios FOR SELECT USING (TRUE);
CREATE POLICY "Configuracion visible al público" ON configuracion FOR SELECT USING (TRUE);

-- Pedidos: cualquiera puede insertar, solo admin puede leer todo
CREATE POLICY "Insertar pedido público" ON pedidos FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Admin ve todos los pedidos" ON pedidos FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Admin actualiza pedidos" ON pedidos FOR UPDATE USING (auth.role() = 'authenticated');

-- Admin puede hacer todo en cuadros
CREATE POLICY "Admin gestiona cuadros" ON cuadros FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin gestiona consignaciones" ON consignaciones FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin actualiza precios" ON precios FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin actualiza configuracion" ON configuracion FOR ALL USING (auth.role() = 'authenticated');

-- =====================================================
-- FUNCIÓN PARA NÚMERO DE PEDIDO AUTOMÁTICO
-- =====================================================
CREATE OR REPLACE FUNCTION generar_numero_pedido()
RETURNS TEXT AS $$
DECLARE
  nuevo_numero TEXT;
  contador INTEGER;
BEGIN
  SELECT COUNT(*) + 1 INTO contador FROM pedidos;
  nuevo_numero := 'PED-' || TO_CHAR(NOW(), 'YYYY') || '-' || LPAD(contador::TEXT, 4, '0');
  RETURN nuevo_numero;
END;
$$ LANGUAGE plpgsql;

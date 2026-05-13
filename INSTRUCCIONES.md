# 🎨 IMMI TALLER — Guía de instalación (versión archivo único)

Todo el sitio está en un **único archivo `index.html`**. No hay carpetas de CSS ni JS separadas.
Solo subís 3 archivos a GitHub y listo.

---

## Archivos que vas a subir a GitHub

```
index.html               ← Todo el sitio (HTML + CSS + JS en uno)
supabase_schema.sql      ← Solo para copiar en Supabase, NO subir
.github/
  workflows/
    deploy.yml           ← Deploy automático
```

---

## PASO 1 — Supabase (base de datos)

1. Entrá a [supabase.com](https://supabase.com) → creá cuenta gratuita
2. **New project** → nombre `immi-taller` → región **South America (São Paulo)**
3. Esperá ~2 minutos
4. Menú izquierdo → **SQL Editor** → **New query**
5. Abrí el archivo `supabase_schema.sql` con el Bloc de notas
6. Copiá TODO el contenido y pegalo en el editor → **Run**
7. Deberías ver "Success" ✅

### Obtener las claves:
- Menú → **Settings → API**
- Copiá: **Project URL** y **anon public key**

---

## PASO 2 — EmailJS (emails automáticos)

1. Entrá a [emailjs.com](https://emailjs.com) → cuenta gratuita
2. **Email Services → Add New Service** → Gmail → conectá tu cuenta → ID: `immi_taller`
3. Creá 3 plantillas en **Email Templates → Create New Template**:

### Plantilla 1 — `cliente_pedido` (al cliente)
**Subject:** `✅ Tu pedido en Immi Taller - {{numero_pedido}}`
```
Hola {{cliente_nombre}},

¡Recibimos tu pedido! 🎨

📋 N° de pedido: {{numero_pedido}}
🖼️ Cuadro: {{cuadro}}
📐 Tamaño: {{tamanio}}
💰 Total: {{precio}}
📍 Zona: {{zona}}
💳 Pago: {{metodo_pago}}

Pronto te contactamos para coordinar la entrega.

¡Gracias por elegir Immi Taller!
```

### Plantilla 2 — `vendedor_pedido` (al vendedor)
**Subject:** `🛒 Nuevo pedido - {{numero_pedido}}`
```
Nuevo pedido recibido:

Cliente: {{cliente_nombre}}
Email: {{cliente_email}}
Cuadro: {{cuadro}} | Tamaño: {{tamanio}}
Precio: {{precio}} | Pago: {{metodo_pago}}
Zona: {{zona}}
N° Pedido: {{numero_pedido}}
```

### Plantilla 3 — `pedido_personalizado` (al vendedor)
**Subject:** `✨ Nuevo pedido personalizado`
```
Nuevo pedido personalizado:

Cliente: {{cliente_nombre}}
Email: {{cliente_email}} | Tel: {{cliente_telefono}}
Zona: {{zona}}

Descripción: {{descripcion}}
Imagen de referencia: {{imagen_ref}}
N° Pedido: {{numero_pedido}}
```

4. Anotá los 3 **Template IDs** y tu **Public Key** (en Account → General)

---

## PASO 3 — GitHub

1. Entrá a [github.com](https://github.com) → cuenta gratuita
2. **New repository** → nombre `immi-taller` → **Public** → Create
3. En el repo vacío → **"uploading an existing file"**
4. Arrastrá estos archivos:
   - `index.html`
   - la carpeta `.github` (con `workflows/deploy.yml` adentro)
5. **Commit changes**

---

## PASO 4 — Poner tus claves en index.html

En GitHub, hacé clic en `index.html` → ícono de lápiz ✏️ → buscá esta sección al principio del archivo:

```javascript
const CONFIG = {
  SUPABASE_URL: 'TU_SUPABASE_URL',
  SUPABASE_ANON_KEY: 'TU_SUPABASE_ANON_KEY',
  EMAILJS_SERVICE_ID: 'TU_EMAILJS_SERVICE_ID',
  EMAILJS_PUBLIC_KEY: 'TU_EMAILJS_PUBLIC_KEY',
  EMAILJS_TEMPLATE_CLIENTE: 'TU_TEMPLATE_CLIENTE',
  EMAILJS_TEMPLATE_VENDEDOR: 'TU_TEMPLATE_VENDEDOR',
  EMAILJS_TEMPLATE_PERSONALIZADO: 'TU_TEMPLATE_PERSONALIZADO',
};
```

Reemplazá cada valor con tus datos reales → **Commit changes**

---

## PASO 5 — Activar GitHub Pages

1. En el repositorio → **Settings** → **Pages**
2. En **Source** → seleccioná **"GitHub Actions"**
3. Esperá 1-2 minutos
4. Tu sitio estará en: `https://TU-USUARIO.github.io/immi-taller/`

---

## PASO 6 — Crear usuario admin

1. En Supabase → **Authentication → Users → Add user**
2. Poné tu email y contraseña
3. Para entrar al admin: `tu-sitio.github.io/immi-taller/#admin`

---

## Cómo navega el sitio

El sitio es una **Single Page Application** — todo vive en `index.html`.
La navegación se hace con el hash de la URL:

| URL | Sección |
|-----|---------|
| `#home` o sin hash | Página principal |
| `#archivo` | Galería de cuadros |
| `#compra` | Módulo de compra |
| `#admin` | Panel admin (requiere login) |
| `#admin-login` | Login admin |

---

## Cómo agregar fotos de cuadros

La forma más fácil es subir las fotos a **Google Drive**:
1. Subí la foto → clic derecho → "Obtener enlace" → "Cualquier persona con el enlace"
2. Copiá el ID de la URL: `https://drive.google.com/file/d/**ESTE_ID**/view`
3. La URL de imagen queda: `https://drive.google.com/uc?id=ESTE_ID`
4. Pegala en el campo "URL de imagen" al agregar un cuadro desde el admin

---

## Solución de problemas

| Problema | Solución |
|----------|----------|
| El sitio no carga / sin estilos | Verificá que GitHub Pages esté activado |
| "Error al cargar cuadros" | Revisá SUPABASE_URL y SUPABASE_ANON_KEY en index.html |
| No llegan emails | Verificá los IDs de EmailJS |
| No puedo entrar al admin | Creá el usuario en Supabase Authentication |
| Las fotos no aparecen | La URL de imagen debe ser pública y directa |

---

*Immi Taller · Arte sacro pintado a mano · por Pao Navedo*

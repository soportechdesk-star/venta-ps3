# PS3 Super Slim — Página para GitHub Pages

## Qué incluye esta versión

Página estática renovada para presentar la unidad con un acabado más premium y orientado a conversión:

- Diseño responsive para PC, tablet y celular.
- Hero con fotografía real de la unidad.
- Galería completa con lightbox, contador y navegación por teclado.
- Sección de accesorios y configuración.
- Video de funcionamiento mediante YouTube.
- Sección de Movian7 + YouTube con las capturas reales incluidas.
- Catálogo de **31 juegos** con búsqueda, filtros y carga automática de portadas desde Wikipedia cuando están disponibles.
- Botón directo a WhatsApp y botón flotante.
- Menú móvil.
- Barra de progreso de lectura y botón volver arriba.
- Animaciones suaves y soporte para `prefers-reduced-motion`.
- SEO básico y metadatos Open Graph.
- Sin librerías externas de JavaScript.

## Publicar

Subí `index.html`, `styles.css`, `app.js`, `.nojekyll` y las carpetas `imagenes/` e `imagenes-streaming/` al repositorio.

En GitHub: **Settings → Pages → Deploy from branch → main → / (root)**.

## Configuración

### WhatsApp

En `app.js` está:

`const whatsappNumber = "5491150449061";`

Cambialo por tu número si necesitás otro. Usá código de país, sin `+`, espacios ni guiones.

### Video

En `app.js` está configurado el enlace de YouTube de la publicación:

`const youtubeVideoUrl = "https://youtu.be/C3v4i5yDeJ4?si=PVr6Qq783h1I12Mn";`

Podés reemplazarlo por el video definitivo. También acepta enlaces `youtu.be`, `/watch`, `/shorts/` y `/embed/`.

## Nota sobre el catálogo

La página contiene actualmente **31 juegos**, que es la cantidad real de títulos definida en `app.js`. Se corrigieron los textos que antes mostraban 32 para evitar una inconsistencia.

## Nota sobre EA SPORTS FC 24

FC 24 no tuvo una edición oficial para PS3. En la página se presenta como una modificación para PS3 basada en FIFA 19, no como un lanzamiento oficial.

## Imágenes

Las fotos reales de la unidad están en `imagenes/` y las capturas de entretenimiento en `imagenes-streaming/`. Las portadas del catálogo se consultan dinámicamente desde Wikipedia; si no existe una portada disponible, la tarjeta muestra un respaldo visual limpio.

# PS3 Super Slim — Página para GitHub Pages

## Cómo publicarla

1. Creá un repositorio en GitHub.
2. Subí todos los archivos manteniendo la estructura:
   - `index.html`
   - `styles.css`
   - `app.js`
3. En `app.js`, buscá:
   `const whatsappNumber = "549XXXXXXXXXX";`
   y reemplazalo por tu número de WhatsApp con código de país, sin `+`, espacios ni guiones.
4. En GitHub: Settings → Pages → Deploy from branch → `main` → `/root`.
5. Esperá a que GitHub Pages publique el sitio.

## Precio y datos de entrega

El sitio deja el precio, ubicación y modalidad de entrega fuera del código principal para que puedas incorporarlos en la sección de contacto cuando los definas.

## Imágenes y video

- La galería usa las 10 fotos reales incluidas en `imagenes/`.
- Las fotos se pueden ampliar con un visor y navegar con las flechas del teclado.
- Las portadas de juegos se intentan cargar automáticamente desde Wikipedia; si una no existe, aparece una tarjeta de respaldo.
- El botón "Gameplay" abre una búsqueda de YouTube para el juego + PS3.
- **El video de funcionamiento no se guarda en este repositorio.** Se carga desde YouTube mediante un `iframe`, evitando subir el MP4 pesado a GitHub.

### Configurar el video de funcionamiento

Abrí `app.js` y buscá:

`const youtubeVideoUrl = "";`

Pegá entre las comillas la URL completa de tu video de YouTube. Ejemplo:

`const youtubeVideoUrl = "https://www.youtube.com/watch?v=ABC123XYZ";`

También acepta enlaces `youtu.be`, `/shorts/` y `/embed/`. Si dejás la variable vacía, la página mostrará un aviso en lugar de un reproductor roto.


## Nota sobre EA SPORTS FC 24

La página lo presenta como "EA Sports FC 24 — Mod PS3", no como un lanzamiento oficial de PS3. FC 24 no tuvo una edición oficial para PS3; existen mods/parches sobre títulos de PS3.

## Personalización recomendada antes de publicar

- Agregar precio.
- Agregar ciudad/zona de entrega.
- Agregar si hacés envíos.
- Reemplazar los dos videos por una grabación frontal más limpia si querés un acabado premium.
- La galería ya usa las 10 fotos reales incluidas en `imagenes/`, con visor ampliado y navegación por teclado.


## Recomendación para el video de la consola

Cuando tengas el video definitivo, subilo a YouTube como **No listado** si querés que solamente puedan verlo quienes tengan el enlace. Después pegá su URL en `youtubeVideoUrl` dentro de `app.js`.

Idealmente, grabá un único video de 45–60 segundos, preferentemente de frente a la TV:
1. Menú de PS3.
2. Recorrido rápido del catálogo.
3. Mostrar Metal Gear Solid V.
4. Mostrar Resident Evil 5.
5. Mostrar Resident Evil 6.
6. Mostrar 3–5 juegos destacados.
7. Mostrar los 3 joysticks/accesorios.
8. Cerrar con el menú principal.

No hace falta copiar el MP4 al repositorio: el sitio lo reproducirá directamente desde YouTube.

## Recomendación para GitHub Pages

GitHub Pages puede publicar directamente archivos estáticos como HTML, CSS y JavaScript desde un repositorio. El archivo `index.html` debe quedar en la raíz de la fuente publicada. El proyecto incluye `.nojekyll` para evitar un proceso Jekyll innecesario en este sitio estático.


## Sección de entretenimiento

La versión actual incorpora las 4 capturas reales de `imagenes-streaming/` en una sección dedicada a **Movian7**, destacando que la unidad tiene Movian7 instalado y que también se puede ver **YouTube**. Las capturas se pueden abrir en el visor ampliado de la página.

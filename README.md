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

## Imágenes y videos

- La galería usa las 10 fotos reales incluidas en `imagenes/`.
- Las fotos se pueden ampliar con un visor y navegar con las flechas del teclado.
- Las portadas de juegos se intentan cargar automáticamente desde Wikipedia; si una no existe, aparece una tarjeta de respaldo.
- El botón "Gameplay" abre una búsqueda de YouTube para el juego + PS3, evitando republicar videos ajenos en tu servidor.
- El ZIP actual no contiene archivos de video, por eso la página no muestra reproductores rotos. Si después agregás videos, se puede volver a incorporar una sección de reproducción.


## Nota sobre EA SPORTS FC 24

La página lo presenta como "EA Sports FC 24 — Mod PS3", no como un lanzamiento oficial de PS3. FC 24 no tuvo una edición oficial para PS3; existen mods/parches sobre títulos de PS3.

## Personalización recomendada antes de publicar

- Agregar precio.
- Agregar ciudad/zona de entrega.
- Agregar si hacés envíos.
- Reemplazar los dos videos por una grabación frontal más limpia si querés un acabado premium.
- La galería ya usa las 10 fotos reales incluidas en `imagenes/`, con visor ampliado y navegación por teclado.


## Actualización futura del video de la consola

Cuando termines de incorporar los 3 juegos restantes, grabá un único video definitivo de 45–60 segundos, preferentemente de frente a la TV:
1. Menú de PS3.
2. Recorrido rápido del catálogo.
3. Mostrar Metal Gear Solid V.
4. Mostrar Resident Evil 5.
5. Mostrar Resident Evil 6.
6. Mostrar 3–5 juegos destacados.
7. Mostrar los 3 joysticks/accesorios.
8. Cerrar con el menú principal.

Luego reemplazá `assets/videos/consola-menu-1.mp4` y/o `consola-menu-2.mp4` por el nuevo archivo, conservando esos nombres para no tocar el HTML.

## Recomendación para GitHub Pages

GitHub Pages puede publicar directamente archivos estáticos como HTML, CSS y JavaScript desde un repositorio. El archivo `index.html` debe quedar en la raíz de la fuente publicada. El proyecto incluye `.nojekyll` para evitar un proceso Jekyll innecesario en este sitio estático.

const games = [
  {
    "title": "Metal Gear Solid V: The Phantom Pain",
    "genre": "Acción / Sigilo",
    "description": "Una enorme aventura de infiltración y mundo abierto protagonizada por Venom Snake.",
    "category": "destacado",
    "status": "incluido"
  },
  {
    "title": "Resident Evil 5",
    "genre": "Acción / Survival Horror",
    "description": "Combate, supervivencia y cooperación en una de las entregas más orientadas a la acción de la saga.",
    "category": "terror",
    "status": "incluido"
  },
  {
    "title": "Resident Evil 6",
    "genre": "Acción / Survival Horror",
    "description": "Una aventura con varias campañas, protagonistas y estilos de juego.",
    "category": "terror",
    "status": "incluido"
  },
  {
    "title": "Diablo III",
    "genre": "Action RPG",
    "description": "Combates frenéticos, botín y progresión de personajes en el universo de Sanctuary.",
    "category": "coop",
    "status": "incluido"
  },
  {
    "title": "Red Dead Redemption",
    "genre": "Acción / Mundo abierto",
    "description": "Explorá el lejano oeste en una aventura de mundo abierto protagonizada por John Marston.",
    "category": "destacado",
    "status": "incluido"
  },
  {
    "title": "EA Sports FC 24",
    "genre": "Fútbol / Mod PS3",
    "description": "Versión modificada para PS3 basada en un juego de fútbol de la generación, con plantillas y contenido actualizado.",
    "category": "deportes",
    "status": "incluido"
  },
  {
    "title": "Max Payne 3",
    "genre": "Acción / Shooter",
    "description": "Acción cinematográfica, tiroteos intensos y el característico Bullet Time.",
    "category": "destacado",
    "status": "incluido"
  },
  {
    "title": "Castlevania: Lords of Shadow 2",
    "genre": "Acción / Aventura",
    "description": "Combates, exploración y fantasía oscura en la continuación de Lords of Shadow.",
    "category": "accion",
    "status": "incluido"
  },
  {
    "title": "Grand Theft Auto V",
    "genre": "Acción / Mundo abierto",
    "description": "Recorré Los Santos y disfrutá una de las experiencias de mundo abierto más populares de PS3.",
    "category": "destacado",
    "status": "incluido"
  },
  {
    "title": "Battlefield 4",
    "genre": "Shooter / Acción",
    "description": "Combate militar, vehículos y grandes escenarios de batalla.",
    "category": "shooter",
    "status": "incluido"
  },
  {
    "title": "The Last of Us",
    "genre": "Acción / Supervivencia",
    "description": "Una aventura narrativa de supervivencia centrada en Joel y Ellie.",
    "category": "destacado",
    "status": "incluido"
  },
  {
    "title": "Crysis 3",
    "genre": "Shooter / Acción",
    "description": "Combate futurista y libertad táctica en una Nueva York transformada.",
    "category": "shooter",
    "status": "incluido"
  },
  {
    "title": "Killzone 3",
    "genre": "Shooter / Acción",
    "description": "Campaña intensa de ciencia ficción con combates a gran escala.",
    "category": "shooter",
    "status": "incluido"
  },
  {
    "title": "RAGE",
    "genre": "Shooter / Acción",
    "description": "Acción en primera persona en un mundo postapocalíptico con vehículos y combates.",
    "category": "shooter",
    "status": "incluido"
  },
  {
    "title": "Metro: Last Light",
    "genre": "Shooter / Supervivencia",
    "description": "Exploración y combate en el oscuro mundo subterráneo de Moscú.",
    "category": "terror",
    "status": "incluido"
  },
  {
    "title": "God of War III",
    "genre": "Acción / Hack & Slash",
    "description": "Combates épicos y mitología griega en una de las grandes aventuras de PS3.",
    "category": "destacado",
    "status": "incluido"
  },
  {
    "title": "Uncharted 3: Drake's Deception",
    "genre": "Acción / Aventura",
    "description": "Aventura cinematográfica, exploración y acción junto a Nathan Drake.",
    "category": "destacado",
    "status": "incluido"
  },
  {
    "title": "Resistance 3",
    "genre": "Shooter / Ciencia ficción",
    "description": "Combate contra la invasión Chimera en una campaña de ciencia ficción.",
    "category": "shooter",
    "status": "incluido"
  },
  {
    "title": "Castle Crashers",
    "genre": "Beat 'em up / Cooperativo",
    "description": "Acción arcade, humor y combates ideales para compartir.",
    "category": "coop",
    "status": "incluido"
  },
  {
    "title": "Rayman Legends",
    "genre": "Plataformas / Arcade",
    "description": "Plataformas coloridas, desafíos variados y diversión para toda la familia.",
    "category": "coop",
    "status": "incluido"
  },
  {
    "title": "Ratchet & Clank: All 4 One",
    "genre": "Aventura / Cooperativo",
    "description": "Aventura de Ratchet, Clank y compañía con énfasis en el juego cooperativo.",
    "category": "coop",
    "status": "incluido"
  },
  {
    "title": "Alien Breed 3: Descent",
    "genre": "Arcade / Shooter",
    "description": "Acción arcade de ciencia ficción contra hordas de alienígenas.",
    "category": "coop",
    "status": "incluido"
  },
  {
    "title": "LEGO The Lord of the Rings",
    "genre": "Aventura / Familiar",
    "description": "La trilogía de El Señor de los Anillos reinterpretada con el humor y estilo LEGO.",
    "category": "coop",
    "status": "incluido"
  },
  {
    "title": "Hard Corps: Uprising",
    "genre": "Run & Gun / Arcade",
    "description": "Acción lateral intensa inspirada en los clásicos run-and-gun.",
    "category": "accion",
    "status": "incluido"
  },
  {
    "title": "TMNT: Turtles in Time Re-Shelled",
    "genre": "Beat 'em up / Arcade",
    "description": "Las Tortugas Ninja vuelven a repartir golpes en una experiencia arcade.",
    "category": "coop",
    "status": "incluido"
  },
  {
    "title": "Sacred Citadel",
    "genre": "Action RPG / Cooperativo",
    "description": "Combates laterales, progresión y aventura con amigos.",
    "category": "coop",
    "status": "incluido"
  },
  {
    "title": "Abyss Odyssey",
    "genre": "Acción / Roguelike",
    "description": "Combates y exploración en un mundo subterráneo con elementos roguelike.",
    "category": "accion",
    "status": "incluido"
  },
  {
    "title": "LittleBigPlanet 2",
    "genre": "Plataformas / Creatividad",
    "description": "Plataformas, creatividad y una enorme variedad de contenido creado por jugadores.",
    "category": "coop",
    "status": "incluido"
  },
  {
    "title": "Trine 2",
    "genre": "Puzzle / Plataformas",
    "description": "Fantasía, físicas y resolución de puzles usando las habilidades de tres personajes.",
    "category": "coop",
    "status": "incluido"
  },
  {
    "title": "Street Fighter X Tekken",
    "genre": "Lucha",
    "description": "Combates crossover que enfrentan a personajes de Street Fighter y Tekken.",
    "category": "lucha",
    "status": "incluido"
  },
  {
    "title": "Shank",
    "genre": "Acción / Beat 'em up",
    "description": "Acción 2D con combates rápidos y estética de cómic.",
    "category": "accion",
    "status": "incluido"
  }
];

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const catalog = $("#catalog");
const search = $("#search");
const filters = $("#filters");
const empty = $("#empty");
const resultCount = $("#resultCount");
let activeFilter = "todos";

function wikiTitle(title) {
  const map = {
    "EA Sports FC 24": "FIFA 19",
    "TMNT: Turtles in Time Re-Shelled": "Teenage Mutant Ninja Turtles: Turtles in Time Re-Shelled",
    "LEGO The Lord of the Rings": "Lego The Lord of the Rings"
  };
  return map[title] || title;
}

function youtubeSearch(title) {
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(title + " PS3 gameplay");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
}

function card(game) {
  const title = escapeHTML(game.title);
  const fallback = escapeHTML(game.title.split(/[:–-]/)[0].trim());
  return `<article class="game-card" data-title="${title.toLowerCase()}" data-category="${game.category}">
    <div class="cover">
      <img loading="lazy" alt="Portada de ${title}" data-wiki="${encodeURIComponent(wikiTitle(game.title))}">
      <div class="cover-fallback"><span>${fallback}</span></div>
      <span class="badge">Incluido</span>
    </div>
    <div class="game-body">
      <div class="genre">${escapeHTML(game.genre)}</div>
      <h3>${title}</h3>
      <p>${escapeHTML(game.description)}</p>
      <div class="game-actions">
        <a href="${youtubeSearch(game.title)}" target="_blank" rel="noopener noreferrer">▶ Gameplay</a>
        <a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(game.title + " PS3 cover")}" target="_blank" rel="noopener noreferrer">⌕ Imágenes</a>
      </div>
    </div>
  </article>`;
}

function render() {
  const q = search.value.trim().toLowerCase();
  const filtered = games.filter(game => {
    const text = `${game.title} ${game.genre} ${game.description}`.toLowerCase();
    return (activeFilter === "todos" || game.category === activeFilter) && text.includes(q);
  });

  catalog.innerHTML = filtered.map(card).join("");
  empty.hidden = filtered.length !== 0;
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "juego" : "juegos"}`;
  loadCovers();
  observeReveal();
}

async function loadCovers() {
  const images = $$("img[data-wiki]", catalog);
  await Promise.all(images.map(async img => {
    try {
      const title = decodeURIComponent(img.dataset.wiki);
      const response = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title));
      if (!response.ok) throw new Error("cover not found");
      const data = await response.json();
      const source = data?.thumbnail?.source;
      if (!source) throw new Error("no thumbnail");
      img.src = source;
      img.addEventListener("load", () => {
        const fallback = img.parentElement.querySelector(".cover-fallback");
        if (fallback) fallback.hidden = true;
      }, {once:true});
      img.addEventListener("error", () => { img.hidden = true; }, {once:true});
    } catch {
      img.hidden = true;
    }
  }));
}

search.addEventListener("input", render);
filters.addEventListener("click", event => {
  const button = event.target.closest(".filter");
  if (!button) return;
  $$(".filter", filters).forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  activeFilter = button.dataset.filter;
  render();
});

document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    search.focus();
  }
});

$$("[data-coop]").forEach(link => link.addEventListener("click", () => {
  activeFilter = "coop";
  $$(".filter", filters).forEach(item => item.classList.toggle("active", item.dataset.filter === "coop"));
  setTimeout(render, 0);
}));

// YouTube: pegá acá el enlace de tu video real.
const youtubeVideoUrl = "https://youtu.be/C3v4i5yDeJ4?si=PVr6Qq783h1I12Mn";

function getYouTubeEmbedUrl(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url.trim());
    let videoId = "";
    if (parsed.hostname.includes("youtu.be")) videoId = parsed.pathname.replace(/^\//, "").split("/")[0];
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") videoId = parsed.searchParams.get("v") || "";
      else if (parsed.pathname.startsWith("/shorts/")) videoId = parsed.pathname.split("/")[2] || "";
      else if (parsed.pathname.startsWith("/embed/")) videoId = parsed.pathname.split("/")[2] || "";
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : "";
  } catch { return ""; }
}

const youtubeEmbedUrl = getYouTubeEmbedUrl(youtubeVideoUrl);
const youtubeFrame = $("#youtubeFrame");
const youtubePlaceholder = $("#youtubePlaceholder");
if (youtubeEmbedUrl && youtubeFrame) {
  youtubeFrame.src = youtubeEmbedUrl;
  youtubeFrame.hidden = false;
  if (youtubePlaceholder) youtubePlaceholder.hidden = true;
}

// WhatsApp
const whatsappNumber = "5491150449061";
const whatsappText = "Hola, vi la PS3 Super Slim de 500 GB y quisiera consultar el precio y la disponibilidad.";
const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappText);
$("#whatsapp").href = whatsappUrl;

// Menú móvil
const menuToggle = $("#menuToggle");
const mobileMenu = $("#mobileMenu");
menuToggle?.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
$$(".mobile-menu a").forEach(link => link.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  if (menuToggle) menuToggle.textContent = "☰";
}));

// Galería / lightbox
const lightbox = $("#lightbox");
const lightboxImage = $("#lightbox-image");
const lightboxCaption = $("#lightbox-caption");
const lightboxCounter = $("#lightboxCounter");
const lightboxItems = $$("[data-lightbox]");
let photoIndex = 0;

function showPhoto(index) {
  photoIndex = (index + lightboxItems.length) % lightboxItems.length;
  const item = lightboxItems[photoIndex];
  lightboxImage.src = item.dataset.lightbox;
  lightboxImage.alt = item.querySelector("img")?.alt || "";
  lightboxCaption.textContent = item.dataset.caption || "";
  lightboxCounter.textContent = `${photoIndex + 1} / ${lightboxItems.length}`;
  lightbox.hidden = false;
  document.body.classList.add("modal-open");
  $("#lightbox-close")?.focus();
}

function closePhoto() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
  document.body.classList.remove("modal-open");
}

lightboxItems.forEach((item, index) => item.addEventListener("click", () => showPhoto(index)));
$(".lightbox-close")?.addEventListener("click", closePhoto);
$(".lightbox-prev")?.addEventListener("click", () => showPhoto(photoIndex - 1));
$(".lightbox-next")?.addEventListener("click", () => showPhoto(photoIndex + 1));
lightbox?.addEventListener("click", event => { if (event.target === lightbox) closePhoto(); });

document.addEventListener("keydown", event => {
  if (lightbox?.hidden) return;
  if (event.key === "Escape") closePhoto();
  if (event.key === "ArrowLeft") showPhoto(photoIndex - 1);
  if (event.key === "ArrowRight") showPhoto(photoIndex + 1);
});

// Animaciones de entrada
let revealObserver;
function observeReveal() {
  if (!("IntersectionObserver" in window)) {
    $$(".game-card").forEach(el => el.classList.add("is-visible"));
    return;
  }
  if (!revealObserver) revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:.08});
  $$(".game-card:not(.observed)").forEach((el, index) => {
    el.classList.add("observed");
    el.style.transitionDelay = `${Math.min(index * 22, 220)}ms`;
    revealObserver.observe(el);
  });
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("seen");
  }), {rootMargin:"-20% 0px -60% 0px"});
  $$("section").forEach(section => sectionObserver.observe(section));
}

// Scroll progress + botón arriba
const progress = $("#progress");
const backTop = $("#backTop");
function onScroll() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.width = `${ratio * 100}%`;
  backTop.classList.toggle("show", window.scrollY > 600);
}
window.addEventListener("scroll", onScroll, {passive:true});
backTop.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));

// Año y carga inicial
$("#year").textContent = new Date().getFullYear();
render();
onScroll();

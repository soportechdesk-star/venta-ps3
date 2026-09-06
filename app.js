const games = [
  {
    "title": "Metal Gear Solid V: The Phantom Pain",
    "genre": "Acción / Sigilo",
    "description": "Una enorme aventura de infiltración y mundo abierto protagonizada por Venom Snake.",
    "category": "destacado",
    "status": "próximo"
  },
  {
    "title": "Resident Evil 5",
    "genre": "Acción / Survival Horror",
    "description": "Combate, supervivencia y cooperación en una de las entregas más orientadas a la acción de la saga.",
    "category": "terror",
    "status": "próximo"
  },
  {
    "title": "Resident Evil 6",
    "genre": "Acción / Survival Horror",
    "description": "Una aventura con varias campañas, protagonistas y estilos de juego.",
    "category": "terror",
    "status": "próximo"
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

const catalog = document.getElementById("catalog");
const search = document.getElementById("search");
const filters = document.getElementById("filters");
const empty = document.getElementById("empty");
let activeFilter = "todos";

function wikiTitle(title) {
  const map = {
    "EA Sports FC 24": "FIFA 19",
    "TMNT: Turtles in Time Re-Shelled": "Teenage Mutant Ninja Turtles: Turtles in Time Re-Shelled",
    "LEGO The Lord of the Rings": "Lego The Lord of the Rings",
    "Uncharted 3: Drake's Deception": "Uncharted 3: Drake's Deception"
  };
  return map[title] || title;
}

function youtubeSearch(title) {
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(title + " PS3 gameplay");
}

function card(game, index) {
  const [title, genre, description, category, status] = [game.title, game.genre, game.description, game.category, game.status];
  const safeTitle = title.replace(/"/g, "&quot;");
  const fallback = title.split(/[:–-]/)[0].trim();
  return `<article class="game-card" data-title="${safeTitle.toLowerCase()}" data-category="${category}">
    <div class="cover">
      <img loading="lazy" alt="Portada de ${safeTitle}" data-wiki="${encodeURIComponent(wikiTitle(title))}">
      <div class="cover-fallback"><span>${fallback}</span></div>
      <span class="badge ${status === "próximo" ? "next" : ""}">${status === "próximo" ? "Próximamente" : "Incluido"}</span>
    </div>
    <div class="game-body">
      <div class="genre">${genre}</div>
      <h3>${title}</h3>
      <p>${description}</p>
      <div class="game-actions">
        <a href="${youtubeSearch(title)}" target="_blank" rel="noopener">▶ Gameplay</a>
        <a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(title + " PS3 cover")}" target="_blank" rel="noopener">🖼 Imágenes</a>
      </div>
    </div>
  </article>`;
}

function render() {
  const q = search.value.trim().toLowerCase();
  const filtered = games.filter(g => {
    const text = (g.title + " " + g.genre + " " + g.description).toLowerCase();
    const catOk = activeFilter === "todos" || g.category === activeFilter;
    return catOk && text.includes(q);
  });
  catalog.innerHTML = filtered.map((g,i) => card(g,i)).join("");
  empty.hidden = filtered.length !== 0;
  loadCovers();
}

async function loadCovers() {
  const imgs = document.querySelectorAll("img[data-wiki]");
  await Promise.all([...imgs].map(async img => {
    try {
      const title = decodeURIComponent(img.dataset.wiki);
      const r = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title));
      if (!r.ok) throw new Error("not found");
      const data = await r.json();
      if (data.thumbnail && data.thumbnail.source) {
        img.src = data.thumbnail.source;
        img.addEventListener("load", () => {
          img.closest(".cover").querySelector(".cover-fallback").style.display = "none";
        }, {once:true});
      }
    } catch(e) {
      img.style.display = "none";
    }
  }));
}

search.addEventListener("input", render);
filters.addEventListener("click", e => {
  const b = e.target.closest(".filter");
  if (!b) return;
  document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  activeFilter = b.dataset.filter;
  render();
});

document.getElementById("year").textContent = new Date().getFullYear();

// EDIT THIS NUMBER WITH YOUR WHATSAPP NUMBER, INCLUDING COUNTRY CODE, WITHOUT + OR SPACES.
// PEGÁ ACÁ LA URL DEL VIDEO DE YOUTUBE.
// Ejemplo: https://www.youtube.com/watch?v=ABC123XYZ
const youtubeVideoUrl = "";

function getYouTubeEmbedUrl(url) {
  if (!url) return "";
  try {
    const value = url.trim();
    const parsed = new URL(value);
    let videoId = "";
    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.replace(/^\//, "").split("/")[0];
    } else if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") videoId = parsed.searchParams.get("v") || "";
      else if (parsed.pathname.startsWith("/shorts/")) videoId = parsed.pathname.split("/")[2] || "";
      else if (parsed.pathname.startsWith("/embed/")) videoId = parsed.pathname.split("/")[2] || "";
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  } catch {
    return "";
  }
}

const youtubeEmbedUrl = getYouTubeEmbedUrl(youtubeVideoUrl);
const youtubeFrame = document.getElementById("youtubeFrame");
const youtubePlaceholder = document.getElementById("youtubePlaceholder");
if (youtubeEmbedUrl && youtubeFrame) {
  youtubeFrame.src = youtubeEmbedUrl;
  youtubeFrame.hidden = false;
  if (youtubePlaceholder) youtubePlaceholder.hidden = true;
}

const whatsappNumber = "5491150449061";
const whatsappText = "Hola, vi la PS3 Super Slim de 500 GB y quisiera consultar el precio y la disponibilidad.";
document.getElementById("whatsapp").href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappText);

render();

// Small polish: reveal cards as they enter the viewport.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.08});
new MutationObserver(() => {
  document.querySelectorAll(".game-card:not(.observed), .include-card:not(.observed), .trans-grid>div:not(.observed)").forEach(el => {
    el.classList.add("observed");
    revealObserver.observe(el);
  });
}).observe(document.body, {childList:true,subtree:true});

// Real-photo gallery lightbox.
const photoButtons = [...document.querySelectorAll("[data-lightbox]")];
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
let photoIndex = 0;

function showPhoto(index){
  photoIndex = (index + photoButtons.length) % photoButtons.length;
  const button = photoButtons[photoIndex];
  lightboxImage.src = button.dataset.lightbox;
  lightboxImage.alt = button.querySelector("img")?.alt || "";
  lightboxCaption.textContent = button.dataset.caption || "";
  lightbox.hidden = false;
  document.body.classList.add("modal-open");
}
function closePhoto(){
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.classList.remove("modal-open");
}
photoButtons.forEach((button,index)=>button.addEventListener("click",()=>showPhoto(index)));
document.querySelector(".lightbox-close")?.addEventListener("click",closePhoto);
document.querySelector(".lightbox-prev")?.addEventListener("click",()=>showPhoto(photoIndex-1));
document.querySelector(".lightbox-next")?.addEventListener("click",()=>showPhoto(photoIndex+1));
lightbox?.addEventListener("click",e=>{ if(e.target===lightbox) closePhoto(); });
document.addEventListener("keydown",e=>{
  if(lightbox?.hidden) return;
  if(e.key==="Escape") closePhoto();
  if(e.key==="ArrowLeft") showPhoto(photoIndex-1);
  if(e.key==="ArrowRight") showPhoto(photoIndex+1);
});

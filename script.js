(function(){
"use strict";

var photos = [
  {id:"01", tall:false,
    en:{title:"Game Face", place:"Southern California", note:"A close-up focus before the play unfolds — the look every athlete gets when the moment matters."},
    es:{title:"Cara de Juego", place:"Sur de California", note:"Un primer plano de concentración antes de que la jugada se desarrolle — la mirada que todo atleta tiene cuando el momento importa."}},
  {id:"02", tall:false,
    en:{title:"Breaking Away", place:"Southern California", note:"A midfielder splits the defense while a fallen opponent and the referee's call hang in the same frame."},
    es:{title:"Rompiendo la Defensa", place:"Sur de California", note:"Un mediocampista rompe la defensa mientras un rival caído y la señal del árbitro quedan en el mismo cuadro."}},
  {id:"03", tall:false,
    en:{title:"Eyes on the Ball", place:"Southern California", note:"Full stride, eyes locked on the ball in the air — the instant before contact."},
    es:{title:"Ojos en el Balón", place:"Sur de California", note:"A toda velocidad, con la mirada fija en el balón en el aire — el instante antes del contacto."}},
  {id:"04", tall:false,
    en:{title:"After the Bell", place:"Southern California", note:"A fighter takes in the ring and the crowd in the seconds after the round ends."},
    es:{title:"Después de la Campana", place:"Sur de California", note:"Un boxeador observa el cuadrilátero y al público en los segundos después de terminar el asalto."}},
  {id:"05", tall:false,
    en:{title:"Team Celebration", place:"Southern California", note:"The whole bench closes in on the goal scorer — pure, unscripted celebration."},
    es:{title:"Celebración de Equipo", place:"Sur de California", note:"Todo el banquillo se junta alrededor de quien anotó el gol — celebración pura, sin guion."}},
  {id:"06", tall:false,
    en:{title:"Fight Night", place:"Southern California", note:"Arms raised on the ropes, the crowd answering back — a professional boxing card under the lights."},
    es:{title:"Noche de Boxeo", place:"Sur de California", note:"Brazos en alto sobre las cuerdas, el público respondiendo — una velada de boxeo profesional bajo las luces."}},
  {id:"07", tall:false,
    en:{title:"Team Photo", place:"Southern California", note:"Paris Saint-Germain lines up on the pitch before kickoff, a full house behind them."},
    es:{title:"Foto de Equipo", place:"Sur de California", note:"El Paris Saint-Germain se alinea en la cancha antes del inicio, con el estadio lleno detrás."}},
  {id:"08", tall:false,
    en:{title:"Drive to the Basket", place:"Southern California", note:"A USC guard finishes through traffic on a pink-themed night at the arena."},
    es:{title:"Camino a la Canasta", place:"Sur de California", note:"Un guardia de USC termina la jugada entre la defensa, en una noche de uniformes rosas en el gimnasio."}},
  {id:"09", tall:false,
    en:{title:"Toe to Toe", place:"Southern California", note:"Two fighters in the exchange — the moment a bout is actually decided."},
    es:{title:"Frente a Frente", place:"Sur de California", note:"Dos boxeadores en el intercambio — el momento en que realmente se decide una pelea."}},
  {id:"10", tall:false,
    en:{title:"Arm Raised", place:"Southern California", note:"The instant a fighter's hand goes up and the result becomes official."},
    es:{title:"Brazo en Alto", place:"Sur de California", note:"El instante en que se levanta la mano de un boxeador y el resultado se hace oficial."}},
  {id:"11", tall:false,
    en:{title:"Before the Whistle", place:"Southern California", note:"Hand over heart for the anthem, young ballboys standing close — the quiet before kickoff."},
    es:{title:"Antes del Silbatazo", place:"Sur de California", note:"Mano en el corazón durante el himno, con los recogebalones a su lado — la calma antes del inicio."}},
  {id:"12", tall:false,
    en:{title:"Final Buzzer", place:"Southern California", note:"A player lets it out after the final horn — everything the game was building toward, in one frame."},
    es:{title:"Silbatazo Final", place:"Sur de California", note:"Un jugador lo grita todo tras la chicharra final — todo lo que el partido venía construyendo, en un solo cuadro."}},
  {id:"13", tall:true,
    en:{title:"Full Extension", place:"Southern California", note:"Every muscle committed to the celebration — a thousandth of a second that tells the whole story."},
    es:{title:"Extensión Total", place:"Sur de California", note:"Cada músculo entregado a la celebración — una milésima de segundo que cuenta toda la historia."}},
  {id:"01", tall:false,
    en:{title:"Game Face", place:"Southern California", note:"A close-up focus before the play unfolds — the look every athlete gets when the moment matters."},
    es:{title:"Cara de Juego", place:"Sur de California", note:"Un primer plano de concentración antes de que la jugada se desarrolle — la mirada que todo atleta tiene cuando el momento importa."}},
  {id:"02", tall:false,
    en:{title:"Breaking Away", place:"Southern California", note:"A midfielder splits the defense while a fallen opponent and the referee's call hang in the same frame."},
    es:{title:"Rompiendo la Defensa", place:"Sur de California", note:"Un mediocampista rompe la defensa mientras un rival caído y la señal del árbitro quedan en el mismo cuadro."}},
  {id:"03", tall:false,
    en:{title:"Eyes on the Ball", place:"Southern California", note:"Full stride, eyes locked on the ball in the air — the instant before contact."},
    es:{title:"Ojos en el Balón", place:"Sur de California", note:"A toda velocidad, con la mirada fija en el balón en el aire — el instante antes del contacto."}},
  {id:"04", tall:false,
    en:{title:"After the Bell", place:"Southern California", note:"A fighter takes in the ring and the crowd in the seconds after the round ends."},
    es:{title:"Después de la Campana", place:"Sur de California", note:"Un boxeador observa el cuadrilátero y al público en los segundos después de terminar el asalto."}},
  {id:"05", tall:false,
    en:{title:"Team Celebration", place:"Southern California", note:"The whole bench closes in on the goal scorer — pure, unscripted celebration."},
    es:{title:"Celebración de Equipo", place:"Sur de California", note:"Todo el banquillo se junta alrededor de quien anotó el gol — celebración pura, sin guion."}},
  {id:"06", tall:false,
    en:{title:"Fight Night", place:"Southern California", note:"Arms raised on the ropes, the crowd answering back — a professional boxing card under the lights."},
    es:{title:"Noche de Boxeo", place:"Sur de California", note:"Brazos en alto sobre las cuerdas, el público respondiendo — una velada de boxeo profesional bajo las luces."}},
  {id:"07", tall:false,
    en:{title:"Team Photo", place:"Southern California", note:"Paris Saint-Germain lines up on the pitch before kickoff, a full house behind them."},
    es:{title:"Foto de Equipo", place:"Sur de California", note:"El Paris Saint-Germain se alinea en la cancha antes del inicio, con el estadio lleno detrás."}},
  {id:"08", tall:false,
    en:{title:"Drive to the Basket", place:"Southern California", note:"A USC guard finishes through traffic on a pink-themed night at the arena."},
    es:{title:"Camino a la Canasta", place:"Sur de California", note:"Un guardia de USC termina la jugada entre la defensa, en una noche de uniformes rosas en el gimnasio."}}
];
var N = photos.length;
function pt(p){ return p[currentLang] || p.en; }

/* ---------- i18n ---------- */
var UI = {
  en:{
    title:"Juan Serrano — Capture the Moment Before It’s Gone",
    metaDesc:"Sports photography by Juan Serrano of Serrano Studio Photography. From the first serve to the final buzzer, serving Southern California.",
    headlineWords:["Capture","the","Moment","Before","It’s","Gone."],
    menuLabel:"Menu",
    bio:"From the first serve to the final buzzer, Juan Serrano captures the split seconds that make every game worth remembering.",
    colophon:"Serving Southern California",
    cue:"Drag to rotate",
    tag:"The Season in Frames",
    skip:"Skip",
    navPortfolio:"Portfolio", navServices:"Services", navAbout:"About", navContact:"Contact",
    addrLine:"Serving Southern California",
    privacyLink:"Privacy", termsLink:"Terms",
    litClose:"Close",
    ariaOpenMenu:"Open menu", ariaCloseMenu:"Close menu", ariaToggleGrid:"Toggle grid view",
    ariaWordmark:"Juan Serrano — Serrano Studio Photography"
  },
  es:{
    title:"Juan Serrano — Captura el Momento Antes de Irse",
    metaDesc:"Fotografía deportiva de Juan Serrano, de Serrano Studio Photography. Desde el primer saque hasta el silbatazo final, sirviendo al Sur de California.",
    headlineWords:["Captura","el","Momento","Antes","de","Irse."],
    menuLabel:"Menú",
    bio:"Desde el primer saque hasta el silbatazo final, Juan Serrano captura los instantes que hacen que cada partido valga la pena recordar.",
    colophon:"Sirviendo al Sur de California",
    cue:"Arrastra para girar",
    tag:"La Temporada en Imágenes",
    skip:"Omitir",
    navPortfolio:"Portafolio", navServices:"Servicios", navAbout:"Acerca de", navContact:"Contacto",
    addrLine:"Sirviendo al Sur de California",
    privacyLink:"Privacidad", termsLink:"Términos",
    litClose:"Cerrar",
    ariaOpenMenu:"Abrir menú", ariaCloseMenu:"Cerrar menú", ariaToggleGrid:"Alternar vista de cuadrícula",
    ariaWordmark:"Juan Serrano — Fotografía de Serrano Studio"
  }
};
var currentLang = "en";
try{
  var savedLang = localStorage.getItem("ss_lang");
  if (savedLang === "en" || savedLang === "es") currentLang = savedLang;
}catch(e){}

/* ---------- DOM refs ---------- */
var stage = document.getElementById("stage");
var world = document.getElementById("world");
var orb = document.getElementById("orb");
var headline = document.getElementById("headline");
var gridRows = document.querySelector("#grid .rows");
var splash = document.getElementById("splash");
var bar = document.getElementById("bar");
var intro = document.getElementById("intro");
var film = document.getElementById("film");
var skipBtn = document.getElementById("skip");
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var gridBtn = document.getElementById("gridBtn");
var avatarImg = document.getElementById("avatar");
var lit = document.getElementById("lit");
var plate = lit.querySelector(".plate");
var litImg = document.getElementById("litImg");
var litTitle = document.getElementById("litTitle");
var litWhere = document.getElementById("litWhere");
var litNote = document.getElementById("litNote");
var dot = document.getElementById("dot");
var wordmarkLogo = document.querySelector(".wordmark img");
if (wordmarkLogo){
  wordmarkLogo.addEventListener("error", function(){
    var wm = wordmarkLogo.closest(".wordmark");
    if (wm) wm.classList.add("logo-broken");
  }, {once:true});
}
var splashLogo = document.querySelector("#splash .logo");
if (splashLogo){
  splashLogo.addEventListener("error", function(){
    splash.classList.add("logo-broken");
  }, {once:true});
}

/* ---------- image decode / downscale ---------- */
function cardDecodeMax(){
  var w = window.innerWidth;
  if (w<=380) return 420;
  if (w<=640) return 520;
  if (w<=900) return 640;
  return 760;
}
function decodeDownscale(src, maxDim){
  return new Promise(function(resolve){
    var img = new Image();
    img.onload = function(){
      try{
        var w = img.naturalWidth, h = img.naturalHeight;
        if (!w || !h || (w<=maxDim && h<=maxDim)){ resolve(src); return; }
        var scale = Math.min(1, maxDim/Math.max(w,h));
        var cw = Math.max(1, Math.round(w*scale));
        var ch = Math.max(1, Math.round(h*scale));
        var canvas = document.createElement("canvas");
        canvas.width = cw; canvas.height = ch;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img,0,0,cw,ch);
        canvas.toBlob(function(blob){
          resolve(blob ? URL.createObjectURL(blob) : src);
        }, "image/webp", 0.88);
      }catch(e){ resolve(src); }
    };
    img.onerror = function(){ resolve(src); };
    img.src = src;
  });
}
function decodeAvatar(src, maxWidth){
  return new Promise(function(resolve){
    var img = new Image();
    img.onload = function(){
      try{
        var w = img.naturalWidth, h = img.naturalHeight;
        if (!w || w<=maxWidth){ resolve(src); return; }
        var scale = maxWidth/w;
        var cw = maxWidth, ch = Math.max(1, Math.round(h*scale));
        var canvas = document.createElement("canvas");
        canvas.width = cw; canvas.height = ch;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img,0,0,cw,ch);
        canvas.toBlob(function(blob){
          resolve(blob ? URL.createObjectURL(blob) : src);
        }, "image/webp", 0.88);
      }catch(e){ resolve(src); }
    };
    img.onerror = function(){ resolve(src); };
    img.src = src;
  });
}

/* ---------- splash progress ---------- */
var splashDone = false;
var splashDoneCallbacks = [];
function onSplashDone(cb){ if (splashDone) cb(); else splashDoneCallbacks.push(cb); }
function finishSplashDone(){
  splashDone = true;
  var cbs = splashDoneCallbacks; splashDoneCallbacks = [];
  cbs.forEach(function(cb){ cb(); });
}

var splashTotal = N + 1; /* 21 stills + film */
var splashLoaded = 0;
var splashStarted = performance.now();
var splashMinTimer = null, splashMaxTimer = null, splashFinished = false;
function splashReport(){
  splashLoaded++;
  var ratio = Math.min(1, splashLoaded/splashTotal);
  bar.style.transform = "scaleX(" + ratio + ")";
  maybeFinishSplash();
}
function maybeFinishSplash(){
  var elapsed = performance.now() - splashStarted;
  if (splashLoaded>=splashTotal && elapsed>=1150) finishSplash();
}
function finishSplash(){
  if (splashFinished) return;
  splashFinished = true;
  if (splashMinTimer) clearTimeout(splashMinTimer);
  if (splashMaxTimer) clearTimeout(splashMaxTimer);
  bar.style.transform = "scaleX(1)";
  requestAnimationFrame(function(){
    splash.classList.add("out");
    if (film && film.play) { film.play().catch(function(){}); }
    setTimeout(function(){
      if (splash.parentNode) splash.parentNode.removeChild(splash);
      finishSplashDone();
    }, 950);
  });
}
splashMinTimer = setTimeout(maybeFinishSplash, 1150);
splashMaxTimer = setTimeout(finishSplash, 9000);

/* ---------- sphere geometry ---------- */
var GA = Math.PI * (3 - Math.sqrt(5));
var cards = [];
photos.forEach(function(p, i){
  var y = 1 - (i/(N-1)) * 2;
  var rad = Math.sqrt(Math.max(0, 1 - y*y));
  var theta = i * GA;
  var x = Math.cos(theta) * rad;
  var z = Math.sin(theta) * rad;
  var lat = Math.asin(y) * 180/Math.PI;
  var lon = Math.atan2(x,z) * 180/Math.PI;
  cards.push({idx:i, ux:x, uy:y, uz:z, lat:lat, lon:lon, tall:p.tall, photo:p, thumbSrc:null, lastOpacity:null, lastDim:null});
});

/* build sphere card DOM */
cards.forEach(function(c){
  var div = document.createElement("div");
  div.className = "card" + (c.tall ? " tall" : "");
  div.setAttribute("data-idx", c.idx);
  div.setAttribute("tabindex", "0");
  div.setAttribute("role", "button");
  div.setAttribute("aria-label", pt(c.photo).title);
  var figure = document.createElement("figure");
  var img = document.createElement("img");
  img.alt = pt(c.photo).title;
  figure.appendChild(img);
  div.appendChild(figure);
  div.addEventListener("keydown", function(e){
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar"){
      e.preventDefault();
      openLightbox(div, c.idx);
    }
  });
  orb.appendChild(div);
  c.el = div; c.img = img;
});

/* build grid DOM */
var gridFigs = [];
photos.forEach(function(p, i){
  var fig = document.createElement("figure");
  fig.setAttribute("data-idx", i);
  fig.setAttribute("tabindex", "0");
  fig.setAttribute("role", "button");
  fig.setAttribute("aria-label", pt(p).title);
  var img = document.createElement("img");
  img.alt = pt(p).title;
  var cap = document.createElement("figcaption");
  cap.textContent = pt(p).title;
  fig.appendChild(img);
  fig.appendChild(cap);
  fig.addEventListener("click", function(){ openLightbox(fig, i); });
  fig.addEventListener("keydown", function(e){
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar"){
      e.preventDefault();
      openLightbox(fig, i);
    }
  });
  gridRows.appendChild(fig);
  gridFigs.push({el:fig, img:img, cap:cap});
});

/* decode all photos */
var decodeMax = cardDecodeMax();
photos.forEach(function(p, i){
  var src = "assets/photos/" + p.id + ".jpg";
  decodeDownscale(src, decodeMax).then(function(thumb){
    cards[i].thumbSrc = thumb;
    cards[i].img.src = thumb;
    cards[i].img.classList.add("in");
    gridFigs[i].img.src = thumb;
    splashReport();
  });
});
decodeAvatar("assets/avatar.jpeg", 160).then(function(src){
  avatarImg.src = src;
});

/* ---------- layout (position cards on sphere) ---------- */
var R = 0, cw = 0, persp = 1150;
var lastW = null, lastH = null;
function computeLayout(){
  var w = window.innerWidth, h = window.innerHeight;
  var hr, wr, floor, scale;
  if (w<=380){ hr=0.38; wr=0.48; floor=108; scale=0.44; }
  else if (w<=640){ hr=0.42; wr=0.52; floor=120; scale=0.46; }
  else { hr=0.46; wr=0.58; floor=155; scale=0.47; }
  var r = Math.max(floor, Math.min(480, h*hr, w*wr));
  var cardW = Math.round(Math.max(72, r*scale));
  var p;
  if (w<=380) p=620; else if (w<=640) p=760; else if (w<=900) p=920; else p=1150;
  return {R:r, cw:cardW, persp:p};
}
function layoutSphere(force){
  var w = window.innerWidth, h = window.innerHeight;
  if (!force && lastW!==null){
    if (Math.abs(w-lastW)<20 && Math.abs(h-lastH)<20) return;
  }
  lastW = w; lastH = h;
  var L = computeLayout();
  R = L.R; cw = L.cw; persp = L.persp;
  document.documentElement.style.setProperty("--persp", persp + "px");
  cards.forEach(function(c){
    var tx = c.ux*R, ty = -c.uy*R, tz = c.uz*R;
    c.el.style.transform = "translate3d(" + tx + "px," + ty + "px," + tz + "px) rotateY(" + c.lon + "deg) rotateX(" + c.lat + "deg)";
    c.el.style.width = cw + "px";
    if (c.tall){
      c.el.style.height = (cw*1.25) + "px";
      c.el.style.marginLeft = (-cw/2) + "px";
      c.el.style.marginTop = (-cw*0.625) + "px";
    } else {
      c.el.style.height = (cw/1.5) + "px";
      c.el.style.marginLeft = (-cw/2) + "px";
      c.el.style.marginTop = (-cw/3) + "px";
    }
  });
}
layoutSphere(true);

window.addEventListener("resize", function(){ layoutSphere(false); });
window.addEventListener("orientationchange", function(){
  setTimeout(function(){ layoutSphere(true); }, 220);
});
if (window.visualViewport){
  window.visualViewport.addEventListener("resize", function(){ layoutSphere(false); });
  window.visualViewport.addEventListener("scroll", function(){ layoutSphere(false); });
}

/* ---------- scroll clamp ---------- */
function clampScroll(){
  var max = window.innerHeight * 0.16;
  if (window.scrollY > max) window.scrollTo(0, max);
}
window.addEventListener("scroll", clampScroll, {passive:true});

/* ---------- rotation math ---------- */
function rotPoint(x,y,z,sxDeg,syDeg){
  var sx = sxDeg*Math.PI/180, sy = syDeg*Math.PI/180;
  var y1 = y*Math.cos(sx) - z*Math.sin(sx);
  var z1 = y*Math.sin(sx) + z*Math.cos(sx);
  var x1 = x;
  var x2 = x1*Math.cos(sy) + z1*Math.sin(sy);
  var z2 = -x1*Math.sin(sy) + z1*Math.cos(sy);
  var y2 = y1;
  return {x:x2, y:y2, z:z2};
}

/* ---------- camera state ---------- */
var spin = 0, tilt = -4, camZ = 0;
var dragX = 0, dragY = 0, velX = 0, velY = 0;
var pitchLimit = 32;
var focused = -1;
var isDragging = false;

function clampPitch(){
  var maxDragY = pitchLimit - tilt;
  var minDragY = -pitchLimit - tilt;
  dragY = Math.max(minDragY, Math.min(maxDragY, dragY));
}

function update(){
  var lit_ = document.body.classList.contains("lit");
  if (!isDragging && !lit_){
    dragX += velX; dragY += velY;
    velX *= 0.94; velY *= 0.94;
    if (Math.abs(velX)<0.002) velX = 0;
    if (Math.abs(velY)<0.002) velY = 0;
    clampPitch();
  }
  var p = Math.max(0, Math.min(1, window.scrollY / (window.innerHeight*0.16)));
  var camZTarget = p * Math.min(64, R*0.12);
  camZ += (camZTarget - camZ) * 0.075;
  var sx = tilt + dragY;
  var sy = spin + dragX;
  world.style.transform = "translateZ(" + camZ + "px) rotateY(" + sy + "deg) rotateX(" + sx + "deg)";
  headline.style.transform = "rotateX(" + (-sx) + "deg) rotateY(" + (-sy) + "deg) translateZ(" + (R*0.62) + "px)";
  headline.style.opacity = Math.max(0, 1 - p*0.55);

  var isDeep = p > 0.5;
  document.body.classList.toggle("deep", isDeep);

  var near = persp * 0.66;
  var shade = 1 - Math.min(1, p*1.6);
  for (var i=0; i<cards.length; i++){
    var c = cards[i];
    var r = rotPoint(c.ux, c.uy, c.uz, sx, sy);
    var zf = r.z;
    var base = 0.14 + 0.86 * Math.pow((zf+1)/2, 0.85);
    var dim = shade * (1-base);
    var fade = 1;
    var za = zf*R + camZ;
    if (za > near) fade = Math.max(0, 1 - (za-near)/190);
    if (lit_){
      dim = Math.min(1, dim + 0.78);
      if (c.idx === focused) fade = 0;
    }
    if (c.lastOpacity !== fade){ c.el.style.opacity = fade; c.lastOpacity = fade; }
    if (c.lastDim !== dim){ c.el.style.setProperty("--d", dim); c.lastDim = dim; }
  }
}
update();
function frame(){ update(); requestAnimationFrame(frame); }
requestAnimationFrame(frame);

/* ---------- drag / rotate ---------- */
var dragState = null;
stage.addEventListener("pointerdown", function(e){
  if (document.body.classList.contains("lit")) return;
  var cardEl = e.target.closest ? e.target.closest(".card") : null;
  dragState = {
    id:e.pointerId, startX:e.clientX, startY:e.clientY,
    lastX:e.clientX, lastY:e.clientY,
    type:e.pointerType, decided:e.pointerType!=="touch",
    captured:false, moved:0, cardEl:cardEl
  };
  if (dragState.decided){
    try{ stage.setPointerCapture(e.pointerId); dragState.captured = true; }catch(err){}
    isDragging = true; velX = 0; velY = 0;
  }
});
window.addEventListener("pointermove", function(e){
  if (!dragState || e.pointerId !== dragState.id) return;
  var dx = e.clientX - dragState.lastX;
  var dy = e.clientY - dragState.lastY;
  var totalDx = e.clientX - dragState.startX;
  var totalDy = e.clientY - dragState.startY;
  dragState.moved = Math.max(dragState.moved, Math.hypot(totalDx, totalDy));

  if (!dragState.decided){
    var total = Math.hypot(totalDx, totalDy);
    if (total > 10){
      if (Math.abs(totalDy) > Math.abs(totalDx) * 1.15){
        dragState = null;
        return;
      } else {
        dragState.decided = true;
        try{ stage.setPointerCapture(e.pointerId); dragState.captured = true; }catch(err){}
        isDragging = true; velX = 0; velY = 0;
      }
    } else {
      return;
    }
  }

  dragX += dx * 0.13;
  dragY += dy * 0.13;
  clampPitch();
  velX = dx * 0.13;
  velY = dy * 0.13;
  dragState.lastX = e.clientX;
  dragState.lastY = e.clientY;
});
function endDrag(e){
  if (!dragState || e.pointerId !== dragState.id) return;
  var slop = dragState.type === "touch" ? 14 : 6;
  if (dragState.moved <= slop && dragState.cardEl){
    var idx = +dragState.cardEl.getAttribute("data-idx");
    openLightbox(dragState.cardEl, idx);
  }
  if (dragState.captured){
    try{ stage.releasePointerCapture(e.pointerId); }catch(err){}
  }
  isDragging = false;
  dragState = null;
}
window.addEventListener("pointerup", endDrag);
window.addEventListener("pointercancel", function(){ isDragging = false; dragState = null; });

/* ---------- language ---------- */
function applyLang(lang){
  if (!UI[lang]) lang = "en";
  currentLang = lang;
  try{ localStorage.setItem("ss_lang", lang); }catch(e){}
  var t = UI[lang];

  document.documentElement.lang = lang;
  document.title = t.title;
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.metaDesc);

  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  var spans = headline.querySelectorAll(".inner span");
  spans.forEach(function(span, i){
    if (t.headlineWords[i] !== undefined) span.textContent = t.headlineWords[i];
  });

  menuBtn.setAttribute("aria-label", menuOpen ? t.ariaCloseMenu : t.ariaOpenMenu);
  gridBtn.setAttribute("aria-label", t.ariaToggleGrid);
  var wordmarkA = document.querySelector(".wordmark");
  if (wordmarkA) wordmarkA.setAttribute("aria-label", t.ariaWordmark);

  document.querySelectorAll(".langbtn").forEach(function(btn){
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
  });

  cards.forEach(function(c){
    var tt = pt(c.photo).title;
    c.img.alt = tt;
    c.el.setAttribute("aria-label", tt);
  });
  gridFigs.forEach(function(g, i){
    var tt = pt(photos[i]).title;
    g.img.alt = tt;
    g.cap.textContent = tt;
    g.el.setAttribute("aria-label", tt);
  });

  if (document.body.classList.contains("lit") && focused>=0){
    var lp = pt(photos[focused]);
    litImg.alt = lp.title;
    litTitle.textContent = lp.title;
    litWhere.textContent = lp.place;
    litNote.textContent = lp.note;
  }
}
document.querySelectorAll(".langbtn").forEach(function(btn){
  btn.addEventListener("click", function(){ applyLang(btn.getAttribute("data-lang")); });
});

/* ---------- menu ---------- */
var menuOpen = false;
function openMenu(){
  menuOpen = true;
  document.body.classList.add("menuopen");
  menu.classList.add("open");
  menuBtn.setAttribute("aria-expanded","true");
  menuBtn.setAttribute("aria-label","Close menu");
}
function closeMenu(){
  menuOpen = false;
  document.body.classList.remove("menuopen");
  menu.classList.remove("open");
  menuBtn.setAttribute("aria-expanded","false");
  menuBtn.setAttribute("aria-label","Open menu");
}
menuBtn.addEventListener("click", function(){ menuOpen ? closeMenu() : openMenu(); });
var menuGridLink = menu.querySelector("[data-grid]");
if (menuGridLink){
  menuGridLink.addEventListener("click", function(e){ e.preventDefault(); closeMenu(); toggleGrid(true); });
}
menu.querySelectorAll("[data-close-menu]").forEach(function(a){
  a.addEventListener("click", function(e){ e.preventDefault(); closeMenu(); });
});
menu.querySelectorAll('a[href^="mailto:"]').forEach(function(a){
  a.addEventListener("click", function(){ closeMenu(); });
});

/* ---------- grid toggle ---------- */
function toggleGrid(force){
  var show = (typeof force === "boolean") ? force : !document.body.classList.contains("gridview");
  document.body.classList.toggle("gridview", show);
}
gridBtn.addEventListener("click", function(){ toggleGrid(); });

/* ---------- lightbox ---------- */
var litToken = 0;
function openLightbox(sourceEl, idx){
  if (document.body.classList.contains("lit")) return;
  if (!sourceEl) return;
  focused = idx;
  var token = ++litToken;
  var p = photos[idx];
  var t = pt(p);
  var sourceRect = sourceEl.getBoundingClientRect();

  litImg.src = (cards[idx].thumbSrc) || "assets/photos/" + p.id + ".jpg";
  litImg.alt = t.title;
  litTitle.textContent = t.title;
  litWhere.textContent = t.place;
  litNote.textContent = t.note;
  plate.classList.toggle("tall", !!p.tall);

  document.body.classList.add("lit");
  document.body.style.overflow = "hidden";

  requestAnimationFrame(function(){
    var plateRect = plate.getBoundingClientRect();
    var dx = (sourceRect.left + sourceRect.width/2) - (plateRect.left + plateRect.width/2);
    var dy = (sourceRect.top + sourceRect.height/2) - (plateRect.top + plateRect.height/2);
    var scale = Math.max(0.04, sourceRect.width / plateRect.width);
    plate.style.transition = "none";
    plate.style.transform = "translate(" + dx + "px," + dy + "px) scale(" + scale + ")";
    plate.style.opacity = "0";
    void plate.offsetHeight;
    plate.style.transition = "";
    plate.style.transform = "";
    plate.style.opacity = "";
  });

  var full = new Image();
  full.onload = function(){
    if (token === litToken) litImg.src = full.src;
  };
  full.src = "assets/photos/" + p.id + ".jpg";
}
function closeLightbox(){
  if (!document.body.classList.contains("lit")) return;
  var idx = focused;
  focused = -1;
  document.body.classList.remove("lit");
  document.body.style.overflow = "";

  var targetEl = null;
  if (document.body.classList.contains("gridview")){
    targetEl = gridFigs[idx] ? gridFigs[idx].el : null;
  } else {
    targetEl = cards[idx] ? cards[idx].el : null;
  }
  if (targetEl){
    var sourceRect = targetEl.getBoundingClientRect();
    var plateRect = plate.getBoundingClientRect();
    var dx = (sourceRect.left + sourceRect.width/2) - (plateRect.left + plateRect.width/2);
    var dy = (sourceRect.top + sourceRect.height/2) - (plateRect.top + plateRect.height/2);
    var scale = Math.max(0.04, sourceRect.width / plateRect.width);
    plate.style.transform = "translate(" + dx + "px," + dy + "px) scale(" + scale + ")";
    plate.style.opacity = "0";
  }
  setTimeout(function(){
    plate.style.transition = "none";
    plate.style.transform = "";
    plate.style.opacity = "";
    void plate.offsetHeight;
    plate.style.transition = "";
  }, 640);
}
lit.querySelectorAll("[data-close]").forEach(function(el){
  el.addEventListener("click", closeLightbox);
});

/* ---------- escape key ---------- */
window.addEventListener("keydown", function(e){
  if (e.key === "Escape"){
    if (document.body.classList.contains("lit")) closeLightbox();
    else if (menuOpen) closeMenu();
    else if (document.body.classList.contains("gridview")) toggleGrid(false);
  }
});

/* ---------- intro film ---------- */
var introRevealed = false;
function reveal(){
  if (introRevealed) return;
  introRevealed = true;
  intro.classList.add("closing");
  document.body.classList.remove("locked");
  document.documentElement.style.overflow = "";
  layoutSphere(true);
  requestAnimationFrame(function(){
    layoutSphere(true);
    setTimeout(function(){
      layoutSphere(true);
      document.body.classList.add("revealed");
      intro.classList.add("gone");
      setTimeout(function(){
        if (intro.parentNode) intro.parentNode.removeChild(intro);
      }, 700);
    }, 1000);
  });
}

var deepLinkGrid = location.hash === "#portfolio";

if (deepLinkGrid){
  if (splash && splash.parentNode) splash.parentNode.removeChild(splash);
  if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
  if (film){
    try{ film.pause(); film.removeAttribute("src"); film.load(); }catch(e){}
  }
  introRevealed = true;
  document.body.classList.remove("locked");
  document.documentElement.style.overflow = "";
  layoutSphere(true);
  document.body.classList.add("revealed");
} else if (film){
  film.muted = true;
  film.defaultMuted = true;
  film.playsInline = true;
  film.setAttribute("webkit-playsinline","true");
  film.playbackRate = 2;

  var revealScheduled = false;
  film.addEventListener("play", function(){ film.playbackRate = 2; });
  film.addEventListener("playing", function(){
    if (film.currentTime > 0.05 && film.duration && film.currentTime < 0.2) {
      try{ film.currentTime = 0; }catch(e){}
    }
    if (revealScheduled) return;
    revealScheduled = true;
    var dur = film.duration || 0;
    var delay = Math.max(300, ((dur - film.currentTime - 0.45) / 2) * 1000);
    if (!isFinite(delay) || delay <= 0) delay = 300;
    setTimeout(reveal, delay);
  });
  film.addEventListener("ended", reveal);
  film.addEventListener("loadeddata", function(){ splashReport(); }, {once:true});
  film.addEventListener("error", function(){
    intro.classList.add("novideo");
    splashReport();
    onSplashDone(function(){ setTimeout(reveal, 1300); });
  }, {once:true});

  setTimeout(reveal, 14000);

  var playPromise = film.play();
  if (playPromise && playPromise.catch) playPromise.catch(function(){});

  setTimeout(function(){
    if (film.paused && !introRevealed){
      intro.classList.add("novideo");
      reveal();
    }
  }, 2600);

  var resumeOnInteract = function(){
    var p = film.play();
    if (p && p.catch) p.catch(function(){});
    window.removeEventListener("pointerdown", resumeOnInteract);
    window.removeEventListener("keydown", resumeOnInteract);
    window.removeEventListener("touchstart", resumeOnInteract);
  };
  window.addEventListener("pointerdown", resumeOnInteract, {once:true});
  window.addEventListener("keydown", resumeOnInteract, {once:true});
  window.addEventListener("touchstart", resumeOnInteract, {once:true});
} else {
  splashReport();
  setTimeout(reveal, 1300);
}
skipBtn.addEventListener("click", reveal);

/* ---------- custom cursor ---------- */
var mouseX = window.innerWidth/2, mouseY = window.innerHeight/2;
var dotX = mouseX, dotY = mouseY;
window.addEventListener("pointermove", function(e){
  if (e.pointerType === "touch") return;
  mouseX = e.clientX; mouseY = e.clientY;
  var wide = !!(e.target.closest && e.target.closest(".card, a, button, #grid figure"));
  dot.classList.toggle("wide", wide);
});
function dotLoop(){
  dotX += (mouseX - dotX) * 0.2;
  dotY += (mouseY - dotY) * 0.2;
  dot.style.transform = "translate3d(" + dotX + "px," + dotY + "px,0)";
  requestAnimationFrame(dotLoop);
}
requestAnimationFrame(dotLoop);

applyLang(currentLang);

if (deepLinkGrid) toggleGrid(true);

})();

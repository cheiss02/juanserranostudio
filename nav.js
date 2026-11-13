(function(){
"use strict";

/* Labels shared by every secondary page (nav + footer); a page's own
   UI object overrides any of these. */
var SHARED = {
  en:{
    navPortfolio:"Portfolio", navServices:"Services", navAbout:"About", navContact:"Contact",
    privacyLink:"Privacy", termsLink:"Terms",
    footCtaLine:"Let’s capture your day.", footCtaBtn:"Request a Quote",
    footTagline:"Quinceañera, wedding, portrait and sports photography in Southern California.",
    footExplore:"Explore", footContact:"Contact", footFollow:"Follow",
    footRights:"All rights reserved."
  },
  es:{
    navPortfolio:"Portafolio", navServices:"Servicios", navAbout:"Acerca de", navContact:"Contacto",
    privacyLink:"Privacidad", termsLink:"Términos",
    footCtaLine:"Capturemos tu día.", footCtaBtn:"Solicitar Cotización",
    footTagline:"Fotografía de quinceañeras, bodas, retratos y deportes en el Sur de California.",
    footExplore:"Explorar", footContact:"Contacto", footFollow:"Síguenos",
    footRights:"Todos los derechos reservados."
  }
};

function initSiteChrome(UI){
  var menu = document.getElementById("menu");
  var menuBtn = document.getElementById("menuBtn");
  var dot = document.getElementById("dot");
  var menuOpen = false;
  var currentLang = "en";

  try{
    var saved = localStorage.getItem("ss_lang");
    if (saved === "en" || saved === "es") currentLang = saved;
  }catch(e){}

  function openMenu(){
    if (!menu || !menuBtn) return;
    menuOpen = true;
    document.body.classList.add("menuopen");
    menu.classList.add("open");
    menuBtn.setAttribute("aria-expanded","true");
    menuBtn.setAttribute("aria-label", UI[currentLang].ariaCloseMenu);
  }
  function closeMenu(){
    if (!menu || !menuBtn) return;
    menuOpen = false;
    document.body.classList.remove("menuopen");
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded","false");
    menuBtn.setAttribute("aria-label", UI[currentLang].ariaOpenMenu);
  }
  if (menuBtn){
    menuBtn.addEventListener("click", function(){ menuOpen ? closeMenu() : openMenu(); });
  }
  var closeLinks = menu ? menu.querySelectorAll("[data-close-menu]") : [];
  closeLinks.forEach(function(a){ a.addEventListener("click", function(e){ e.preventDefault(); closeMenu(); }); });
  if (menu){
    menu.querySelectorAll('a[href^="mailto:"]').forEach(function(a){
      a.addEventListener("click", function(){ closeMenu(); });
    });
  }
  window.addEventListener("keydown", function(e){
    if (e.key === "Escape" && menuOpen) closeMenu();
  });

  function applyLang(lang){
    if (!UI[lang]) lang = "en";
    currentLang = lang;
    try{ localStorage.setItem("ss_lang", lang); }catch(e){}
    var t = Object.assign({}, SHARED[lang], UI[lang]);

    document.documentElement.lang = lang;
    if (t.title) document.title = t.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.metaDesc) metaDesc.setAttribute("content", t.metaDesc);

    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function(el){
      var key = el.getAttribute("data-i18n-html");
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    if (menuBtn) menuBtn.setAttribute("aria-label", menuOpen ? t.ariaCloseMenu : t.ariaOpenMenu);
    var wordmarkA = document.querySelector(".wordmark");
    if (wordmarkA && t.ariaWordmark) wordmarkA.setAttribute("aria-label", t.ariaWordmark);

    document.querySelectorAll(".langbtn").forEach(function(btn){
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    document.dispatchEvent(new CustomEvent("ss:langchange", {detail:{lang:lang}}));
  }

  document.querySelectorAll(".langbtn").forEach(function(btn){
    btn.addEventListener("click", function(){ applyLang(btn.getAttribute("data-lang")); });
  });

  var wordmarkLogo = document.querySelector(".wordmark img");
  if (wordmarkLogo){
    wordmarkLogo.addEventListener("error", function(){
      var wm = wordmarkLogo.closest(".wordmark");
      if (wm) wm.classList.add("logo-broken");
    }, {once:true});
  }

  if (dot){
    var mouseX = window.innerWidth/2, mouseY = window.innerHeight/2;
    var dotX = mouseX, dotY = mouseY;
    window.addEventListener("pointermove", function(e){
      if (e.pointerType === "touch") return;
      mouseX = e.clientX; mouseY = e.clientY;
      var wide = !!(e.target.closest && e.target.closest("a, button"));
      dot.classList.toggle("wide", wide);
    });
    function dotLoop(){
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;
      dot.style.transform = "translate3d(" + dotX + "px," + dotY + "px,0)";
      requestAnimationFrame(dotLoop);
    }
    requestAnimationFrame(dotLoop);
  }

  applyLang(currentLang);
  return {applyLang:applyLang};
}

function getStoredLang(){
  try{
    var saved = localStorage.getItem("ss_lang");
    if (saved === "en" || saved === "es") return saved;
  }catch(e){}
  return "en";
}

function initGallery(opts){
  var container = document.querySelector(opts.container || ".gallery-rows");
  var lit = document.getElementById("lit");
  var litImg = document.getElementById("litImg");
  var litTitle = document.getElementById("litTitle");
  var litWhere = document.getElementById("litWhere");
  var litNote = document.getElementById("litNote");
  var plate = lit.querySelector(".plate");
  var figs = [];
  var openIndex = -1;

  function textFor(p){ return p[getStoredLang()] || p.en; }

  /* Figures are pre-rendered as static HTML (real <img>/<figcaption>,
     English by default) so crawlers that don't execute JS — many AI
     crawlers included — still see every photo and caption. This just
     enhances the existing markup: wires up interactivity and swaps
     text on language change. It does not create the DOM. */
  var existing = container.querySelectorAll("figure");
  opts.photos.forEach(function(p, i){
    var fig = existing[i];
    if (!fig) return;
    fig.setAttribute("tabindex", "0");
    fig.setAttribute("role", "button");
    fig.setAttribute("data-idx", i);
    var img = fig.querySelector("img");
    var cap = fig.querySelector("figcaption");
    fig.addEventListener("click", function(){ open(i); });
    fig.addEventListener("keydown", function(e){
      if (e.key === "Enter" || e.key === " "){ e.preventDefault(); open(i); }
    });
    figs.push({el:fig, img:img, cap:cap});
  });

  function open(i){
    openIndex = i;
    var p = opts.photos[i];
    var t = textFor(p);
    litImg.src = opts.folder + "/" + p.id + ".jpg";
    litImg.alt = t.title;
    litTitle.textContent = t.title;
    litWhere.textContent = t.where || "";
    litNote.textContent = t.note || "";
    plate.classList.toggle("tall", !!p.tall);
    document.body.classList.add("lit");
    document.body.style.overflow = "hidden";
  }
  function close(){
    openIndex = -1;
    document.body.classList.remove("lit");
    document.body.style.overflow = "";
  }
  lit.querySelectorAll("[data-close]").forEach(function(el){
    el.addEventListener("click", close);
  });
  window.addEventListener("keydown", function(e){
    if (e.key === "Escape" && document.body.classList.contains("lit")) close();
  });

  document.addEventListener("ss:langchange", function(){
    figs.forEach(function(f, i){
      var t = textFor(opts.photos[i]);
      f.img.alt = t.title;
      if (f.cap) f.cap.textContent = t.title;
    });
    if (openIndex >= 0){
      var t2 = textFor(opts.photos[openIndex]);
      litTitle.textContent = t2.title;
      litWhere.textContent = t2.where || "";
      litNote.textContent = t2.note || "";
    }
  });
}

window.initSiteChrome = initSiteChrome;
window.initGallery = initGallery;
})();

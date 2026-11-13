(function(){
"use strict";

/* Labels shared by every secondary page (nav + footer); a page's own
   UI object overrides any of these. */
var SHARED = {
  en:{
    navPortfolio:"Portfolio", navServices:"Services", navAbout:"About", navContact:"Contact",
    privacyLink:"Privacy Policy", termsLink:"Terms & Conditions", cookieLink:"Cookie Policy",
    refundLink:"Refund Policy", accessLink:"Accessibility", footLegal:"Legal",
    footCtaLine:"Let’s capture your day.", footCtaBtn:"Request a Quote",
    footTagline:"Quinceañera, wedding, portrait and sports photography in Southern California.",
    footExplore:"Explore", footContact:"Contact", footFollow:"Follow",
    footRights:"All rights reserved."
  },
  es:{
    navPortfolio:"Portafolio", navServices:"Servicios", navAbout:"Acerca de", navContact:"Contacto",
    privacyLink:"Política de Privacidad", termsLink:"Términos y Condiciones", cookieLink:"Política de Cookies",
    refundLink:"Política de Reembolsos", accessLink:"Accesibilidad", footLegal:"Legal",
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
    rememberLang(lang);
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

/* ---------- privacy / storage consent ----------
   The site sets no cookies and no trackers. The only things it stores are
   the language choice (ss_lang) and this notice's answer (ss_consent).
   "Essential only" stops remembering the language between visits. */
function getConsent(){
  try{ return localStorage.getItem("ss_consent"); }catch(e){ return "unavailable"; }
}
function rememberLang(lang){
  try{
    if (getConsent() === "essential") localStorage.removeItem("ss_lang");
    else localStorage.setItem("ss_lang", lang);
  }catch(e){}
}
window.ssRememberLang = rememberLang; /* used by the homepage's script.js */

var CONSENT_TXT = {
  en:{text:"We don’t use tracking cookies. This site only remembers your language choice on your device.",
      more:"Cookie Policy", accept:"Accept", essential:"Essential only", label:"Privacy notice"},
  es:{text:"No usamos cookies de rastreo. Este sitio solo recuerda tu idioma en tu dispositivo.",
      more:"Política de Cookies", accept:"Aceptar", essential:"Solo esenciales", label:"Aviso de privacidad"}
};
function initConsentBanner(){
  var c = getConsent();
  if (c === "accepted" || c === "essential" || c === "unavailable") return;
  var bar = document.createElement("div");
  bar.className = "consent-bar";
  bar.setAttribute("role", "region");
  bar.innerHTML = '<p class="consent-text"><span data-k="text"></span> <a href="cookie-policy.html" data-k="more"></a></p>' +
    '<div class="consent-actions"><button type="button" class="consent-btn ghost" data-v="essential" data-k="essential"></button>' +
    '<button type="button" class="consent-btn" data-v="accepted" data-k="accept"></button></div>';
  function paint(){
    var t = CONSENT_TXT[document.documentElement.lang === "es" ? "es" : "en"];
    bar.setAttribute("aria-label", t.label);
    bar.querySelectorAll("[data-k]").forEach(function(el){ el.textContent = t[el.getAttribute("data-k")]; });
  }
  paint();
  new MutationObserver(paint).observe(document.documentElement, {attributes:true, attributeFilter:["lang"]});
  bar.querySelectorAll("[data-v]").forEach(function(b){
    b.addEventListener("click", function(){
      var v = b.getAttribute("data-v");
      try{
        localStorage.setItem("ss_consent", v);
        if (v === "essential") localStorage.removeItem("ss_lang");
      }catch(e){}
      bar.classList.add("out");
      setTimeout(function(){ if (bar.parentNode) bar.parentNode.removeChild(bar); }, 400);
    });
  });
  document.body.appendChild(bar);
  requestAnimationFrame(function(){ bar.classList.add("in"); });
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initConsentBanner);
else initConsentBanner();

/* Camera "shutter + flash" on every .cta-btn press (styles in style.css).
   Skipped for a form's submit button while the form is incomplete — the
   form highlights what's missing instead. */
document.addEventListener("click", function(e){
  var btn = e.target.closest && e.target.closest(".cta-btn");
  if (!btn) return;
  if (btn.form && btn.type === "submit" && !btn.form.checkValidity()) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  btn.classList.remove("snap");
  void btn.offsetWidth; /* restart the animation on repeat clicks */
  btn.classList.add("snap");
  setTimeout(function(){ btn.classList.remove("snap"); }, 600);
  var fl = document.createElement("div");
  fl.className = "page-flash";
  document.body.appendChild(fl);
  setTimeout(function(){ if (fl.parentNode) fl.parentNode.removeChild(fl); }, 500);
});

window.initSiteChrome = initSiteChrome;
window.initGallery = initGallery;
})();

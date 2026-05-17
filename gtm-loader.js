/* =========================================================
   gtm-loader.js
   -------------
   Charge dynamiquement Google Tag Manager :
   - injecte le snippet GTM dans <head>
   - injecte le <noscript> dans <body>

   Ce fichier est appelé une seule fois par page, juste après
   gtm-config.js. Tu n'as JAMAIS besoin de le modifier.
   ========================================================= */

(function () {
  // Vérifie qu'un ID a bien été défini dans gtm-config.js
  if (!window.GTM_ID || window.GTM_ID === "GTM-XXXXXX") {
    console.warn(
      "[GTM] Aucun ID GTM configuré. Ouvre gtm-config.js et remplace " +
      "GTM-XXXXXX par ton vrai ID."
    );
    return;
  }

  // -----------------------------------------------------
  // 1. Injection du snippet GTM dans <head>
  //    (équivalent du code que GTM fournit à coller dans <head>)
  // -----------------------------------------------------
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0];
    var j = d.createElement(s);
    var dl = l !== "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", window.GTM_ID);

  // -----------------------------------------------------
  // 2. Injection du <noscript> dans <body>
  //    (équivalent du code GTM à coller juste après <body>)
  //    Sert au cas où l'utilisateur a désactivé JavaScript.
  // -----------------------------------------------------
  function injectNoscript() {
    var noscript = document.createElement("noscript");
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.googletagmanager.com/ns.html?id=" + window.GTM_ID;
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  }

  if (document.body) {
    injectNoscript();
  } else {
    document.addEventListener("DOMContentLoaded", injectNoscript);
  }
})();

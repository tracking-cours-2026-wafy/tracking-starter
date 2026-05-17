/* =========================================================
   gtm-config.js
   -------------
   Configuration centralisée du tracking.
   C'est LE SEUL fichier que tu modifies pour changer l'ID GTM.
   Il est appelé en premier dans le <head> de chaque page.
   ========================================================= */

// 1. Initialisation du dataLayer (avant tout)
window.dataLayer = window.dataLayer || [];

// 2. ID du conteneur GTM
//    Remplace "GTM-XXXXXX" par ton propre ID
//    (Récupéré sur https://tagmanager.google.com)
window.GTM_ID = "GTM-XXXXXX";

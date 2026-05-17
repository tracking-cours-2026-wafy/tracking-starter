/* =========================================================
   BiblioTech — script de tracking pédagogique
   Ce fichier contient des dataLayer.push() prêts à l'emploi.
   Les élèves peuvent en ajouter d'autres ou modifier ceux-ci.
   ========================================================= */

window.dataLayer = window.dataLayer || [];

/* ---------- Tracking des CTA (data-cta) ---------- */
document.querySelectorAll("[data-cta]").forEach(function (el) {
  el.addEventListener("click", function () {
    window.dataLayer.push({
      event: "click_cta",
      cta_label: el.textContent.trim(),
      cta_name: el.dataset.cta,
      cta_position: el.dataset.ctaPosition || "unknown",
    });
  });
});

/* ---------- Ajout au panier (page produit) ---------- */
var addBtn = document.getElementById("add-to-cart");
if (addBtn) {
  addBtn.addEventListener("click", function () {
    window.dataLayer.push({
      event: "add_to_cart",
      ecommerce: {
        currency: "EUR",
        value: parseFloat(addBtn.dataset.itemPrice),
        items: [{
          item_id: addBtn.dataset.itemId,
          item_name: addBtn.dataset.itemName,
          item_category: addBtn.dataset.itemCategory,
          price: parseFloat(addBtn.dataset.itemPrice),
          quantity: 1,
        }],
      },
    });

    // Feedback visuel + redirection vers le panier
    addBtn.textContent = "✓ Ajouté au panier";
    setTimeout(function () {
      window.location.href = "panier.html";
    }, 800);
  });
}

/* ---------- Validation du panier (begin_checkout) ---------- */
var checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", function () {
    window.dataLayer.push({
      event: "begin_checkout",
      ecommerce: {
        currency: "EUR",
        value: parseFloat(checkoutBtn.dataset.cartValue),
        items: [{
          item_id: "BOOK-001",
          item_name: "Web Analytics pour débutants",
          item_category: "Livres",
          price: 29.90,
          quantity: 1,
        }],
      },
    });

    setTimeout(function () {
      window.location.href = "confirmation.html";
    }, 400);
  });
}

/* ---------- Soumission du formulaire de contact ---------- */
var form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var data = new FormData(form);
    window.dataLayer.push({
      event: "form_submit",
      form_name: "contact",
      form_subject: data.get("sujet") || "non_renseigne",
    });

    // Feedback visuel
    document.getElementById("form-success").hidden = false;
    form.reset();
  });
}

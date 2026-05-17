# BiblioTech — Site pédagogique Web Analytics

Bienvenue 👋 Ce mini-site te sert de terrain de jeu pour apprendre à installer **Google Tag Manager** et à tracker des événements (page_view, click_cta, add_to_cart, form_submit, purchase…).

## Ton URL publique

Une fois GitHub Pages activé (cf. section suivante), ton site est accessible à :

```
https://<ton-pseudo-github>.github.io/<nom-du-repo>/
```

Note bien cette URL : c'est elle que tu utiliseras dans **GTM** (preview, déclencheurs, etc.).

## Activer GitHub Pages sur ton repo

1. Va dans l'onglet **Settings** de ton repo
2. Dans la barre de gauche, clique sur **Pages**
3. Sous "Build and deployment", choisis :
   - Source : **Deploy from a branch**
   - Branch : **main** + dossier **/ (root)**
4. Clique sur **Save**
5. Attends 1 à 2 minutes, puis recharge la page Settings → Pages. L'URL apparaît en haut.

## Installer ton conteneur GTM

1. Crée ton compte / conteneur sur https://tagmanager.google.com
2. Copie ton ID `GTM-XXXXXX`
3. Ouvre **chaque fichier `.html`** dans GitHub (clique sur le fichier, puis sur l'icône **crayon** ✏️ en haut à droite)
4. Décommente le bloc GTM dans `<head>` (et le `<noscript>` dans `<body>`)
5. Remplace `GTM-XXXXXX` par ton vrai ID
6. Clique sur **Commit changes** en bas de la page

## Les événements déjà en place

| Page              | Événement(s) dataLayer                  |
|-------------------|------------------------------------------|
| `index.html`      | `page_view`, `click_cta` (sur les CTA)   |
| `produit.html`    | `view_item`, `add_to_cart`               |
| `panier.html`     | `view_cart`, `begin_checkout`            |
| `confirmation.html` | `purchase`                             |
| `contact.html`    | `page_view`, `form_submit`               |

## Exercices possibles

- Crée un déclencheur GTM sur chaque événement et envoie-le à GA4
- Ajoute une variable pour récupérer `ecommerce.value` sur la page de confirmation
- Configure le consentement (Consent Mode v2) avant l'envoi des tags
- Ajoute un nouvel événement (par ex. `scroll_50_percent`) en modifiant `script.js`

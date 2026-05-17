# BiblioTech — Site pédagogique Web Analytics (v2)

Mini-site pour apprendre **Google Tag Manager** et le tracking côté front.

## 🆕 Nouveauté de cette version : GTM chargé dynamiquement

Tu remarqueras qu'on **ne colle PAS le snippet GTM dans chaque fichier HTML**.
À la place, on a :

| Fichier            | Rôle                                                          |
|--------------------|---------------------------------------------------------------|
| `gtm-config.js`    | Contient **uniquement** ton ID GTM. C'est le seul à modifier. |
| `gtm-loader.js`    | Injecte le snippet GTM dans `<head>` et le `<noscript>` dans `<body>`. À ne pas modifier. |

Chaque page HTML appelle ces deux scripts en 2 lignes :

```html
<script src="gtm-config.js"></script>
<script>/* dataLayer push spécifique à la page */</script>
<script src="gtm-loader.js"></script>
```

**Pourquoi ?** Parce que dans la vraie vie un développeur ne va jamais copier-coller
le snippet GTM dans 50 pages. Il le centralise dans un template, un composant React,
un layout Jekyll, un partial Hugo, un include PHP… Ici on simule ça en JS pur
puisque GitHub Pages est un hébergement statique.

## Activer GitHub Pages

1. Onglet **Settings** du repo → **Pages**
2. Source : **Deploy from a branch** → main → `/ (root)`
3. **Save**, attends 1-2 minutes, l'URL apparaît en haut.

## Installer ton GTM

1. Crée ton conteneur sur https://tagmanager.google.com
2. Copie ton ID `GTM-XXXXXX`
3. Ouvre **`gtm-config.js`** dans GitHub (icône crayon ✏️)
4. Remplace `GTM-XXXXXX` par ton vrai ID
5. **Commit changes**
6. C'est fini. Tous les fichiers HTML chargent GTM automatiquement.

Si tu oublies cette étape, le loader affiche un warning dans la console
du navigateur : *"[GTM] Aucun ID GTM configuré"*.

## Les événements en place

| Page                | Événements dataLayer                 |
|---------------------|---------------------------------------|
| `index.html`        | `page_view`, `click_cta`              |
| `produit.html`      | `view_item`, `add_to_cart`            |
| `panier.html`       | `view_cart`, `begin_checkout`         |
| `confirmation.html` | `purchase`                            |
| `contact.html`      | `page_view`, `form_submit`            |

## Architecture du tracking

```
┌─────────────────────────────────────────────┐
│  Chaque page HTML                           │
│  ┌─────────────────────────────────────┐    │
│  │ 1. gtm-config.js                    │    │
│  │    → init dataLayer + GTM_ID        │    │
│  ├─────────────────────────────────────┤    │
│  │ 2. <script> push spécifique         │    │
│  │    → page_view, view_item, etc.     │    │
│  ├─────────────────────────────────────┤    │
│  │ 3. gtm-loader.js                    │    │
│  │    → injecte GTM <head> + <body>    │    │
│  └─────────────────────────────────────┘    │
│                                             │
│  script.js (event listeners)                │
│    → click_cta, add_to_cart, form_submit,   │
│       begin_checkout                        │
└─────────────────────────────────────────────┘
```

## Exercices possibles

- Créer un déclencheur GTM sur chaque événement et l'envoyer à GA4
- Modifier `gtm-config.js` pour gérer un second ID (env. test vs prod)
- Ajouter un événement `scroll_50_percent` dans `script.js`
- Configurer le Consent Mode v2 dans `gtm-loader.js`
- Bonus : remplacer le loader JS par un include Jekyll (`_includes/gtm.html`) pour voir un autre pattern de centralisation

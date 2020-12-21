---
title: "Ajouter un flux RSS à un blog Next.js"
date: "2020-12-21"
---

L'utilisateur [tadashi-yama1012](https://github.com/tadashi-yama1012/) a publié le paquet NPM [next-rss](https://github.com/tadashi-yama1012/next-rss#readme) permettant de générer un flux RSS très facilement et en un claquement de doigts !

_/next-rss.js_

```js
module.exports = {
  siteTitle: "Dimitri Bourreau : Développeur",
  siteDescription: "Dimitri Bourreau : Développeur",
  siteLanguage: "fr",
  siteCopyright: "Dimitri Bourreau",
  siteUrl: "https://dimitribourreau.me",
  outDir: "public",
  postsDir: "blog",
};
```

`npx next-rss`

Et c'est tout.

Deux fichiers sont générés dans `/public/` : `atom.xml` et `rss.xml`.

Je retrouvais justement un peu de temps pour moi, je songeais à créer cet outil... et bien merci tadashi-yama1012 !

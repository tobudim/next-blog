---
title: "La création de mon blog minimaliste avec Next.js"
date: "2020-09-01"
---

## Participer au beau de l'Internet

Les temps ont changé, Internet est devenu le centre de gravité de l'éthique de l'humanité ! Les sites n'accumulent alors que les données nécessaires à leur fonctionnement, et les autres données sont régies en toute transparence selon vos choix.

Ça ne se fait plus de gonfler avec un appétit démesuré et incontrôlé, à grand renfort d'images, de vidéos et de scripts en tout genre, les pages web. Outre l'idée de [sobriété numérique](https://signal.eu.org/blog/2020/07/15/la-sobriete-numerique-oui-mais-pour-quoi-faire/), qu'il était dommage d'avoir des bandes passantes de plus en plus rapides, sans vivre la même accélération sur le temps de chargement des sites Internet !

... Bon je déconne, c'est la merde globalement.

J'ai envie de créer un petit blog, humble et utile. Faire tourner tout un Wordpress pour si peu serait dommage ! Tout ce dont j'ai envie, c'est balancer en ligne des idées, et le faire sans pister mes lecteurs. Et puis j'aimerais que ce soit rapide et minimaliste : pas besoin de suivre combien consultent mon blog, pas besoin de commentaires à mes articles. Juste des idées.

## De quoi ai-je besoin ?

- Rédiger des articles en MarkDown et les mettre en ligne facilement.
- Héberger l'application sur le territoire français, sinon européen.
- Utiliser un protocole HTTPS.
- Ne pas utiliser d'outils Américains, au possible préférer ce qui se fait en Europe (pas d'Analytics, Google Fonts ou AWS).

De quoi n'ai-je pas besoin, du moins aujourd'hui ?

- Proposer aux lecteurs de rédiger des commentaires.
- Suivre les visiteurs pour obtenir des informations telles que leurs habitudes ou leur nombre.
- Monétiser le blog.

Et pour un peu plus tard je garde la génération d'un flux RSS.

## Template

Si mes besoins vous conviennent vous pouvez retrouver mon [template simple et minimaliste sur mon GitHub](https://github.com/tobudim).

## Fonctionnement

Pour résumer, dans `/posts` je rédige des fichiers .mk dans lesquels je précise le title et la date comme ainsi :

```mk
---
title: "La création de mon blog minimaliste avec Next.js"
date: "2020-01-02"
---
```

Je n'ai qu'à récupérer (comme [un excellent tutoriel](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website) le fait) leur titre pour en afficher une liste.

```js
export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
```

## Hébergement

J'ai déjà un [VPS chez OVH](https://www.ovhcloud.com/fr/vps/), que je vais utiliser. Je recommande d'ailleurs OVH pour leur simplicité et leurs tarifs. Ils ont d'ailleurs [de très bons tutoriels](https://docs.ovh.com/fr/) pour ceux qui débutent !

Concernant l'administration de votre VPS, si vous débutez vraiment et que ça vous amuse de mettre les mains dans le camboui vous pouvez partir sur un petit Ubuntu tout simple : la communauté est riche et disponible, tandis que [les documentations propres aux VPS d'OVH](https://docs.ovh.com/fr/vps/) aident à démarrer notamment avec leurs recommandations concernant la sécurité.

- [Débuter avec un VPS](https://docs.ovh.com/fr/vps/debuter-avec-vps/)
- [Sécuriser un VPS](https://docs.ovh.com/fr/vps/conseils-securisation-vps/)

## Nom de domaine

D'habitude j'utilise [Namecheap](https://www.namecheap.com/) pour mes noms de domaine, mais je voulais essayer [OVH](https://www.ovh.com/fr/domaines/) pour ce coup-ci et c'est tout aussi simple, en plus de laisser mon argent en France.

## HTTPS et nginx

--

## Améliorations

Je réalise ce site un peu dans l'urgence pour montrer un peu de mes compétences. Des mises à jour sont à prévoir :

- Le design, pour rester sobre mais avec une identité plus marquée.
- Générer un flux RSS.

[Les mises à jour seront disponibles sur GitHub](https://github.com/tobudim) pour ceux qui voudront travailler à partir de cette réalisation.
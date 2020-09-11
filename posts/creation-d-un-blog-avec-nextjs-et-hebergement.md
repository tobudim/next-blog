---
title: "Création d'un blog avec Next.js et hébergement"
date: "2020-09-01"
---

## Participer au beau de l'Internet

Les temps ont changé, Internet est devenu le centre de gravité de l'éthique de l'humanité ! Les sites n'accumulent alors que les données nécessaires à leur fonctionnement, et les autres données sont régies en toute transparence selon vos choix.

Ça ne se fait plus de gonfler avec un appétit démesuré et incontrôlé, à grand renfort d'images, de vidéos et de scripts en tout genre, les pages web. Outre l'idée de [sobriété numérique](https://signal.eu.org/blog/2020/07/15/la-sobriete-numerique-oui-mais-pour-quoi-faire/), qu'il était dommage d'avoir des bandes passantes de plus en plus rapides, sans vivre la même accélération sur le temps de chargement des sites Internet !

... Bon je déconne, c'est la merde globalement.

J'ai envie de créer un petit blog, humble et utile. Faire tourner tout un Wordpress pour si peu serait dommage ! Tout ce dont j'ai envie, c'est balancer en ligne des idées, et le faire sans pister mes lecteurs. Et puis j'aimerais que ce soit rapide et minimaliste : pas besoin de suivre combien consultent mon blog, pas besoin de commentaires à mes articles. Juste des idées.

> [Le code source de ce blog est disponible sur GitHub](https://github.com/tobudim/next-blog/tree/1.0.0).

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

## Code source

Si mes besoins vous conviennent vous pouvez retrouver [le code source de ce blog sur GitHub](https://github.com/tobudim/next-blog/tree/1.0.0).

Ce code sera amené à évoluer, quand j'aurais le temps et l'envie. 👨‍💻

## Fonctionnement

Voici [un excellent tutoriel](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website) si vous voulez apprendre Next.js.

Je rédige tous mes articles de blog en Markdown, et je les place tous dans `/posts`. Tous ces articles commencent en précisant le _title_ et la _date_ :

```mk
---
title: "La création de mon blog minimaliste avec Next.js"
date: "2020-01-02"
---
```

Je récupère tous les noms des fichiers dans `/posts`.

```js
const postsDirectory = path.join(process.cwd(), "posts");

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

Je lis pour chaque fichier le titre et la date, grâce auxquels je peux afficher une liste d'articles.

```js
<ul className={utilStyles.list}>
  {yearSortedPosts[year].map(({ id, date, title }) => (
    <li className={utilStyles.listItem} key={id}>
      <Link href="/blog/[id]" as={`/blog/${id}`}>
        <a>
          {title}
          <small
            className={utilStyles.lightText}
            style={{ marginLeft: "15px" }}
          >
            <Date dateString={date} />
          </small>
        </a>
      </Link>
    </li>
  ))}
</ul>
```

## Hébergement

J'ai déjà un [VPS chez OVH](https://www.ovhcloud.com/fr/vps/), que je vais utiliser. Je recommande d'ailleurs OVH pour leur simplicité et leurs tarifs. Ils ont d'ailleurs [de très bons tutoriels](https://docs.ovh.com/fr/) pour ceux qui débutent !

Concernant l'administration de votre VPS, si vous débutez vraiment et que ça vous amuse de mettre les mains dans le camboui vous pouvez partir sur un petit Ubuntu tout simple : la communauté est riche et disponible, tandis que [les documentations propres aux VPS d'OVH](https://docs.ovh.com/fr/vps/) aident à démarrer notamment avec leurs recommandations concernant la sécurité.

- [Débuter avec un VPS](https://docs.ovh.com/fr/vps/debuter-avec-vps/)
- [Sécuriser un VPS](https://docs.ovh.com/fr/vps/conseils-securisation-vps/)

## Nom de domaine

D'habitude j'utilise [Namecheap](https://www.namecheap.com/) pour mes noms de domaine, mais je voulais essayer [OVH](https://www.ovh.com/fr/domaines/) pour ce coup-ci et c'est tout aussi simple, en plus de laisser mon argent en France. 🇫🇷

## Administration serveur

Pensez bien, si c'est votre première fois avec un VPS, à lire les pages de OVH partagées un peu plus haut. C'est important de sécuriser votre serveur ! 🐧

### Sécurisation initiale

> Vous ne gérez pas un serveur pour la première fois ? Fuyez donc ce pragraphe et sautez au prochain ! 🤾

Un VPS tout frais chez OVH a un compte initial, _ubuntu_, avec des privilèges sudo.

Je commence par appliquer les mise-à-jour :

```
sudo apt-get update
sudo apt-get upgrade
```

Ensuite, je modifie le mot de passe pour _ubuntu_ :

```
sudo passwd
```

Je modifie le mot de passe _root_ et je créé un compte avec moins de privilèges, le seul à partir duquel je pourrais me connecter en SSH.

```
su root
sudo passwd
exit
sudo adduser compte-moins-de-privileges
```

Il faut alors configurer le SSH :

```
sudo vim /etc/ssh/sshd_config
```

Mes modifications :

```
Port 67
PermitRootLogin no
PubkeyAuthentication yes
PasswordAuthentication no
```

Depuis ma machine, j'upload une clé SSH avec [ssh-copy-id](https://www.ssh.com/ssh/copy-id) plutôt qu'en la copiant-collant.

```
ssh-copy-id -i ~/.ssh/ma-cle.pub compte-moins-de-privileges@ip-serveur
```

Sur ma machine encore, je configure `~/.ssh/config` en rajoutant ceci :

```
Host [IP du serveur]
  Preferredauthentications publickey
  IdentityFile ~/.ssh/[clé SSH]
  Port 67
```

J'ai même ajouté un alias à mon `.zshrc` histoire de :

```
alias cossh='ssh compte-moins-privilèges@serveur'
```

Alors, je peux redémarrer le service SSH de mon serveur.

```
sudo /etc/init.d/ssh restart
```

Et pour terminer, j'installe fail2ban :

```
sudo apt-get install fail2ban
```

Je configurerai le pare-feu `ufw` plus tard, lorsque j'installerai et configurerai nginx.

### HTTPS

Pour utiliser le protocole HTTPS, je passe directement par OVH qui [propose de tout gérer pour nous](https://www.ovh.com/fr/ssl-gateway/).

### Mise en place du blog

Avant tout j'installe quelques paquets :

```
sudo apt-get install nodejs npm nginx
sudo npm i -g pm2
```

Avant de configurer nginx, je duplique son fichier de configuration au cas où :

```
sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default-copy
sudo vim /etc/nginx/sites-available/default
```

Mes modifications :

```
server {
  server_name [nom de domaine]

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Pour terminer la gestion de nginx :

```
# Vérifier que le fichier de configuration est OK
sudo nginx -t

# Redémarrer nginx
sudo /etc/init.d/nginx restart
```

Maintenant je configure mon pare-feu avec [ufw](https://doc.ubuntu-fr.org/ufw) :

```
sudo ufw allow Nginx\ HTTPS
sudo ufw allow Nginx\ HTTP
sudo ufw allow [N° de port pour votre connexion SSH]
sudo ufw enable
```

Je télécharge et j'installe les dépendances de mon blog dans le _home_ de mon compte sans privilèges _sudo_, l'endroit importe peu ici.

```
cd
git clone https://github.com/tobudim/next-blog
cd next-blog
npm i
```

Enfin, pour lancer notre serveur avec [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/) :

```
npm run build
pm2 start npm --watch -- start
pm2 startup
```

### Mettre à jour le blog

Rien de plus simple !

```
cd ~/next-blog
git pull
npm run build
```

Et c'est tout ! ⚡️

## Améliorations

Je réalise ce site un peu dans l'urgence pour montrer un peu de mes compétences. Des mises à jour sont à prévoir :

- Le design, pour rester sobre mais avec une identité plus marquée.
- Générer un flux RSS.

[Les mises à jour seront disponibles sur GitHub](https://github.com/tobudim/next-blog/tree/1.0.0) pour ceux qui voudront travailler à partir de cette réalisation.

Si vous avez des recommandations ou des conseils je suis preneur. 🙏

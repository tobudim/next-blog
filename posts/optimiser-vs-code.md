---
title: "Optimiser VS Code"
date: "2020-09-02"
---

J'ai tâté du WebStorm, VSCode et du VIM, j'ai apprécié les trois. J'ai adoré VIM ([mon .vimrc pour les intéressés](https://github.com/tobudim/VIM-config-notes/blob/master/vimrc)), mais finalement VS Code s'avère plus pratique.

À passer des journées entières sur un ordinateur et un logiciel, les étudier et les configurer peut apporter beaucoup de confort et une amélioraton de la productivité.

C'est Lincoln qui disait :

> Give me six hours to chop down a tree and I will spend the first four sharpening the axe.

## Interface

![Interface de VS Code](/images/blog/vscode-interface.png "Interface de VS Code")

### Barre d'outils

J'ai déplacé la barre d'outils initialement à gauche vers la droite : en la fermant et l'ouvrant le texte du fichier ouvert ne bouge pas.

```
{
  "workbench.sideBar.location": "right"
}
```

### Thème et icônes

J'ai préféré un thème clair, avec un texte sombre sur fond clair : je trouve ça plus confortable et fluide à lire ([petit article sur le sujet](https://www.live360.fr/mode-sombre/)).

```
{
  "workbench.colorTheme": "Hop Light",
  "editor.fontFamily": "Meslo LG M DZ for Powerline",
  "terminal.integrated.minimumContrastRatio": 15,
  "workbench.iconTheme": "material-icon-theme"
}
```

### Minimap

J'ai désactivé la minimap, inutile à mon sens.

```
{
  "editor.minimap.enabled": false
}
```

### Interface épurée

J'ai épuré l'interface autant que possible suivant mes besoins.

```
{
  "explorer.openEditors.visible": 0,
  "breadcrumbs.enabled": false,
  "workbench.activityBar.visible": false
}
```

### Affichage des paramètres

**⌘ + ,** affiche les paramètres VS Code en format JSON (plus bas dans l'article je détaille un autre raccourci clavier pour ouvrir les paramètres avec l'interface classique).

```
{
  "workbench.settings.editor": "json"
}
```

## Plugins

Les plugins sont très importants quand VS Code nativement se veut plus timide que WebStorm. Et pour avoir utilisé les deux, je trouve VS Code plus simple à paramétrer et tout aussi efficace grâce à ces plugins / sa communauté.

### Mes préférés

[GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) : affiche directement dans le fichier des données de versionning comme le dernier auteur de la ligne actuelle et le dernier commit et sa date.

![GitLens](/images/blog/vscode-gitlens.png "GitLens")

[Hop Light](https://marketplace.visualstudio.com/items?itemName=bubersson.theme-hop-light) : le thème de la capture d'écran plus haut.

[Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) : des icônes toutes belles.

![Material Icon](/images/blog/vscode-icons.png "Material Icon")

[Wrap Console Log](https://marketplace.visualstudio.com/items?itemName=midnightsyntax.vscode-wrap-console-log) : permet de logger facilement, il vaut mieux aller voir les raccourcis clavier pour vraiment profiter du plugin.

[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) : modifier un tag HTML/XML modifie son autre paire automatiquement.

[React Snippet](https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.vscode-react-snippet)

### Les autres, mais ils restent cools !

[CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek) : permet depuis un fichier HTML/EJS d'accéder au CSS concerné en cliquant sur un _class_ ou _id_.

[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[Prettier Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

[GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) : permet d'avoir un coup d'oeil rapidement sur les PR et issues en cours.

[indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) : permet de mieux y voir dans les indentations grâce à un coloriage.

[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) : boîte à outils très pratique pour dev avec Vue.js (syntax-highlight, snippets, emmet, linting etc).

## Raccourcis clavier

### Les indispensables disponibles par défaut

- **⌘ ⇧ E** : Explorateur de fichiers.
- **^ ⇧ G** : Outil de versionning.
- **^ `** : Terminal intégré.
- **⌘ P** : Chercher un fichier.
- **⌘ P P** : Aller au dernier fichier (permet de naviguer facilement au dernier fichier ouvert).
- **⌘ ⇧ P** : Commandes VSCode, que j'utilise surtout pour vérifier mes paramètres ou appeler le wrapper de code.
- **⌘ D** : Ajoute au multi-curseur la prochaine occurence de l'actuelle sélection.
- **⌥ + clic** : Multi-curseur.
- **⌥ ↓** : Déplace la ligne actuelle en bas.
- **⌥ ⇧ ↓** : Duplique la ligne actuelle en bas.

### Mes raccourcis que j'utilise le plus

- **⌘ ^ B** : Toggle la barre d'outils principale (proposant l'explorateur de fichiers, la recherche, etc).
- **⌘ B** : Toggle la barre d'outils secondaire (celle qu'on modifie en cliquant sur la barre d'outils principale, c'est par exemple ici qu'apparaissent les fichiers quand on demande l'explorateur de fichiers).
- **⌥ ⇧ W** : Wrapper le code (encapsuler un _p_ dans un _div_ par exemple).
- **^ ⌥ W** + **^ ⌥ ↓** : Logger la variable sous mon curseur.

### Mon fichier de configuration des raccourcis clavier

Ce fichier est facilement accessible avec **⌘ ⇧ P** puis _Open Keyboard Shortcuts (JSON)_.

```
[
  {
    "key": "alt+cmd+[KeyM]",
    "command": "workbench.action.openSettings2"
  },
  {
    "key": "ctrl+cmd+b",
    "command": "workbench.action.toggleActivityBarVisibility"
  },
  {
    "key": "shift+alt+w",
    "command": "editor.emmet.action.wrapWithAbbreviation"
  },
  {
    "key": "ctrl+shift+w ctrl+shift+w",
    "command": "console.log.wrap.string.down",
    "when": "editorTextFocus"
  },
  {
    "key": "shift+alt+w down",
    "command": "-console.log.wrap.string.down",
    "when": "editorTextFocus"
  },
  {
    "key": "shift+cmd+c",
    "command": "console.log.wrap.down.prefix",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+w ctrl+alt+down",
    "command": "-console.log.wrap.down.prefix",
    "when": "editorTextFocus"
  }
]
```

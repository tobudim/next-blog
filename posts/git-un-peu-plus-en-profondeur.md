---
title: "Git, un peu plus en profondeur"
date: "2020-09-04"
---

# Avant-propos

La mode est aux articles répétant à tue-tête les mêmes _bases_ dans l'espoir de faire un semblant de tutoriel attirant quelques vues. Désolant et dégradant, même Openclassrooms (anciennement le site du zéro) dans son cours s'arrête au minimum syndical (note: ils ont mis à jour [leur cours](https://openclassrooms.com/fr/courses/5641721-utilisez-git-pour-vos-projets-de-developpement) qui semble plus consistant).

Je me suis offert quelques [livres de Eni](https://www.editions-eni.fr/), aucun regret, ils sont tous excellents ! [Celui dédié à Git](https://www.editions-eni.fr/livre/git-maitrisez-la-gestion-de-vos-versions-concepts-utilisation-et-cas-pratiques-2e-edition-9782409019104) m'a appris beaucoup de choses, je recommande son achat sans concession. Je vais partager ici quelques notes, pour moi-même, et pour peut-être inciter certains débutants à creuser plus loin que le plus simple, et comme ressource française Eni se pose très bien. 👌

Je ne couvre pas les éléments élémentaires de Git ici, il faut déjà avoir une idée de ce que sont `git push`, `git commit` ou `git checkout`.

![Livre Git Maîtrisez la gestion de vos version](/images/blog/git-eni.png "Maîtrisez la gestion de vos version")

# Sommaire

- [Configuration minimale](#Configuration-minimale)
- [Hashs abrégés](#Hashs-abrégés)
- [Afficher l'ancêtre commun en cas de conflit](#Afficher-l-ancêtre-commun-en-cas-de-conflit)
- [Filtrer les commits](#Filtrer-les-commits)
- [Voir les différences entre le dernier commit et le travail actuel](#Voir-les-différences-entre-le-dernier-commit-et-le-travail-actuel)

## Configuration minimale

```
git config --global user.name "Nom"
git config --global user.email email@domain.ext
```

## Hashs abrégés

N'afficher que les 7 premiers caractères des hashs initialement de 40 caractères.

```
git config --global log.abbrevCommit true
```

## Afficher l'ancêtre commun en cas de conflit

```
git config  --global conflictStyle = diff3
```

## Filtrer les commits

```
git log --after="3015-02-09" --before="2015-02-13"
git log --since=1.weeks
git log -3 --author "Tim Graham\|Edward Henderson"
git log -2 -- README.md
```

## Voir les différences entre le dernier commit et le travail actuel

```
# Dernier commit / Index (fichiers ajoutés à l'index via git add)
git diff --cached
# Dernier commit / Répertoire de travail
git diff HEAD
# Dernier commit / Son parent
git diff HEAD^1..HEAD
```

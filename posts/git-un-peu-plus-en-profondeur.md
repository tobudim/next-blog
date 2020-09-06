---
title: "Git, un peu plus en profondeur"
date: "2020-09-04"
---

## Avant-propos

La mode est aux articles répétant à tue-tête les mêmes _bases_ dans l'espoir de faire un semblant de tutoriel attirant quelques vues. Désolant et dégradant, même Openclassrooms (anciennement le site du zéro) dans son cours s'arrête au minimum syndical (note: ils ont mis à jour [leur cours](https://openclassrooms.com/fr/courses/5641721-utilisez-git-pour-vos-projets-de-developpement) qui semble plus consistant).

Je me suis offert quelques [livres de Eni](https://www.editions-eni.fr/), aucun regret, ils sont tous excellents ! [Celui dédié à Git](https://www.editions-eni.fr/livre/git-maitrisez-la-gestion-de-vos-versions-concepts-utilisation-et-cas-pratiques-2e-edition-9782409019104) m'a appris beaucoup de choses, je recommande son achat sans concession. Je vais partager ici quelques notes, pour moi-même, et pour peut-être inciter certains débutants à creuser plus loin que le plus simple, et comme ressource française Eni se pose très bien. 👌

Je ne couvre pas les éléments élémentaires de Git ici, il faut déjà avoir une idée de ce que sont `git push`, `git commit` ou `git checkout`.

![Livre Git Maîtrisez la gestion de vos version](/images/blog/git-eni.png "Maîtrisez la gestion de vos version")

## Liens

- [A successful Git branching model - Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/)
- [Logiciel Tower : gestion des dépôts git](https://www.git-tower.com/windows)

## Configuration

### Configuration minimale

```
git config --global user.name "Nom"
git config --global user.email email@domain.ext
```

### Hashs abrégés

N'afficher que les 7 premiers caractères des hashs initialement de 40 caractères.

```
git config --global log.abbrevCommit true
```

### Afficher l'ancêtre commun en cas de conflit

```
git config  --global conflictStyle = diff3
```

### En cas de conflit, afficher dans les fichiers la version courante, à venir, et commune

```
git config --global merge.conflictstyle diff3
```

## Commits et tags

### Filtrer les commits

```
git log --after="3015-02-09" --before="2015-02-13"
git log --since=1.weeks
git log -3 --author "Tim Graham\|Edward Henderson"
git log -2 -- README.md
```

### Modifier le dernier commit

```
# Sans modifier le message du commit
git commit --amend --no-edit

# En modifiant le message du commit
git commit -m "Un commit" --ammend
```

### Voir les différences entre le dernier commit et le travail actuel

```
# Dernier commit / Index (fichiers ajoutés à l'index via git add)
git diff --cached

# Dernier commit / Répertoire de travail
git diff HEAD

# Dernier commit / Son parent
git diff HEAD^1..HEAD
```

### Afficher les tags

```
git tag --list
git show nom-du-tag
```

### Ajouter un tag

```
# Sur le commit que l'on souhaite tagger :
git tag nom-du-tag

# Avec le hash du commit
git tag nom-du-tag hash

# Ajouter un tag annoté
git tag -a nom-du-tag -m "message"

# Pusher les tags
git push origin -tags
git push origin nom-du-tag
```

### Supprimer un tag

```
git tag -d nom-du-tag

# Supprimer un tag disponible en remote
git tag -d nom-du-tag
git push origin :refs/tags/nom-du-tag
```

## Branches

### Pusher une branche inconnue au remote

Positionné sur la branche en question, `git push` est censé fonctionner. Cependant il existe une méthode plus fiable / propre :

```
git push --set-upstream origin nom-branche
```

## Modifier le travail

### Supprimer les modifications

```
# Répertoire de travail > Dernier commit
git reset --hard HEAD

# Index > Dernier commit
git reset HEAD
```

### Revenir à un état antérieur

```
git log --before="2014-12-31" -1
git reset hash-du-commit-sélectionné
```

### Mettre de côté les modifications

```
git stash

# Mettre aussi les fichiers non suivis dans l'index
git stash --include-untracked
```

### Voir la liste des modifications mises de côté

```
git stash list
```

### Récupérer les modifications mises de côté

```
# Récupérer les modifications du dernier stash
git stash apply

# Récupérer les modifications d'un stash précis
git stash apply stash@{0}

# Récupérer les modifications du dernier stash et le supprimer
git stash pop
```

### Supprimer les modifications mises de côté

```
# Supprimer le dernier stash
git stash drop

# Supprimer un stash précis
git stash drop stash@{0}

# Supprimer tous les stashs
git stash clear
```

## Hooks

Les hooks sont placés dans `/.git/hooks/`. Voir la [documentation](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

### Hooks côté serveur

- **pre-receive** : exécuté au début de la réception d'un push.
- **post-receive** : exécuté lorsque le push et l'intégration des commits ont été effectués.
- **update** : identique à _post-receive_, mais exécuté à chaque branche modifiée.

### Hooks côté client

- **pre-commit** : exécuté juste avant le commit.
- **prepare-commit-msg** : exécuté avant le lancement de l'éditeur de texte de commit et après la création du message de commit par défaut.
- **commit-msg** : exécuté après la réalisation du message de commit mais avant la finalisation du commit.
- **post-commit** : exécuté après commit.

### Partager les hooks dans le dépôt

Choisir un dossier où placer les hooks, par exemple `/hooks/`, ensuite :

```
git config --edit -local

# Ajouter ensuite
[core]
  hooksPath = hooks
```

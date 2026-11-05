# Atelier 3 · Le contexte fait la suggestion

| Module | Durée | Moment | Fichiers |
|---|---|---|---|
| 3 · Comprendre les suggestions | 35 min | Jour 1 · 14 h 00 | `katas/03-contexte/`, `JOURNAL.md` |

## Objectif

Prouver par l'expérience que la qualité d'une suggestion dépend de ce que Copilot **voit** : nom seul, fichier voisin ouvert, commentaire précis, import. Puis repérer, **en lisant**, trois défauts dans du code accepté trop vite.

## Point de départ

Ateliers 1 et 2 terminés. Dans `JOURNAL.md`, la grille « Atelier 3 » est prête à remplir.

## Étapes

1. **Exp. 1 · nom seul** : fermez tous les onglets, ouvrez `experience-1-nom-seul.js`, placez le curseur dans `calculerVelocite`. Notez la suggestion (propriétés inventées ? gestion du vide ?).
2. **Exp. 2 · avec contexte** : ouvrez `sprints-exemple.js` dans un onglet voisin, puis `experience-2-avec-contexte.js`. Même fonction, JSDoc précise : comparez. Exécutez `node katas/03-contexte/experience-2-avec-contexte.js` : le résultat attendu est `21.7`.
3. **Exp. 3 · commentaires** : dans `experience-3-commentaires.js`, comparez le bloc A (vague) et le bloc B (précis). Puis décommentez l'import du bloc C et recommencez le bloc A : que change l'import ?
4. **Alternatives** : sur le bloc B, parcourez les alternatives (`Alt+]` ou survol). Gardez celle qui respecte la contrainte d'heure locale.
5. **Exp. 4 · lire avant d'accepter** : trouvez les 3 défauts de `experience-4-lire-avant-accepter.js` **avant** de l'exécuter. Écrivez votre diagnostic, puis exécutez le fichier et demandez à Copilot Chat (Ask) son avis. Corrigez.

## Livrable

- La grille « Atelier 3 » de `JOURNAL.md` est remplie pour les 4 expériences (suggestion obtenue, ce qui a changé, pourquoi).
- `experience-2-avec-contexte.js` affiche `21.7`.
- `experience-4-lire-avant-accepter.js` affiche `3`, `false`, `5`.

## Pièges à observer

- L'expérience 2 ne marche bien que si l'onglet voisin est **ouvert** : un fichier fermé n'est pas dans le contexte de la suggestion inline.
- Le bloc C (import de `date-fns`) pousse Copilot vers une bibliothèque **qui n'est pas installée** : une suggestion peut être parfaite… et inutilisable.
- `estPrioritaire` affecte au lieu de comparer : la suggestion « a l'air » juste.

## Bonus

Refaites l'expérience 1 en changeant seulement le **nom du fichier** en `velocite-sprints.js`. Le nom du fichier fait-il partie du contexte ? Notez votre conclusion.

## Coincé ?

Les suggestions des expériences 1 et 2 sont identiques ? Vérifiez que l'onglet `sprints-exemple.js` est ouvert **dans le même groupe d'éditeurs**, puis retapez la première ligne du corps de la fonction pour relancer une suggestion.

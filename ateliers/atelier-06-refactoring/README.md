# Atelier 6 · Refactorer le Kanban legacy

| Module | Durée | Moment | Fichiers |
|---|---|---|---|
| 6 · Refactoring avec Copilot | 45 min | Jour 2 · 11 h 35 | `src/legacy/kanban-legacy.js`, `test/kanban-legacy.test.js`, `src/kanban.js`, `test/kanban-contrat.test.js` |

## Objectif

Transformer `traiter(l, i, s, opt)`, un code de 2019 illisible, en code clair **sans changer son comportement** (tests de caractérisation toujours verts), puis écrire sa version moderne `deplacerTicket` : pure, nommée, et **corrigée** du bug de limite WIP.

## Point de départ

`npm run test:atelier6` : les 9 tests de caractérisation passent, les 3 tests de contrat échouent (`src/kanban.js` est vide).

## Étapes

1. **Comprendre** : sélectionnez `traiter`, chat **Ask** : « Explique ce que fait cette fonction, règle par règle, et liste ses défauts. » Comparez avec les noms des tests de caractérisation.
2. **Renommer** : `F2` sur `l`, `i`, `s`, `r` → `tickets`, `id`, `versStatut`, `ticket`. Acceptez les suggestions de modification suivante (`Tab`). Tests.
3. **Simplifier et extraire** : chat en ligne (`Ctrl+I`) sur la fonction : « Remplace var par const/let, extrais trouverTicket et compterEnCours, garde exactement le même comportement, y compris == et la mutation. » Relisez le diff **avant** d'accepter. Tests.
4. **Comparer** : `git diff` (ou la vue Contrôle de code source) : chaque changement doit être un renommage, une extraction ou une simplification. Commit « refactor : kanban legacy lisible ».
5. **Réécrire** : générez `src/kanban.js` depuis ses commentaires-guides (`deplacerTicket`, pure, `===`, messages explicites). Le test de contrat « refuse le 4e ticket en cours » doit passer : c'est la **correction** du bug.
6. Commit séparé « fix : limite WIP respectée dans deplacerTicket ».

## Livrable

- `npm run test:atelier6` : **12 tests au vert** (9 de caractérisation + 3 de contrat).
- `kanban-legacy.js` lisible, sans `var`, avec des fonctions extraites.
- Deux commits distincts : refactoring, puis correction.

## Pièges à observer

- « Améliore ce code » produit souvent un refactoring **et** une correction mêlés : le test « ⚠ accepte un 4e ticket » passe alors au rouge. Refactoring = même comportement.
- Remplacer `==` par `===` dans le legacy casse le test « "1" trouve le ticket 1 » : c'est un changement de comportement, pas un nettoyage.
- Copilot peut supprimer la mutation `r.statut = s` en « améliorant » : relisez le diff ligne par ligne.

## Bonus

Faites déléguer `traiter` à `deplacerTicket` (adaptateur), puis mettez à jour **délibérément** le test « ⚠ » : c'est la décision de corriger le comportement historique, à commiter seule avec un message clair.

## Coincé ?

Un test de caractérisation passe au rouge et vous ne voyez pas pourquoi : `git diff`, puis annulez le dernier pas (`git checkout -- src/legacy/kanban-legacy.js`) et refaites-le en plus petit. Point de reprise : `reprises/fin-atelier-06/`.

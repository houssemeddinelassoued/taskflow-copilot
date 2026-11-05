# Atelier 5 · TaskFlow v2 : backlog, classe et import

| Module | Durée | Moment | Fichiers |
|---|---|---|---|
| 5 · Génération de fonctions et blocs de code | 50 min | Jour 2 · 9 h 55 | `src/backlog.js`, `src/api.js`, `test/backlog.test.js`, `test/api-csv.test.js` |

## Objectif

Générer des **fonctions complètes** (paramètres, valeurs de retour, cas vides), une **classe** `Backlog` et un **parseur CSV**, chacun documenté en **JSDoc**. Les tests d'acceptation passent et l'interface web de TaskFlow s'allume.

## Point de départ

Atelier 4 terminé (`npm run test:atelier4` au vert). Sinon : copiez `reprises/fin-atelier-04/tickets.js` dans `src/`.

## Étapes

1. **Plan d'abord** : dans la vue Chat, agent **Ask**, joignez `#file:src/backlog.js` et demandez : « Propose les signatures JSDoc des 4 éléments décrits, sans écrire les corps. » Relisez le plan.
2. **trierBacklog, filtrerBacklog, statistiques** : pour chacune, écrivez `/**` + Entrée au-dessus de la signature (Copilot propose la JSDoc), puis laissez compléter le corps. Test après **chaque** fonction : `npm run test:atelier5`.
3. **Classe Backlog** : écrivez `export class Backlog {` et laissez Copilot proposer constructeur et méthodes, une méthode à la fois. Vérifiez que le constructeur **copie** le tableau.
4. **parserCsv** : générez-la depuis le commentaire. Ouvrez `data/import.csv` dans un onglet voisin pendant la génération. Le test attend **6 tickets et 2 rejets**.
5. **chargerTickets** : générez-la, puis lancez `npm run serveur` et ouvrez `http://localhost:3000`. Testez `chargerTickets('http://localhost:3000/api/panne')` dans le chat en ligne ou un petit script : l'erreur doit être « HTTP 500 ».
6. Commit « Atelier 5 : backlog, classe, import ».

## Livrable

- `npm run test:atelier5` au vert (backlog **et** CSV).
- Chaque fonction exportée a sa JSDoc (`@param`, `@returns`).
- L'interface `http://localhost:3000` affiche le backlog trié, les filtres et les statistiques.

## Pièges à observer

- `sort()` trie **sur place** : `tickets.sort(...)` modifie le tableau reçu. Exigez `[...tickets].sort(...)` ou `toSorted()`.
- La recherche sans accents demande `normalize('NFD')` : Copilot propose souvent `toLowerCase()` seul, et « securite » ne trouve plus « Sécurité ».
- `split(',')` au lieu de `split(';')`, ou un numéro de ligne qui oublie l'en-tête : le test des rejets le verra.
- L'avancement d'une liste vide : `0 / 0` donne `NaN`.

## Bonus

Ajoutez `exporterCsv(tickets)` qui produit le format inverse, et vérifiez l'aller-retour `parserCsv(exporterCsv(liste))` dans un test. Que se passe-t-il avec un titre contenant « ; » ?

## Coincé ?

Une fonction résiste plus de 10 minutes : passez à la suivante, les tests sont indépendants. Retour en fin d'atelier ; point de reprise : `reprises/fin-atelier-05/`.

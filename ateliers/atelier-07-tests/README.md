# Atelier 7 · Une vraie suite de tests, générée et vérifiée

| Module | Durée | Moment | Fichiers |
|---|---|---|---|
| 7 · Tests unitaires avec Copilot | 50 min | Jour 2 · 14 h 30 | `test/kanban.test.js`, `test/api-charger.test.js` (à créer) |

## Objectif

Faire générer par Copilot une suite de tests **lisible** (Arrange-Act-Assert, noms en français qui décrivent le comportement) pour `deplacerTicket`, puis tester `chargerTickets` **sans réseau** grâce à un mock de `fetch`. Prouver ensuite que les tests détectent une erreur (test de mutation).

## Point de départ

Atelier 6 terminé (`src/kanban.js` au vert sur le contrat). Sinon : `reprises/fin-atelier-06/kanban.js`.

## Étapes

1. **Liste des cas d'abord** : chat **Ask**, `#file:src/kanban.js` : « Liste les cas à tester pour deplacerTicket : nominaux, limites, erreurs. Pas de code. » Complétez la liste vous-même (au moins 10 cas, dont : 3 en cours → 4e refusé, 2 en cours → 3e accepté, ticket non estimé, termineLe, immuabilité).
2. **Générer** : dans `test/kanban.test.js`, collez la liste en commentaire, puis `/tests` (chat en ligne) ou demandez la génération dans le chat. Imposez : `node:test`, `assert/strict`, un `describe` par règle, noms « refuse… / accepte… ».
3. **Vérifier chaque assertion** : pour chaque test, demandez-vous « échouerait-il si le code était faux ? ». Supprimez les tests tautologiques (qui recalculent le résultat avec la même logique que le code).
4. **Mock de fetch** : dans `test/api-charger.test.js`, testez `chargerTickets` avec un faux `fetchFn` : succès, `HTTP 500`, JSON qui n'est pas un tableau. Bonus : `mock.fn()` de `node:test` pour vérifier l'URL appelée.
5. **Mutation** : dans `src/kanban.js`, changez `>=` en `>` dans la règle WIP. Au moins un test doit passer au **rouge**. Sinon, écrivez le test manquant. Rétablissez.
6. `npm run couverture` : notez le pourcentage de lignes de `kanban.js` et `api.js`. Commit « test : suite kanban et api ».

## Livrable

- `test/kanban.test.js` : au moins 10 tests, tous au vert, groupés par règle R1–R4.
- `test/api-charger.test.js` : 3 tests avec mock, aucun appel réseau.
- La mutation `>=` → `>` est détectée.

## Pièges à observer

- Un test généré peut **réutiliser la logique du code** pour calculer l'attendu : il passe toujours, même si le code est faux.
- `assert.equal` sur deux objets compare les **références** : utilisez `assert.deepEqual` (avec `assert/strict`).
- Un mock trop bavard (qui vérifie chaque appel interne) casse au moindre refactoring : vérifiez le **résultat**, pas la recette.
- Une date « du jour » dans un test le rend instable : passez `aujourdHui` en paramètre.

## Bonus

Demandez à Copilot un test « paramétré » : un tableau de cas `[statutDépart, versStatut, attendu]` parcouru par une boucle `for…of` avec un `it` par cas.

## Coincé ?

`node --test` ne trouve pas votre fichier : il doit se terminer par `.test.js` et se trouver dans `test/`. Une erreur `ERR_MODULE_NOT_FOUND` : vérifiez le chemin `../src/kanban.js` (avec l'extension `.js`).

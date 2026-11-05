# Atelier 4 · TaskFlow v1 : le modèle de ticket

| Module | Durée | Moment | Fichiers |
|---|---|---|---|
| 4 · Génération de code simple | 55 min | Jour 1 · 15 h 45 | `src/tickets.js`, `test/tickets.test.js`, `katas/python/`, `katas/java/` |

## Objectif

Générer avec Copilot, **commentaire par commentaire**, le cœur de données de TaskFlow : constantes du domaine, `estPointsValide`, `validerTicket` et `creerTicket`. Les 8 tests d'acceptation fournis doivent passer au vert, sans jamais modifier les tests.

## Point de départ

`src/tickets.js` ne contient que des commentaires-guides. `npm run test:atelier4` échoue : c'est normal.

## Étapes

1. Lancez `npm run test:atelier4` et lisez les échecs : ce sont vos spécifications exécutables.
2. **Constantes** : curseur sous le commentaire 1, laissez Copilot proposer. Vérifiez `Object.freeze` et l'ordre des statuts. Acceptez mot par mot si besoin (`Ctrl+→`).
3. **estPointsValide** : écrivez seulement `export function estPointsValide(points) {` et laissez compléter. Vérifiez à la main les cas `"5"` et `undefined`.
4. **validerTicket** puis **creerTicket** : une fonction à la fois, test après chaque fonction. Si une suggestion s'arrête à la première erreur, refusez-la et précisez le commentaire.
5. Quand tout est vert : `npm run demo` affiche les tickets ; faites un commit « Atelier 4 : modèle de ticket ».
6. **Variante au choix** (si vous avez fini) : même cahier en Python (`katas/python/tickets.py`, tests : `python -m unittest katas/python/test_tickets.py`) ou en Java (`java katas/java/Ticket.java` → « 6/6 OK »).

## Livrable

- `npm run test:atelier4` : **8 tests au vert**, tests non modifiés.
- `src/tickets.js` ne contient aucun `new Date()`.
- Un commit « Atelier 4 : modèle de ticket ».

## Pièges à observer

- Copilot propose volontiers `points > 0 && points <= 13` : 4 passerait. La suite 1-2-3-5-8-13 est une **liste**, pas un intervalle.
- `typeof titre === 'string'` doit être vérifié **avant** `trim()`, sinon `titre: undefined` fait planter au lieu de renvoyer « titre invalide ».
- En Python, `True == 1` : `est_points_valide(True)` doit être faux. Copilot l'oublie presque toujours.

## Bonus

Demandez dans le chat en ligne (`Ctrl+I`, sélection sur `validerTicket`) : « Ajoute une règle : un bug doit avoir la priorité 1 ou 2. » Puis écrivez **vous-même** le test qui le prouve.

## Coincé ?

Après 45 minutes, si `validerTicket` résiste : copiez `reprises/fin-atelier-04/tickets.js` dans `src/` pour ne pas bloquer le Jour 2, et notez dans `JOURNAL.md` ce qui a coincé.

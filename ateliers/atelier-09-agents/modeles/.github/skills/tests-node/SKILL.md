---
name: tests-node
# TODO 1 · La description décide QUAND Copilot charge cette skill : quoi, et quand l'utiliser (une phrase).
#          Elle doit contenir les mots qu'un agent ou vous emploierez : tests, node:test, test/…
description:
---
# Tests node:test pour TaskFlow

## Où et comment
- Fichiers `test/<module>.test.js` ; les tests ajoutés par un agent vont dans `test/<module>-qa.test.js`.
- `import { describe, it } from 'node:test'` et `import assert from 'node:assert/strict'`.
- Lancer un fichier : `node --test test/<fichier>.test.js` · tout lancer : `npm test`.
- Modèle à copier : [modele.test.js](./modele.test.js).

## Structure de chaque test
1. **Arrange** : des données minimales, fabriquées par une petite fonction (`t(...)`).
2. **Act** : un seul appel à la fonction testée.
3. **Assert** : `assert.equal`, `assert.deepEqual`, `assert.throws(fn, /message/)`.

## Cas limites à toujours essayer
<!-- TODO 2 · Listez au moins 5 cas limites (indices : vide, absent, mauvais format, bornes de dates,
     année bissextile, changement d'heure, donnée reçue non modifiée…). -->

## Interdits
<!-- TODO 3 · Listez au moins 2 interdits (indices : new Date() sans argument, test sans assertion…). -->

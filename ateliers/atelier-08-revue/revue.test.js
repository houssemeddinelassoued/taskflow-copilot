// Atelier 8 · un test par défaut trouvé. Le test doit ÉCHOUER sur la suggestion
// d'origine, puis PASSER une fois la suggestion corrigée.   npm run test:revue
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { moyennePoints } from './suggestions/02-moyenne-points.js';

describe('Revue · 02 moyennePoints', () => {
  it('ignore les tickets non estimés', () => {
    assert.equal(moyennePoints([{ points: 3 }, { points: null }, { points: 5 }]), 4);
  });
  it('renvoie 0 pour une liste vide (et pas NaN)', () => {
    assert.equal(moyennePoints([]), 0);
  });
});

// À vous : un describe par suggestion (01, 03, 04, 05, 06, 07). Pour 08, une note dans REVUE.md suffit.

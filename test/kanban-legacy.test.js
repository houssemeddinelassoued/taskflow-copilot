// Tests de CARACTÉRISATION du code legacy (Atelier 6).
// Ils ne disent pas ce que le code DEVRAIT faire : ils figent ce qu'il FAIT aujourd'hui.
// Règle du refactoring : ils restent verts à chaque étape. Lancer : npm run test:atelier6
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { traiter } from '../src/legacy/kanban-legacy.js';

const liste = () => [
  { id: 1, titre: 'A', points: 3, statut: 'backlog' },
  { id: 2, titre: 'B', points: null, statut: 'backlog' },
  { id: 3, titre: 'C', points: 5, statut: 'encours' },
  { id: 4, titre: 'D', points: 2, statut: 'encours' },
  { id: 5, titre: 'E', points: 1, statut: 'encours' },
  { id: 6, titre: 'F', points: 8, statut: 'afaire' },
  { id: 7, titre: 'G', points: 2, statut: 'afaire' },
];

describe('Legacy · traiter (comportement actuel figé)', () => {
  it('déplace un ticket estimé hors du backlog', () => {
    const l = liste();
    assert.deepEqual(traiter(l, 1, 'afaire'), { ok: true, msg: '' });
    assert.equal(l[0].statut, 'afaire');
  });
  it('refuse un id inconnu', () => {
    assert.deepEqual(traiter(liste(), 99, 'afaire'), { ok: false, msg: 'introuvable' });
  });
  it('refuse un statut inconnu', () => {
    assert.deepEqual(traiter(liste(), 1, 'fini'), { ok: false, msg: 'statut ?' });
  });
  it('bloque un ticket non estimé dans le backlog', () => {
    assert.deepEqual(traiter(liste(), 2, 'afaire'), { ok: false, msg: 'non estime' });
  });
  it('⚠ accepte un 4e ticket en cours (limite 3 annoncée)', () => {
    // Comportement ACTUEL, conservé pendant le refactoring. Correction = étape séparée.
    const l = liste();
    assert.deepEqual(traiter(l, 6, 'encours'), { ok: true, msg: '' });
    assert.deepEqual(traiter(l, 7, 'encours'), { ok: false, msg: 'WIP' });
  });
  it('ne termine qu’un ticket en cours', () => {
    assert.deepEqual(traiter(liste(), 6, 'termine'), { ok: false, msg: 'pas en cours' });
  });
  it('termine un ticket en cours et date la fin', () => {
    const l = liste();
    assert.deepEqual(traiter(l, 3, 'termine', { date: '2026-11-04' }), { ok: true, msg: '' });
    assert.equal(l[2].termineLe, '2026-11-04');
  });
  it('compare les id avec == : "1" trouve le ticket 1', () => {
    assert.equal(traiter(liste(), '1', 'afaire').ok, true);
  });
  it('MODIFIE la liste reçue (effet de bord)', () => {
    const l = liste();
    traiter(l, 1, 'afaire');
    assert.notDeepEqual(l, liste());
  });
});

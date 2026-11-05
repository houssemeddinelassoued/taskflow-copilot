// Tests d'acceptation de l'Atelier 4 (fournis : ne pas les modifier).
// Lancer : npm run test:atelier4
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import * as tickets from '../src/tickets.js';

const { TYPES, STATUTS, PRIORITES, POINTS_VALIDES, estPointsValide, validerTicket, creerTicket } = tickets;

const valide = { titre: 'Connexion SSO', type: 'story', priorite: 1, points: 5, statut: 'backlog' };

describe('Atelier 4 · constantes', () => {
  it('expose les quatre constantes du domaine, figées', () => {
    assert.deepEqual([...TYPES], ['story', 'bug', 'tache']);
    assert.deepEqual([...STATUTS], ['backlog', 'afaire', 'encours', 'termine']);
    assert.deepEqual([...PRIORITES], [1, 2, 3]);
    assert.deepEqual([...POINTS_VALIDES], [1, 2, 3, 5, 8, 13]);
    for (const c of [TYPES, STATUTS, PRIORITES, POINTS_VALIDES]) assert.ok(Object.isFrozen(c));
  });
});

describe('Atelier 4 · estPointsValide', () => {
  it('accepte null et la suite 1-2-3-5-8-13', () => {
    for (const p of [null, 1, 2, 3, 5, 8, 13]) assert.equal(estPointsValide(p), true, `points ${p}`);
  });
  it('refuse 4, 0, -1, "5" et undefined', () => {
    for (const p of [4, 0, -1, '5', undefined]) assert.equal(estPointsValide(p), false, `points ${p}`);
  });
});

describe('Atelier 4 · validerTicket', () => {
  it('valide un ticket correct', () => {
    assert.deepEqual(validerTicket(valide), { ok: true, erreurs: [] });
  });
  it('refuse un titre trop court une fois nettoyé', () => {
    const r = validerTicket({ ...valide, titre: '  ab  ' });
    assert.equal(r.ok, false);
    assert.deepEqual(r.erreurs, ['titre invalide']);
  });
  it('renvoie toutes les erreurs, pas seulement la première', () => {
    const r = validerTicket({ titre: '', type: 'epic', priorite: 4, points: 4, statut: 'fini' });
    assert.equal(r.ok, false);
    assert.deepEqual(r.erreurs, ['titre invalide', 'type invalide', 'priorite invalide', 'points invalides', 'statut invalide']);
  });
});

describe('Atelier 4 · creerTicket', () => {
  it('applique les valeurs par défaut et nettoie le titre', () => {
    const t = creerTicket({ titre: '  Export CSV  ' }, { id: 13, aujourdHui: '2026-11-03' });
    assert.deepEqual(t, { id: 13, titre: 'Export CSV', type: 'tache', priorite: 2, points: null, statut: 'backlog', creeLe: '2026-11-03' });
  });
  it('lève une erreur explicite pour des données invalides', () => {
    assert.throws(() => creerTicket({ titre: 'Ok ok', points: 4 }, { id: 1, aujourdHui: '2026-11-03' }), /Ticket invalide : points invalides/);
  });
});

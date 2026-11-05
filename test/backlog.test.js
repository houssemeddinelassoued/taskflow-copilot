// Tests d'acceptation de l'Atelier 5 · backlog (fournis : ne pas les modifier).
// Lancer : npm run test:atelier5
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { Backlog, filtrerBacklog, statistiques, trierBacklog } from '../src/backlog.js';

const donnees = () => JSON.parse(readFileSync(new URL('../data/tickets.json', import.meta.url), 'utf8'));

describe('Atelier 5 · trierBacklog', () => {
  it('trie par priorité, puis points (non estimés en bas), puis id', () => {
    const ids = trierBacklog(donnees()).map((t) => t.id);
    assert.deepEqual(ids, [5, 11, 2, 1, 10, 4, 8, 3, 7, 6, 9, 12]);
  });
  it('ne modifie pas le tableau reçu', () => {
    const avant = donnees();
    const copie = structuredClone(avant);
    trierBacklog(avant);
    assert.deepEqual(avant, copie);
  });
});

describe('Atelier 5 · filtrerBacklog', () => {
  it('ignore la casse et les accents', () => {
    assert.deepEqual(filtrerBacklog(donnees(), { texte: 'LOGIN' }).map((t) => t.id), [11]);
    assert.deepEqual(filtrerBacklog(donnees(), { texte: 'securite' }).map((t) => t.id), [5]);
  });
  it('combine texte, type et priorité', () => {
    assert.deepEqual(filtrerBacklog(donnees(), { texte: 'mot', type: 'bug', priorite: 1 }).map((t) => t.id), [2]);
    assert.deepEqual(filtrerBacklog(donnees(), { type: 'story', priorite: 3 }).map((t) => t.id), [9, 12]);
  });
  it('sans filtre, renvoie tout', () => {
    assert.equal(filtrerBacklog(donnees()).length, 12);
  });
});

describe('Atelier 5 · statistiques', () => {
  it('compte, additionne et calcule l’avancement', () => {
    assert.deepEqual(statistiques(donnees()), {
      nombre: 12,
      totalPoints: 49,
      nonEstimes: 2,
      parStatut: { backlog: 6, afaire: 2, encours: 2, termine: 2 },
      avancement: 6,
    });
  });
  it('renvoie 0 % (et pas NaN) pour une liste vide', () => {
    assert.deepEqual(statistiques([]), {
      nombre: 0,
      totalPoints: 0,
      nonEstimes: 0,
      parStatut: { backlog: 0, afaire: 0, encours: 0, termine: 0 },
      avancement: 0,
    });
  });
});

describe('Atelier 5 · classe Backlog', () => {
  it('ajoute avec un id suivant, trouve et supprime', () => {
    const b = new Backlog(donnees(), { aujourdHui: '2026-11-04' });
    const t = b.ajouter({ titre: 'Export CSV', type: 'story', points: 3 });
    assert.equal(t.id, 13);
    assert.equal(t.creeLe, '2026-11-04');
    assert.equal(b.trouver(13).titre, 'Export CSV');
    assert.equal(b.supprimer(13), true);
    assert.equal(b.supprimer(13), false);
    assert.equal(b.stats.nombre, 12);
  });
  it('travaille sur une copie et liste trié + filtré', () => {
    const source = donnees();
    const b = new Backlog(source, { aujourdHui: '2026-11-04' });
    b.supprimer(1);
    assert.equal(source.length, 12);
    assert.deepEqual(b.lister({ type: 'bug' }).map((t) => t.id), [11, 2, 8]);
  });
  it('démarre à l’id 1 quand il est vide', () => {
    const b = new Backlog([], { aujourdHui: '2026-11-04' });
    assert.equal(b.ajouter({ titre: 'Premier ticket' }).id, 1);
  });
});

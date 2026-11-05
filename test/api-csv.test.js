// Tests d'acceptation de l'Atelier 5 · import CSV (fournis : ne pas les modifier).
// Lancer : npm run test:atelier5
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { parserCsv } from '../src/api.js';

const fichier = () => readFileSync(new URL('../data/import.csv', import.meta.url), 'utf8');

describe('Atelier 5 · parserCsv', () => {
  it('lit le fichier piégé : 6 tickets, 2 rejets', () => {
    const { tickets, rejets } = parserCsv(fichier());
    assert.equal(tickets.length, 6);
    assert.deepEqual(rejets, [
      { ligne: 6, raison: '4 colonnes attendues' },
      { ligne: 9, raison: 'titre vide' },
    ]);
  });
  it('nettoie les champs et convertit les nombres', () => {
    const { tickets } = parserCsv(fichier());
    assert.deepEqual(tickets[0], { titre: 'Paiement par carte refusé', type: 'bug', priorite: 1, points: 3 });
    assert.deepEqual(tickets[2], { titre: 'Mode sombre', type: 'story', priorite: 3, points: null });
  });
  it('accepte les fins de ligne Windows et le BOM', () => {
    const { tickets, rejets } = parserCsv('﻿titre;type;priorite;points\r\nA faire;tache;2;1\r\n');
    assert.deepEqual(tickets, [{ titre: 'A faire', type: 'tache', priorite: 2, points: 1 }]);
    assert.deepEqual(rejets, []);
  });
  it('rejette une priorité non numérique', () => {
    const { rejets } = parserCsv('titre;type;priorite;points\nTicket;bug;haute;3');
    assert.deepEqual(rejets, [{ ligne: 2, raison: 'nombre attendu' }]);
  });
});

// Contrat minimal de src/kanban.js (Atelier 6, fourni). La suite complète,
// c'est vous qui l'écrirez avec Copilot à l'Atelier 7 (test/kanban.test.js).
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { LIMITE_WIP, deplacerTicket } from '../src/kanban.js';

const liste = () => [
  { id: 1, titre: 'A', points: 3, statut: 'backlog' },
  { id: 3, titre: 'C', points: 5, statut: 'encours' },
  { id: 4, titre: 'D', points: 2, statut: 'encours' },
  { id: 5, titre: 'E', points: 1, statut: 'encours' },
  { id: 6, titre: 'F', points: 8, statut: 'afaire' },
];

describe('Contrat · deplacerTicket', () => {
  it('renvoie un nouveau tableau et ne touche pas l’original', () => {
    const avant = liste();
    const r = deplacerTicket(avant, 1, 'afaire');
    assert.equal(r.ok, true);
    assert.notEqual(r.tickets, avant);
    assert.equal(r.tickets.find((t) => t.id === 1).statut, 'afaire');
    assert.deepEqual(avant, liste());
  });
  it('corrige le bug du legacy : refuse le 4e ticket en cours', () => {
    assert.equal(LIMITE_WIP, 3);
    assert.deepEqual(deplacerTicket(liste(), 6, 'encours'), { ok: false, erreur: 'WIP atteint (3/3)' });
  });
  it('signale un id inconnu sans planter', () => {
    assert.deepEqual(deplacerTicket(liste(), 99, 'afaire'), { ok: false, erreur: 'Ticket introuvable' });
  });
});

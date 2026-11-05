// TaskFlow · test d'acceptation de l'Atelier 9 (échéances).
// Ce fichier est VOTRE garde-fou : les agents ne doivent pas le modifier.
// Le Testeur QA ajoute ses propres tests dans un autre fichier.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { estEnRetard, joursDeRetard, ticketsEnRetard } from '../src/echeances.js';

const AUJ = '2026-11-05';
const t = (id, echeance, statut = 'encours', priorite = 2) => ({ id, titre: `Ticket ${id}`, type: 'tache', priorite, points: 3, statut, creeLe: '2026-10-01', echeance });

describe('estEnRetard', () => {
  it('échéance passée et ticket non terminé : en retard', () => {
    assert.equal(estEnRetard(t(1, '2026-11-04'), AUJ), true);
  });
  it('échéance aujourd’hui : pas encore en retard', () => {
    assert.equal(estEnRetard(t(1, AUJ), AUJ), false);
  });
  it('ticket terminé : jamais en retard', () => {
    assert.equal(estEnRetard(t(1, '2026-10-01', 'termine'), AUJ), false);
  });
  it('sans échéance : jamais en retard', () => {
    assert.equal(estEnRetard(t(1, undefined), AUJ), false);
  });
  it('échéance mal formée : erreur explicite', () => {
    assert.throws(() => estEnRetard(t(1, '05/11/2026'), AUJ), /Échéance invalide/);
  });
});

describe('joursDeRetard', () => {
  it('compte les jours calendaires, changement de mois compris', () => {
    assert.equal(joursDeRetard(t(1, '2026-10-30'), AUJ), 6);
  });
  it('vaut 0 pour un ticket à l’heure', () => {
    assert.equal(joursDeRetard(t(1, '2026-12-01'), AUJ), 0);
  });
  it('ignore le passage à l’heure d’hiver (25 octobre 2026)', () => {
    assert.equal(joursDeRetard(t(1, '2026-10-24'), '2026-10-26'), 2);
  });
});

describe('ticketsEnRetard', () => {
  const liste = [t(1, '2026-11-03', 'encours', 2), t(2, '2026-11-01', 'afaire', 3), t(3, '2026-11-03', 'encours', 1), t(4, '2026-12-01'), t(5, '2026-10-01', 'termine'), t(6, undefined)];

  it('ne garde que les tickets en retard, les plus en retard d’abord, puis par priorité', () => {
    assert.deepEqual(ticketsEnRetard(liste, AUJ).map((x) => x.id), [2, 3, 1]);
  });
  it('ne modifie pas la liste reçue', () => {
    const copie = structuredClone(liste);
    ticketsEnRetard(liste, AUJ);
    assert.deepEqual(liste, copie);
  });
  it('liste vide : tableau vide', () => {
    assert.deepEqual(ticketsEnRetard([], AUJ), []);
  });
});

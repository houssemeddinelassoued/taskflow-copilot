// Aperçu console de TaskFlow :  npm run demo
// Affiche le backlog trié et les statistiques dès que src/backlog.js est prêt.
import { readFileSync } from 'node:fs';

const tickets = JSON.parse(readFileSync(new URL('../data/tickets.json', import.meta.url), 'utf8'));
const backlog = await import('../src/backlog.js').catch((e) => {
  console.log(`src/backlog.js ne se charge pas : ${e.message}`);
  return {};
});

if (typeof backlog.trierBacklog !== 'function') {
  console.log('trierBacklog() n’existe pas encore : c’est l’objet de l’Atelier 5.');
  console.table(tickets.map(({ id, titre, priorite, points, statut }) => ({ id, titre, priorite, points, statut })));
} else {
  console.log('Backlog trié (priorité, puis points, non estimés en bas) :');
  console.table(backlog.trierBacklog(tickets).map(({ id, titre, priorite, points, statut }) => ({ id, titre, priorite, points, statut })));
  if (typeof backlog.statistiques === 'function') console.log(backlog.statistiques(tickets));
}

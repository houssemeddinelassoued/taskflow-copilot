// Expérience 4 · Lire avant d'accepter
// Ces trois fonctions ont été écrites en acceptant la première suggestion, sans la lire.
// Chacune contient UN défaut. Trouvez-le AVANT de lancer le fichier :  node katas/03-contexte/experience-4-lire-avant-accepter.js
// Puis demandez à Copilot Chat (Ask) : « Ce code a-t-il un défaut ? » et comparez avec votre diagnostic.

// Renvoie le dernier élément d'un tableau
function dernier(tableau) {
  return tableau[tableau.length];
}

// Vrai si le ticket est prioritaire (priorité 1)
function estPrioritaire(ticket) {
  return (ticket.priorite = 1);
}

// Somme des points des tickets terminés
function pointsTermines(tickets) {
  return tickets.filter((t) => t.statut === 'termine').reduce((s, t) => s + t.points);
}

console.log(dernier([1, 2, 3])); // attendu : 3
console.log(estPrioritaire({ priorite: 3 })); // attendu : false
console.log(pointsTermines([{ statut: 'termine', points: 2 }, { statut: 'termine', points: 3 }])); // attendu : 5

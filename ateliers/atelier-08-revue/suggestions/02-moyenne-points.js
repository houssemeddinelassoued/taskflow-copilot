// Suggestion Copilot : « points moyens par ticket estimé ».
// Revue : vérifiez avec les données réelles (des tickets ont points: null) et avec une liste vide.

export function moyennePoints(tickets) {
  let total = 0;
  for (const t of tickets) total += t.points;
  return total / tickets.length;
}

// Suggestion Copilot : « supprime les tickets en double (même titre) ».
// Revue : correcte sur 12 tickets… et sur l'historique de 50 000 tickets ?

export function dedoublonner(tickets) {
  return tickets.filter((t, i) => tickets.findIndex((u) => u.titre === t.titre) === i);
}

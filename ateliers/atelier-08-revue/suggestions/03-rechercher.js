// Suggestion Copilot : « recherche plein texte, insensible à la casse ».
// Revue : que se passe-t-il si l'utilisateur tape « C++ » ou « (urgent » ?

export function rechercher(tickets, saisie) {
  const motif = new RegExp(saisie, 'i');
  return tickets.filter((t) => motif.test(t.titre));
}

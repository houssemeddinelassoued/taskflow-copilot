// Suggestion Copilot : « nombre de jours entre aujourd'hui et l'échéance ».
// Revue : testez avec une échéance demain, et avec un passage à l'heure d'hiver (fin octobre).

export function joursRestants(echeanceIso, aujourdHui = new Date()) {
  const echeance = new Date(echeanceIso);
  return Math.floor((echeance - aujourdHui) / 86400000);
}

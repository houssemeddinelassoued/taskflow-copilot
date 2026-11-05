// Suggestion Copilot : « client pour l'API de l'outil de tickets de l'entreprise ».
// Revue : relisez chaque ligne comme si ce fichier était publié sur GitHub ce soir.

const API_URL = 'http://tickets.exemple-interne.fr/api';
const TOKEN = 'FAUX-JETON-DE-DEMO-taskflow-1234';

export async function listerTickets(fetchFn = fetch) {
  const r = await fetchFn(`${API_URL}/tickets?token=${TOKEN}`);
  return r.json();
}

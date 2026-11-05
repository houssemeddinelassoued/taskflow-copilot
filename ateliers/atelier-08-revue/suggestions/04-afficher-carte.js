// Suggestion Copilot : « crée le HTML d'une carte Kanban ».
// Revue : le titre vient d'un import CSV fourni par un client…

export function htmlCarte(ticket) {
  return '<div class="carte"><h3>' + ticket.titre + '</h3><span>' + ticket.points + ' pts</span></div>';
}

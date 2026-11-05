// ─────────────────────────────────────────────────────────────────────────────
// TaskFlow · src/kanban.js — la version propre de traiter()          (Atelier 6)
// ─────────────────────────────────────────────────────────────────────────────
// À écrire APRÈS avoir refactoré src/legacy/kanban-legacy.js (tests toujours verts).
// Vérification : npm run test:atelier6   (contrat : test/kanban-contrat.test.js)

// LIMITE_WIP = 3 (exportée) · COLONNES = les 4 statuts dans l'ordre (réutilisez STATUTS)

// deplacerTicket(tickets, id, versStatut, { aujourdHui } = {})
//   → { ok: true, tickets: NOUVEAU tableau }   ou   { ok: false, erreur: "message" }
//   Règles :
//   R1 · WIP       : au plus LIMITE_WIP tickets « encours » → "WIP atteint (3/3)"   (le legacy en laissait passer 4 !)
//   R2 · Ready     : un ticket non estimé ne quitte pas le backlog → "Ticket non estimé"
//   R3 · Terminer  : seul un ticket « encours » peut passer « termine » → "Seul un ticket en cours peut être terminé"
//                    et il reçoit termineLe = aujourdHui
//   R4 · Immuable  : ni le tableau reçu ni ses tickets ne sont modifiés
//   Erreurs aussi pour : id inconnu → "Ticket introuvable" · statut inconnu → "Statut inconnu : <statut>"
//   Comparaison stricte des id (===) : "1" ne trouve PAS le ticket 1.


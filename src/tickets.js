// ─────────────────────────────────────────────────────────────────────────────
// TaskFlow · src/tickets.js — le modèle de ticket                  (Atelier 4)
// ─────────────────────────────────────────────────────────────────────────────
// Méthode : placez le curseur à la fin de chaque commentaire-guide, laissez
// Copilot proposer (ghost text), LISEZ la suggestion, puis Tab, Ctrl+→ ou Échap.
// Vérification : npm run test:atelier4   (8 tests doivent passer au vert)
//
// Un ticket ressemble à ceci :
//   { id: 1, titre: "Connexion SSO", type: "story", priorite: 1,
//     points: 5, statut: "backlog", creeLe: "2026-11-03" }

// 1. Constantes du domaine, toutes exportées et figées avec Object.freeze :
//    TYPES          → "story", "bug", "tache"
//    STATUTS        → dans l'ordre du flux : "backlog", "afaire", "encours", "termine"
//    PRIORITES      → 1 (haute), 2 (moyenne), 3 (basse)
//    POINTS_VALIDES → suite du planning poker : 1, 2, 3, 5, 8, 13


// 2. estPointsValide(points) : vrai si points vaut null (ticket non estimé)
//    ou appartient à POINTS_VALIDES. Faux pour 4, 0, -1, "5" ou undefined.


// 3. validerTicket(ticket) : renvoie { ok, erreurs } où erreurs est un tableau
//    de messages. Ne s'arrête PAS à la première erreur.
//    - titre    : chaîne de 3 à 80 caractères une fois nettoyée (trim) → "titre invalide"
//    - type     : présent dans TYPES                                   → "type invalide"
//    - priorite : présente dans PRIORITES                              → "priorite invalide"
//    - points   : estPointsValide(points)                              → "points invalides"
//    - statut   : présent dans STATUTS                                 → "statut invalide"


// 4. creerTicket(donnees, { id, aujourdHui }) : renvoie un NOUVEAU ticket complet.
//    - valeurs par défaut : type "tache", priorite 2, points null, statut "backlog"
//    - titre nettoyé (trim) ; creeLe = aujourdHui (chaîne "AAAA-MM-JJ")
//    - pas de new Date() ici : la date du jour est toujours passée en paramètre
//    - si validerTicket échoue : lever new Error("Ticket invalide : " + erreurs jointes par ", ")


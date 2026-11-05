// ─────────────────────────────────────────────────────────────────────────────
// TaskFlow · src/api.js — importer des tickets (CSV, HTTP)           (Atelier 5)
// ─────────────────────────────────────────────────────────────────────────────
// Vérification : npm run test:atelier5, puis npm run serveur et http://localhost:3000

// 1. parserCsv(texte) → { tickets, rejets }
//    - séparateur « ; », première ligne = en-tête « titre;type;priorite;points » (ignorée)
//    - accepte les fins de ligne Windows (\r\n) et un éventuel BOM en tête de fichier
//    - lignes vides : ignorées (ni ticket, ni rejet)
//    - chaque champ est nettoyé (trim) ; priorite → nombre ; points vide → null, sinon nombre
//    - rejets : { ligne, raison } avec ligne = numéro de ligne dans le fichier (en-tête = 1)
//        · nombre de colonnes différent de 4 → "4 colonnes attendues"
//        · titre vide                        → "titre vide"
//        · priorite ou points non numériques → "nombre attendu"
//    - tickets : objets { titre, type, priorite, points } (ni id, ni statut : ce ne sont
//      que des données, la validation métier se fait à l'ajout dans le Backlog)


// 2. chargerTickets(url, { fetchFn = fetch } = {}) → Promise<tableau de tickets>
//    - appelle fetchFn(url) ; si la réponse n'est pas ok → Error("HTTP " + status)
//    - si le JSON reçu n'est pas un tableau → Error("Format inattendu")
//    - fetchFn est injectable : c'est ce qui permettra de le simuler (mock) à l'Atelier 7


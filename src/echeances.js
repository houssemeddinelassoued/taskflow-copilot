// ─────────────────────────────────────────────────────────────────────────────
// TaskFlow · src/echeances.js — échéances et tickets en retard          (Atelier 9)
// ─────────────────────────────────────────────────────────────────────────────
// Ce fichier n'est PAS à écrire à la main : votre équipe d'agents s'en charge
// (Analyste PO → Développeur → Testeur QA). Voir ateliers/atelier-09-agents/README.md.
// Vérification : npm run test:atelier9   (contrat : test/echeances.test.js)
//
// Le brief du client, tel quel :
//   « Les chefs de projet veulent voir d'un coup d'œil les tickets en retard,
//     les plus en retard d'abord. »
//
// Un ticket peut désormais avoir un champ optionnel `echeance` au format AAAA-MM-JJ.
// Comme ailleurs dans TaskFlow, la date du jour est INJECTÉE (paramètre aujourdHui,
// format AAAA-MM-JJ) : jamais de new Date() dans la logique.

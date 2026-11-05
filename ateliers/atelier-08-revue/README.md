# Atelier 8 · Revue de code et livraison

| Module | Durée | Moment | Fichiers |
|---|---|---|---|
| 8 · Bonnes pratiques et vérification | 40 min | Jour 2 · 16 h 10 | `ateliers/atelier-08-revue/`, `.github/copilot-instructions.md` |

## Objectif

Relire huit suggestions Copilot « acceptées trop vite » avec la **checklist de relecture** (logique, performance, sécurité, licence), prouver chaque défaut par un test, le corriger, puis livrer TaskFlow avec un fichier d'instructions d'équipe et un dernier commit propre.

## Point de départ

Les 8 fichiers de `suggestions/` sont des fonctions TaskFlow générées par Copilot. `revue.test.js` contient un exemple (suggestion 02) qui échoue.

## Étapes

1. **Relire sans outil** (10 min) : pour chaque suggestion, notez dans `REVUE.md` le défaut soupçonné et sa catégorie : logique, performance, sécurité, API inventée, licence.
2. **Second avis** : sur deux suggestions de votre choix, sélectionnez le code, clic droit › Copilot › revue de code (ou chat Ask : « Fais la revue de ce code ») et comparez avec votre liste : qu'a-t-il trouvé ? Qu'a-t-il manqué ?
3. **Prouver** : pour 01 à 07, ajoutez un `describe` dans `revue.test.js` qui **échoue** sur la suggestion d'origine (`npm run test:revue`).
4. **Corriger** : corrigez chaque suggestion (vous-même ou avec `Ctrl+I`) jusqu'au vert. Pour 08, décidez dans `REVUE.md` : remplacer par `structuredClone`, et retirer le code copié.
5. **Instructions d'équipe** : créez `.github/copilot-instructions.md` (5 à 8 règles tirées de la formation : `node:test`, pas de `new Date()` dans la logique, `textContent` jamais `innerHTML`, aucun secret, JSDoc obligatoire…). Vérifiez dans le chat qu'elles sont prises en compte (référence affichée sous la réponse).
6. `npm test` tout au vert, commit « Atelier 8 : revue et instructions d'équipe ». Préparez 2 minutes de restitution (partage d'écran).

## Livrable

- `REVUE.md` : 8 défauts identifiés, classés, avec la correction choisie.
- `npm run test:revue` : au moins 7 `describe`, tous au vert après correction.
- `.github/copilot-instructions.md` versionné ; `npm test` au vert.

## Pièges à observer

- `sortBy` n'existe pas sur les tableaux JavaScript : une **API inventée** se repère vite… à condition d'exécuter le code.
- La suggestion 05 cumule trois problèmes : jeton en clair, jeton dans l'URL (journaux serveur), HTTP sans TLS.
- Copilot en mode revue est un **second avis** : il ne remplace ni vos tests ni la relecture humaine.

## Bonus

Ajoutez une règle à `.github/copilot-instructions.md`, puis redemandez la suggestion 04 dans une nouvelle conversation : le code proposé respecte-t-il maintenant `textContent` ?

## Coincé ?

Vous ne voyez pas le défaut d'une suggestion : exécutez-la avec un cas limite (liste vide, saisie « ( », date de demain). Si rien ne casse, passez à la suivante et revenez-y.

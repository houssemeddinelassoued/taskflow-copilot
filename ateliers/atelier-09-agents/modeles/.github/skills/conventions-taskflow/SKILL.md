---
name: conventions-taskflow
description: Conventions de code du projet TaskFlow (modules ES, JSDoc en français, dates injectées, erreurs explicites, immutabilité). À utiliser pour écrire ou modifier du code dans src/.
---
# Conventions de code TaskFlow

## Structure
- JavaScript, modules ES (`import` / `export`), Node 22, aucune dépendance npm.
- Un module par domaine dans `src/` : `tickets.js`, `backlog.js`, `kanban.js`, `api.js`, `echeances.js`.
- Exports nommés uniquement, pas d'`export default`.

## Règles
1. **Dates injectées** : la date du jour arrive en paramètre `aujourdHui` au format `AAAA-MM-JJ`. Jamais de `new Date()` ni de `Date.now()` dans la logique.
2. **Calculs de jours en UTC** (`Date.UTC`) : aucun effet des changements d'heure.
3. **Immutabilité** : ne jamais modifier un tableau ou un ticket reçu ; renvoyer de nouveaux objets.

<!-- TODO · Ajoutez 3 à 5 règles, reprises de votre .github/copilot-instructions.md (Atelier 8)
     ou de la formation : erreurs explicites, ===, JSDoc en français, textContent… -->

## Exemple de référence
Voir `creerTicket` dans `src/tickets.js` : date injectée, validation, erreur explicite, JSDoc.

# Atelier 9 · Votre équipe d'agents livre une fonctionnalité

| Module | Durée | Moment | Fichiers |
|---|---|---|---|
| 9 · Les agents dans Copilot | 30 min | Jour 2 · 16 h 50 | `.github/agents/`, `.github/skills/`, `src/echeances.js` |

## Objectif

Créer **3 agents personnalisés** (Analyste PO, Développeur, Testeur QA) et **2 skills** (conventions de code, tests), puis leur faire livrer une fonctionnalité de TaskFlow **sans écrire le code vous-même** : les tickets en retard. Votre rôle : cadrer, valider chaque relais, et vérifier.

## Point de départ

Ateliers 4 à 8 terminés (ou dossier `reprises/`). `.github/copilot-instructions.md` de l'Atelier 8 en place. Le brief du client est en tête de `src/echeances.js` ; le test d'acceptation `test/echeances.test.js` est fourni : `npm run test:atelier9` est **rouge**.

## Étapes

1. **Installer l'équipe** (2 min) : copiez le dossier `ateliers/atelier-09-agents/modeles/.github/` à la racine du dépôt (il se fusionne avec votre `.github/`). Vous obtenez `.github/agents/` (3 fichiers `.agent.md`) et `.github/skills/` (2 dossiers avec un `SKILL.md`).
2. **Compléter les 2 skills** (6 min) : remplacez chaque `TODO` de `conventions-taskflow/SKILL.md` et `tests-node/SKILL.md`. Soignez la `description` : c'est elle qui décide quand Copilot charge la skill.
3. **Compléter les 3 agents** (6 min) : remplacez chaque `TODO`. Donnez à chacun **le minimum d'outils** (`read`, `search`, `edit`, `execute`…). Vérifiez : `Ctrl+Maj+P` › « Chat: Open Customizations » › onglet **Agents** : les 3 agents sont listés sans erreur, et ils apparaissent dans la liste des agents du chat.
4. **Analyste PO** (4 min) : nouvelle conversation, agent **Analyste PO**, collez le brief de `src/echeances.js`. Relisez la story : corrigez-la au besoin dans le chat. **Vous** validez avant le relais.
5. **Développeur** (6 min) : cliquez **Confier au Développeur** (ou choisissez l'agent et collez la story). Approuvez les commandes du terminal une par une. Objectif : `npm run test:atelier9` au vert.
6. **Testeur QA** (4 min) : relais **Confier au Testeur QA**. Il ajoute `test/echeances-qa.test.js`. S'il trouve un échec, relais **Renvoyer au Développeur**.
7. **Bilan** (2 min) : `npm test`, puis dans `JOURNAL.md` : ce que chaque agent a fait, ce que vous avez corrigé, l'étape où vous avez dû intervenir.

## Livrable

- `.github/agents/` : 3 agents, outils minimaux, sans `TODO`.
- `.github/skills/` : 2 skills, sans `TODO`.
- `src/echeances.js` écrit par l'équipe ; `npm run test:atelier9` et `npm test` au vert.
- `test/echeances-qa.test.js` : au moins 3 tests de cas limites ajoutés par le Testeur QA.
- `JOURNAL.md` : la section « Atelier 9 » remplie.

## Pièges à observer

- Le Développeur « corrige » le test d'acceptation au lieu du code : c'est exactement le garde-fou à écrire dans ses règles.
- L'Analyste PO invente des règles absentes du brief (jours ouvrés, fuseau horaire…) : sa section « Questions ouvertes » est faite pour ça.
- La skill ne se charge pas : sa `description` ne contient pas les mots de votre demande, ou le nom du dossier diffère du champ `name`.
- Le bouton de relais n'apparaît pas : le nom après `agent:` doit être **exactement** le `name` de l'agent cible (accents compris). À défaut, changez d'agent dans la liste et collez la demande.
- Chaque agent et chaque aller-retour consomment des crédits IA : un brief précis coûte moins cher qu'une boucle de corrections.

## Bonus

1. **Deuxième fonctionnalité, même équipe** : « Les chefs de projet veulent exporter le backlog en CSV et pouvoir le réimporter. » (`exporterCsv(tickets)` dans `src/api.js`, relu par `parserCsv`). Ici, pas de test fourni : c'est le Testeur QA qui écrit le contrat… et vous qui le relisez.
2. **Chef d'orchestre** : créez `.github/agents/chef-orchestre.agent.md` avec `tools: ['agent', 'read', 'search', 'todo']` et `agents: ['Analyste PO', 'Développeur', 'Testeur QA']`. Il délègue aux trois autres comme sous-agents ; exigez qu'il attende votre validation de la story.
3. **Agent Sécurité** en lecture seule (`tools: ['read', 'search']`) qui relit le diff avec la checklist de l'Atelier 8.

## Coincé ?

Un agent n'apparaît pas dans la liste : vérifiez l'emplacement (`.github/agents/` à la racine, extension `.agent.md`) et l'en-tête YAML (les `---`, une `description` non vide) ; l'onglet **Agents** de « Chat: Open Customizations » signale les fichiers en erreur. Plus de 10 minutes de blocage : dites-le au micro, le formateur colle les fichiers complétés dans le clavardage ; ou faites les étapes 4 à 6 avec l'agent **Agent** intégré, en collant le rôle au début de votre message.

# TaskFlow · dépôt fil rouge « GitHub Copilot · Débutant »

Formation Docaposte Institute, 2 jours, classe virtuelle. Pendant les deux jours, vous
construisez **TaskFlow**, un petit outil de gestion de tickets (backlog + Kanban), en
JavaScript, avec GitHub Copilot dans VS Code. Chaque atelier ajoute une brique.

## Installer (5 minutes, avant la formation)

1. **Node.js 22 ou plus** : `node --version`. Aucune dépendance à installer : `npm install` n'est pas nécessaire.
2. **VS Code** à jour, connecté à **GitHub Copilot** (icône Copilot dans la barre d'état).
3. Récupérez le dépôt, au choix :
   - `git clone https://github.com/houssemeddinelassoued/taskflow-copilot.git`
   - ou **Code › Download ZIP** sur https://github.com/houssemeddinelassoued/taskflow-copilot, puis décompressez.

   Dans VS Code : Fichier › Ouvrir le dossier › `taskflow-copilot`. Le guide PDF des 8 ateliers est à la racine : `Guide-des-ateliers-Copilot-Debutant.pdf`.
4. `npm test` : des tests échouent, **c'est normal** : vous les ferez passer au vert pendant les ateliers.
5. Facultatif, pour les variantes : Python 3.10+ et/ou un JDK 21+.

## Commandes

| Commande | Effet |
|---|---|
| `npm test` | tous les tests du dossier `test/` |
| `npm run test:atelier4` (5, 6) | les tests d'acceptation d'un atelier |
| `npm run test:revue` | les tests de la revue (Atelier 8) |
| `npm run couverture` | tests + couverture de code |
| `npm run demo` | aperçu du backlog dans le terminal |
| `npm run serveur` | l'interface Kanban sur http://localhost:3000 |

## Ce que contient le dépôt

| Dossier | Contenu |
|---|---|
| `src/` | le code de TaskFlow : à générer avec Copilot, guidé par des commentaires |
| `src/legacy/` | un vieux code à refactorer (Atelier 6) |
| `test/` | les tests d'acceptation fournis (ne pas les modifier) |
| `data/` | 12 tickets fictifs et un CSV piégé |
| `public/` | l'interface web, qui s'allume au fil des ateliers |
| `katas/` | les petits exercices des ateliers 1 à 3, et les variantes Python / Java |
| `ateliers/` | un énoncé par atelier (`README.md`) |
| `reprises/` | des points de reprise, si vous êtes bloqué |
| `JOURNAL.md` | votre journal de bord, à remplir au fil des ateliers |

## Les 8 ateliers (individuels)

| # | Atelier | Module | Durée |
|---|---|---|---|
| 1 | Premier contact avec Copilot | 1 · Introduction | 20 min |
| 2 | Configurer son poste et prendre les réflexes clavier | 2 · Installation et configuration | 30 min |
| 3 | Le contexte fait la suggestion | 3 · Comprendre les suggestions | 35 min |
| 4 | TaskFlow v1 : le modèle de ticket | 4 · Génération de code simple | 55 min |
| 5 | TaskFlow v2 : backlog, classe et import | 5 · Fonctions et blocs de code | 50 min |
| 6 | Refactorer le Kanban legacy | 6 · Refactoring | 45 min |
| 7 | Une vraie suite de tests, générée et vérifiée | 7 · Tests unitaires | 50 min |
| 8 | Revue de code et livraison | 8 · Bonnes pratiques et vérification | 40 min |

## Règles du jeu

- **Données fictives uniquement** : aucun code client, aucun secret, aucune donnée personnelle dans un prompt.
- **Lire avant d'accepter** : une suggestion acceptée devient *votre* code.
- **Un test au vert vaut mieux qu'une explication convaincante.**
- Bloqué plus de 5 minutes ? Dites-le au micro au prochain point d'étape : partage d'écran de 2 minutes.

# Atelier 2 · Configurer son poste et prendre les réflexes clavier

| Module | Durée | Moment | Fichiers |
|---|---|---|---|
| 2 · Installation et configuration | 30 min | Jour 1 · 11 h 45 | `.vscode/settings.json`, `katas/02-raccourcis.js` |

## Objectif

Vérifier votre licence, régler Copilot pour **votre** façon de travailler (langue, langages actifs, suggestions de modification suivante) dans un fichier `.vscode/settings.json` versionné, puis enchaîner les **8 gestes clavier** essentiels sans toucher la souris.

## Point de départ

Atelier 1 terminé. Dépôt `taskflow-copilot` ouvert dans VS Code.

## Étapes

1. **Licence** : cliquez sur l'icône Copilot de la barre d'état. Notez votre plan (Free, Pro, Business…) et, si vous êtes en Free, le quota de complétions restant du mois.
2. **Réglages** : `Ctrl+Maj+P` › « Préférences : Ouvrir les paramètres de l'espace de travail (JSON) ». Ajoutez :

   ```json
   {
     "github.copilot.chat.localeOverride": "fr",
     "github.copilot.enable": { "*": true, "markdown": false, "plaintext": false },
     "github.copilot.nextEditSuggestions.enabled": true,
     "editor.inlineSuggest.enabled": true
   }
   ```

3. Vérifiez chaque réglage par son **effet visible** : le chat répond en français ; aucun texte grisé dans `README.md` ; une flèche apparaît dans la gouttière après un renommage.
4. **Parcours clavier** : ouvrez `katas/02-raccourcis.js` et réalisez les gestes 1 à 8 dans l'ordre. Cochez ci-dessous chaque geste réussi **sans souris**.

| Geste | Raccourci | Fait |
|---|---|---|
| 1 · accepter | `Tab` | ☐ |
| 2 · refuser | `Échap` | ☐ |
| 3 · accepter mot par mot | `Ctrl+→` | ☐ |
| 4 · alternatives | `Alt+]` / `Alt+[` | ☐ |
| 5 · déclencher | `Alt+\` | ☐ |
| 6 · chat en ligne | `Ctrl+I` | ☐ |
| 7 · vue Chat | `Ctrl+Alt+I` | ☐ |
| 8 · modification suivante | `Tab` (flèche de gouttière) | ☐ |

## Livrable

- `.vscode/settings.json` contient vos 4 réglages et chacun a été vérifié par son effet.
- Les 8 gestes sont cochés.
- `JOURNAL.md` : votre plan Copilot et le geste qui vous sera le plus utile.

## Pièges à observer

- `github.copilot.enable` désactive l'inline pour un langage, **pas** le chat.
- macOS : `Ctrl` devient `Cmd` et `Alt` devient `Option` (sauf `Ctrl+Alt+I` → `Ctrl+Cmd+I`).
- Sur un clavier AZERTY, `Alt+]` et `Alt+\` peuvent ne pas répondre : survolez le texte grisé (barre « 1/3 ») ou réattribuez le raccourci.

## Bonus

Ajoutez `"editor.inlineSuggest.edits.showCollapsed": true` : les suggestions de modification suivante restent repliées tant que vous n'y allez pas. Puis `Ctrl+K Ctrl+S`, « inline suggest » : attribuez un raccourci à « accepter la ligne suivante ».

## Coincé ?

Les réglages n'ont pas d'effet ? Vérifiez que le fichier est bien `.vscode/settings.json` **à la racine du dépôt** et que le JSON est valide (pas de virgule finale). Le chat reste en anglais : rechargez la fenêtre (`Ctrl+Maj+P` › « Recharger la fenêtre »).

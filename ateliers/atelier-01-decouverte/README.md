# Atelier 1 · Premier contact avec Copilot

| Module | Durée | Moment | Fichiers |
|---|---|---|---|
| 1 · Introduction à GitHub Copilot | 20 min | Jour 1 · 10 h 30 | `katas/01-premiers-pas.js`, `JOURNAL.md` |

## Objectif

Voir Copilot travailler sur un vrai dépôt : lui faire **expliquer** le projet TaskFlow, puis obtenir vos premières **suggestions inline**, et noter ce qui est juste… et ce qui ne l'est pas.

## Point de départ

Le dépôt `taskflow-copilot` est ouvert dans VS Code (Fichier › Ouvrir le dossier), Copilot est connecté (icône Copilot dans la barre d'état, sans point d'exclamation).

## Étapes

1. Ouvrez la vue Chat (`Ctrl+Alt+I`), choisissez l'agent **Ask** et demandez : « Explique la structure de ce projet en 5 lignes : à quoi sert chaque dossier ? Cite les fichiers. »
2. Comparez sa réponse avec `README.md`. Notez dans `JOURNAL.md` **une** affirmation exacte et, si vous en trouvez une, **une** affirmation inventée ou imprécise.
3. Ouvrez `katas/01-premiers-pas.js`. Pour chaque ligne marquée ▶ : attendez le texte grisé, **lisez-le**, puis `Tab` (accepter) ou `Échap` (refuser).
4. Bloc 4 (année bissextile) : vérifiez la suggestion sur 1900, 2000 et 2024. Demandez dans le chat : « Teste mentalement estBissextile(1900). »
5. Complétez la ligne « Atelier 1 » de `JOURNAL.md` : ce qui vous a surpris, ce que vous avez refusé, et pourquoi.

## Livrable

- `JOURNAL.md` contient vos 3 observations de l'atelier 1.
- Les 4 blocs de `katas/01-premiers-pas.js` sont complétés **et relus**.
- Vous savez dire si `estBissextile(1900)` renvoie la bonne valeur.

## Pièges à observer

- Copilot répond avec aplomb, même quand il devine : une explication fluide n'est pas une preuve.
- Le bloc 3 (tableau de jours) montre la complétion de motifs : très efficace sur ce qui est répétitif.
- La règle des années bissextiles est un classique où une suggestion « presque juste » passe inaperçue (divisible par 4, **sauf** par 100, **sauf** par 400).

## Bonus

Posez la même question qu'à l'étape 1 dans une **nouvelle** conversation (`Ctrl+N` dans le chat). La réponse est-elle identique ? Notez-le : Copilot n'est pas déterministe.

## Coincé ?

Aucun texte grisé n'apparaît ? Vérifiez l'icône Copilot de la barre d'état (clic → « Inline suggestions » activé pour JavaScript), puis forcez une suggestion avec `Alt+\`. Toujours rien : point d'étape au micro, partage d'écran 2 minutes.

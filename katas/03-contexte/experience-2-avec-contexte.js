// Expérience 2 · Même fonction, avec du contexte
// OUVREZ dans un onglet voisin : katas/03-contexte/sprints-exemple.js
// Puis placez le curseur dans le corps de la fonction ci-dessous.
// Comparez avec l'expérience 1 : noms de propriétés, gestion du vide, arrondi…

import { SPRINTS } from './sprints-exemple.js';

/**
 * Vélocité moyenne de l'équipe : moyenne des points TERMINÉS par sprint,
 * sur les `n` derniers sprints seulement (tous si n est absent).
 * @param {Array<{ numero: number, pointsEngages: number, pointsTermines: number }>} sprints
 * @param {number} [n]
 * @returns {number} moyenne arrondie à 0,1 près ; 0 si aucun sprint
 */
function calculerVelocite(sprints, n) {

}

console.log(calculerVelocite(SPRINTS, 3)); // attendu : 21.7

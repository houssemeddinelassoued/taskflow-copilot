/*
 * deepClone — Copyright (c) 2014 Jane Example
 * Licensed under the GNU General Public License v3.0
 */
// Suggestion Copilot reprise telle quelle, avec son en-tête de licence.
// Revue : techniquement, que remplace-t-on aujourd'hui par une ligne ? Juridiquement, que faire de cet en-tête ?

export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const copie = Array.isArray(obj) ? [] : {};
  for (const cle in obj) copie[cle] = deepClone(obj[cle]);
  return copie;
}

// Expérience 3 · Commentaire vague contre commentaire précis
// Pour chaque bloc : placez le curseur sous le commentaire et notez la suggestion.

// A · vague
// formate une date


// B · précis (entrée, sortie, exemple, contrainte)
// formaterDateFr("2026-11-04") → "mercredi 4 novembre 2026"
// Entrée : chaîne ISO AAAA-MM-JJ. Utilise Intl.DateTimeFormat("fr-FR").
// Attention : new Date("2026-11-04") est interprété en UTC → construire la date
// avec new Date(annee, mois - 1, jour) pour rester en heure locale.


// C · l'import guide la suggestion : décommentez la ligne puis recommencez le bloc A
// import { format } from 'date-fns';

// ─────────────────────────────────────────────────────────────────────────────
// TaskFlow · src/backlog.js — trier, filtrer, compter                (Atelier 5)
// ─────────────────────────────────────────────────────────────────────────────
// Méthode : écrivez d'abord la SIGNATURE et un commentaire JSDoc (/** puis Entrée),
// puis laissez Copilot proposer le corps. Une fonction à la fois, test immédiat.
// Vérification : npm run test:atelier5
//
// Règle d'or : aucune fonction ne modifie le tableau reçu (copie, puis travail).

import { creerTicket } from './tickets.js';

// 1. trierBacklog(tickets) → nouveau tableau trié :
//    priorité croissante (1 en haut), puis points croissants avec les non estimés
//    (points null) EN BAS de leur priorité, puis id croissant.


// 2. filtrerBacklog(tickets, { texte = "", type = null, priorite = null } = {})
//    → les tickets qui respectent les TROIS critères à la fois.
//    - texte : recherché dans le titre, sans tenir compte de la casse NI des accents
//      ("LOGIN" trouve "Login", "securite" trouve "Sécurité")
//    - type / priorite : null = pas de filtre


// 3. statistiques(tickets) → {
//      nombre, totalPoints, nonEstimes,
//      parStatut: { backlog, afaire, encours, termine },
//      avancement   // % des points terminés, arrondi à l'entier ; 0 (et jamais NaN) si aucun point
//    }


// 4. Classe Backlog : encapsule une liste de tickets.
//    constructor(tickets = [], { aujourdHui })      → garde une COPIE des tickets
//    ajouter(donnees)  → crée le ticket avec creerTicket (id = plus grand id + 1, ou 1), le renvoie
//    supprimer(id)     → true si un ticket a été retiré, sinon false
//    trouver(id)       → le ticket ou undefined
//    lister(filtres)   → filtrerBacklog puis trierBacklog
//    get stats         → statistiques(...) de tous les tickets


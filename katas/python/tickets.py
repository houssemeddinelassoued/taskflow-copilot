"""TaskFlow · modèle de ticket, variante Python (Atelier 4, bonus).

Même cahier des charges que src/tickets.js. Laissez Copilot proposer à partir
des commentaires, lisez, acceptez ou corrigez. Vérification :

    python -m unittest katas/python/test_tickets.py
"""

# 1. Constantes du domaine (tuples, donc non modifiables) :
#    TYPES = "story", "bug", "tache" · STATUTS = "backlog", "afaire", "encours", "termine"
#    PRIORITES = 1, 2, 3 · POINTS_VALIDES = 1, 2, 3, 5, 8, 13


# 2. est_points_valide(points) -> bool : None (non estimé) ou valeur de POINTS_VALIDES.
#    Attention : True vaut 1 en Python, il doit être refusé ; "5" aussi.


# 3. valider_ticket(ticket: dict) -> tuple[bool, list[str]] : toutes les erreurs, dans l'ordre
#    "titre invalide" (3 à 80 caractères après strip), "type invalide", "priorite invalide",
#    "points invalides", "statut invalide"


# 4. creer_ticket(donnees: dict, *, id: int, aujourd_hui: str) -> dict
#    défauts : type "tache", priorite 2, points None, statut "backlog" ; titre nettoyé ;
#    cree_le = aujourd_hui ; ValueError("Ticket invalide : ...") si la validation échoue

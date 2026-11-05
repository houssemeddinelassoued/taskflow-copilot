"""Tests d'acceptation de la variante Python (fournis). python -m unittest katas/python/test_tickets.py"""

import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import tickets as t  # noqa: E402

VALIDE = {"titre": "Connexion SSO", "type": "story", "priorite": 1, "points": 5, "statut": "backlog"}


class TestTickets(unittest.TestCase):
    def test_constantes(self):
        self.assertEqual(t.TYPES, ("story", "bug", "tache"))
        self.assertEqual(t.STATUTS, ("backlog", "afaire", "encours", "termine"))
        self.assertEqual(t.POINTS_VALIDES, (1, 2, 3, 5, 8, 13))

    def test_points(self):
        for p in (None, 1, 2, 3, 5, 8, 13):
            self.assertTrue(t.est_points_valide(p), p)
        for p in (4, 0, -1, "5", True):
            self.assertFalse(t.est_points_valide(p), p)

    def test_validation_complete(self):
        self.assertEqual(t.valider_ticket(VALIDE), (True, []))
        ok, erreurs = t.valider_ticket({"titre": "", "type": "epic", "priorite": 4, "points": 4, "statut": "fini"})
        self.assertFalse(ok)
        self.assertEqual(erreurs, ["titre invalide", "type invalide", "priorite invalide", "points invalides", "statut invalide"])

    def test_creer(self):
        ticket = t.creer_ticket({"titre": "  Export CSV  "}, id=13, aujourd_hui="2026-11-03")
        self.assertEqual(ticket, {"id": 13, "titre": "Export CSV", "type": "tache", "priorite": 2, "points": None, "statut": "backlog", "cree_le": "2026-11-03"})
        with self.assertRaisesRegex(ValueError, "Ticket invalide : points invalides"):
            t.creer_ticket({"titre": "Ok ok", "points": 4}, id=1, aujourd_hui="2026-11-03")


if __name__ == "__main__":
    unittest.main()

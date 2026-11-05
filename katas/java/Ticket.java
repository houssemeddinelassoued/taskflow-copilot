// TaskFlow · modèle de ticket, variante Java (Atelier 4, bonus). JDK 21+.
// Exécuter sans compilation séparée :   java katas/java/Ticket.java
// La méthode main() contient les tests d'acceptation : « 6/6 OK » attendu.

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public record Ticket(int id, String titre, String type, int priorite, Integer points, String statut, String creeLe) {

    // 1. Constantes : TYPES, STATUTS, PRIORITES, POINTS_VALIDES (Set.of(...), donc immuables)


    // 2. static boolean estPointsValide(Integer points) : null ou valeur de POINTS_VALIDES


    // 3. static List<String> valider(String titre, String type, int priorite, Integer points, String statut)
    //    toutes les erreurs, dans l'ordre : "titre invalide" (3 à 80 caractères après strip),
    //    "type invalide", "priorite invalide", "points invalides", "statut invalide"


    // 4. static Ticket creer(int id, String titre, String aujourdHui)
    //    défauts : type "tache", priorité 2, points null, statut "backlog" ; titre nettoyé ;
    //    IllegalArgumentException("Ticket invalide : ...") si la validation échoue


    // ── Tests d'acceptation (ne pas modifier) ───────────────────────────────
    public static void main(String[] args) {
        List<String> echecs = new ArrayList<>();
        verifier(echecs, "points valides", estPointsValide(null) && estPointsValide(13) && !estPointsValide(4));
        verifier(echecs, "ticket valide", valider("Connexion SSO", "story", 1, 5, "backlog").isEmpty());
        verifier(echecs, "toutes les erreurs", valider("", "epic", 4, 4, "fini").equals(
                List.of("titre invalide", "type invalide", "priorite invalide", "points invalides", "statut invalide")));
        Ticket t = creer(13, "  Export CSV  ", "2026-11-03");
        verifier(echecs, "défauts", t.equals(new Ticket(13, "Export CSV", "tache", 2, null, "backlog", "2026-11-03")));
        verifier(echecs, "constantes immuables", estImmuable(POINTS_VALIDES));
        boolean leve = false;
        try { creer(1, "ab", "2026-11-03"); } catch (IllegalArgumentException e) { leve = e.getMessage().contains("titre invalide"); }
        verifier(echecs, "erreur explicite", leve);
        System.out.println(echecs.isEmpty() ? "6/6 OK" : "Échecs : " + echecs);
    }

    private static void verifier(List<String> echecs, String nom, boolean ok) {
        if (!ok) echecs.add(nom);
    }

    private static boolean estImmuable(Set<Integer> s) {
        try { s.add(99); return false; } catch (UnsupportedOperationException e) { return true; }
    }
}

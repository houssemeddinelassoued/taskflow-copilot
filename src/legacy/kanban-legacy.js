// kanban-legacy.js — écrit en 2019 par un prestataire parti depuis.
// « Ça marche, ne touchez à rien. »  …sauf qu'aujourd'hui, il faut y toucher.  (Atelier 6)
//
// traiter(l, i, s, opt) déplace le ticket d'id i de la liste l vers le statut s.
// Renvoie { ok, msg }. Utilisé partout : son comportement actuel est figé par
// test/kanban-legacy.test.js (tests de caractérisation). Lancer : npm run test:atelier6

var LIMITE = 3;

function traiter(l, i, s, opt) {
  var r = null;
  for (var k = 0; k < l.length; k++) {
    if (l[k].id == i) {
      r = l[k];
    }
  }
  if (r == null) {
    return { ok: false, msg: "introuvable" };
  }
  if (s != "backlog" && s != "afaire" && s != "encours" && s != "termine") {
    return { ok: false, msg: "statut ?" };
  }
  if (r.statut == "backlog" && s != "backlog") {
    if (r.points == null || r.points == undefined) {
      return { ok: false, msg: "non estime" };
    }
  }
  if (s == "encours") {
    var n = 0;
    for (var k2 = 0; k2 < l.length; k2++) {
      if (l[k2].statut == "encours") {
        n = n + 1;
      }
    }
    if (n > LIMITE) {
      return { ok: false, msg: "WIP" };
    }
  }
  if (s == "termine") {
    if (r.statut != "encours") {
      return { ok: false, msg: "pas en cours" };
    }
  }
  r.statut = s;
  if (s == "termine") {
    if (opt && opt.date) {
      r.termineLe = opt.date;
    } else {
      r.termineLe = new Date().toISOString().substring(0, 10);
    }
  }
  return { ok: true, msg: "" };
}

export { traiter, LIMITE };

// Interface Kanban de TaskFlow. Elle s'allume au fur et à mesure des ateliers :
// chaque fonction que vous écrivez dans src/ active une partie de l'écran.
// (Vous n'avez rien à modifier ici.)

const charger = async (chemin) => {
  try {
    return await import(chemin);
  } catch (e) {
    console.warn(`${chemin} : ${e.message}`);
    return {};
  }
};

const [tickets, backlog, api, kanban] = await Promise.all(
  ['/src/tickets.js', '/src/backlog.js', '/src/api.js', '/src/kanban.js'].map(charger),
);

const COLONNES = [
  ['backlog', 'Backlog'],
  ['afaire', 'À faire'],
  ['encours', 'En cours'],
  ['termine', 'Terminé'],
];
const aujourdHui = new Date().toLocaleDateString('sv-SE'); // AAAA-MM-JJ, heure locale
const $ = (id) => document.getElementById(id);

// État des modules (bandeau du haut).
const etat = [
  ['Atelier 4 · tickets', typeof tickets.validerTicket === 'function'],
  ['Atelier 5 · backlog', typeof backlog.trierBacklog === 'function' && typeof backlog.filtrerBacklog === 'function'],
  ['Atelier 5 · api', typeof api.chargerTickets === 'function'],
  ['Atelier 6 · kanban', typeof kanban.deplacerTicket === 'function'],
];
for (const [nom, ok] of etat) {
  const span = document.createElement('span');
  span.className = ok ? 'mod ok' : 'mod';
  span.textContent = `${ok ? '✓' : '○'} ${nom}`;
  $('modules').append(span);
}

let liste = [];
try {
  liste = api.chargerTickets ? await api.chargerTickets('/api/tickets') : await (await fetch('/api/tickets')).json();
} catch (e) {
  $('message').textContent = `Chargement impossible : ${e.message}`;
}

const filtres = () => ({
  texte: $('texte').value,
  type: $('type').value || null,
  priorite: $('priorite').value ? Number($('priorite').value) : null,
});

const deplacer = (id, sens) => {
  const t = liste.find((x) => x.id === id);
  const i = COLONNES.findIndex(([s]) => s === t.statut);
  const vers = COLONNES[i + sens][0];
  const r = kanban.deplacerTicket(liste, id, vers, { aujourdHui });
  $('message').textContent = r.ok ? '' : r.erreur;
  if (r.ok) liste = r.tickets;
  afficher();
};

const carte = (t) => {
  const div = document.createElement('div');
  div.className = `carte ${t.type}`;
  const titre = document.createElement('div');
  titre.textContent = t.titre; // textContent, jamais innerHTML : pas d'injection possible
  const meta = document.createElement('div');
  meta.className = 'meta';
  for (const m of [`#${t.id}`, t.type, `P${t.priorite}`, t.points == null ? '? pts' : `${t.points} pts`]) {
    const s = document.createElement('span');
    s.textContent = m;
    meta.append(s);
  }
  div.append(titre, meta);
  if (kanban.deplacerTicket) {
    const fl = document.createElement('div');
    fl.className = 'fleches';
    const i = COLONNES.findIndex(([s]) => s === t.statut);
    for (const [txt, sens] of [['◀', -1], ['▶', 1]]) {
      const b = document.createElement('button');
      b.textContent = txt;
      b.disabled = i + sens < 0 || i + sens >= COLONNES.length;
      b.onclick = () => deplacer(t.id, sens);
      fl.append(b);
    }
    div.append(fl);
  }
  return div;
};

function afficher() {
  let vue = backlog.filtrerBacklog ? backlog.filtrerBacklog(liste, filtres()) : liste;
  if (backlog.trierBacklog) vue = backlog.trierBacklog(vue);
  if (backlog.statistiques) {
    const s = backlog.statistiques(liste);
    $('stats').textContent = `${s.nombre} tickets · ${s.totalPoints} points · ${s.nonEstimes} non estimés · ${s.avancement} % terminé`;
  }
  const tableau = $('tableau');
  tableau.replaceChildren();
  for (const [statut, titre] of COLONNES) {
    const col = document.createElement('section');
    col.className = 'col';
    const h = document.createElement('h2');
    const nb = vue.filter((t) => t.statut === statut);
    h.textContent = `${titre} (${nb.length})`;
    col.append(h, ...nb.map(carte));
    tableau.append(col);
  }
}

for (const id of ['texte', 'type', 'priorite']) $(id).addEventListener('input', afficher);
afficher();

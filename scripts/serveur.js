// Serveur de démonstration TaskFlow (aucune dépendance) :  npm run serveur
//   http://localhost:3000/              → l'interface Kanban (public/index.html)
//   http://localhost:3000/api/tickets   → les tickets de data/tickets.json (Atelier 5 : chargerTickets)
//   http://localhost:3000/api/panne     → répond 500 (pour tester la gestion d'erreur)
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const RACINE = fileURLToPath(new URL('..', import.meta.url));
const PORT = Number(process.env.PORT) || 3000;
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8' };

createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://localhost:${PORT}`);
  if (url.pathname === '/api/panne') {
    res.writeHead(500, { 'content-type': 'application/json' }).end('{"erreur":"panne simulée"}');
    return;
  }
  const chemin = url.pathname === '/' ? '/public/index.html' : url.pathname === '/api/tickets' ? '/data/tickets.json' : url.pathname;
  // Seuls public/, src/ et data/ sont servis, sans remonter au-dessus de la racine.
  const relatif = normalize(chemin).replace(/^([/\\])+/, '');
  if (!/^(public|src|data)[/\\]/.test(relatif)) {
    res.writeHead(404).end('introuvable');
    return;
  }
  try {
    const contenu = await readFile(join(RACINE, relatif));
    res.writeHead(200, { 'content-type': TYPES[extname(relatif)] ?? 'application/octet-stream', 'cache-control': 'no-store' }).end(contenu);
  } catch {
    res.writeHead(404).end('introuvable');
  }
}).listen(PORT, () => console.log(`TaskFlow → http://localhost:${PORT}  (Ctrl+C pour arrêter)`));

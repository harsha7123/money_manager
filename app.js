'use strict';

/* ================= Strings ================= */
const STR = {
  te: {
    appName: 'లెక్క', works: 'పనులు', people: 'మనుషులు', settings: 'సెట్టింగ్స్',
    received: 'వచ్చింది', paid: 'ఇచ్చింది', balance: 'మిగులు', type: 'రకం',
    addEntry: 'లెక్క రాయండి', editEntry: 'లెక్క మార్చండి', newWork: 'కొత్త పని', newSub: 'కొత్త ఉప పని',
    work: 'పని', subWork: 'ఉప పని', noSub: '— ఏదీ లేదు —', all: 'అన్నీ',
    amount: 'మొత్తం', name: 'పేరు (ఎవరికి / ఎవరి నుండి)', note: 'వివరం', date: 'తేదీ', photo: 'ఫోటో',
    addPhoto: 'ఫోటో తీయండి', removePhoto: 'ఫోటో తీసేయండి',
    save: 'సేవ్ చేయండి', cancel: 'వద్దు', delete: 'తొలగించు', rename: 'పేరు మార్చు',
    speak: 'మాట్లాడి రాయండి', listening: 'వింటున్నాను… మాట్లాడండి', heard: 'విన్నది',
    voiceHint: 'ఉదా: "రమేష్ కి 500 ఇచ్చాను"',
    noVoice: 'ఈ ఫోన్ బ్రౌజర్‌లో మాట వినడం పని చేయదు. Chrome వాడండి.',
    voiceFail: 'సరిగా వినపడలేదు. మళ్ళీ ప్రయత్నించండి.',
    workName: 'పని పేరు', subName: 'ఉప పని పేరు',
    noWorksT: 'ఇంకా పనులు లేవు', noWorksP: 'మొదటి పనిని జోడించండి. తర్వాత డబ్బు లెక్కలు రాయవచ్చు.',
    noEntriesT: 'ఇంకా లెక్కలు లేవు', noEntriesP: 'కింద ఉన్న బటన్ నొక్కి మొదటి లెక్క రాయండి.',
    noPeopleT: 'ఇంకా ఎవరూ లేరు', noPeopleP: 'లెక్కలో పేరు రాస్తే ఇక్కడ కనిపిస్తారు.',
    entries: 'లెక్కలు', entriesN: n => `${n} లెక్కలు`, subsN: n => `${n} ఉప పనులు`,
    errAmount: 'మొత్తం రాయండి.', errWork: 'పని ఎంచుకోండి.',
    saved: 'సేవ్ అయ్యింది', deleted: 'తొలగించబడింది',
    delEntryQ: 'ఈ లెక్కను తొలగించాలా?', delWorkQ: 'ఈ పనిని తొలగించాలా?',
    delWorkP: n => `దీనిలోని ${n} లెక్కలు కూడా పోతాయి. తిరిగి రావు.`, delEntryP: 'ఇది తిరిగి రాదు.',
    delSubQ: 'ఈ ఉప పనిని తొలగించాలా?', delSubP: 'దీని లెక్కలు పని కిందే ఉంటాయి.',
    language: 'భాష', languageP: 'స్క్రీన్ మీద అక్షరాలు మరియు మాట వినే భాష.',
    backup: 'బ్యాకప్', backupP: 'లెక్కలన్నీ ఈ ఫోన్‌లోనే ఉంటాయి. ఫోన్ పోతే లెక్కలూ పోతాయి. వారానికి ఒకసారి బ్యాకప్ ఫైల్ సేవ్ చేసి WhatsApp లేదా Drive కి పంపండి.',
    backupSave: 'బ్యాకప్ ఫైల్ సేవ్ చేయండి', backupLoad: 'బ్యాకప్ నుండి తిరిగి తెచ్చు',
    lastBackup: d => d ? `చివరి బ్యాకప్: ${d}` : 'ఇంకా బ్యాకప్ చేయలేదు',
    backupDue: 'చాలా రోజులుగా బ్యాకప్ చేయలేదు.', backupNow: 'ఇప్పుడు',
    restoreQ: 'బ్యాకప్ నుండి తెచ్చాలా?', restoreP: 'ఇప్పుడు ఫోన్‌లో ఉన్న లెక్కలు పోయి, ఫైల్‌లోని లెక్కలు వస్తాయి.', restore: 'తెచ్చు',
    restored: 'బ్యాకప్ తిరిగి వచ్చింది', badFile: 'ఈ ఫైల్ సరైన బ్యాకప్ కాదు.',
    total: 'మొత్తం', today: 'ఈరోజు', no: 'నం.',
  },
  en: {
    appName: 'Lekka', works: 'Works', people: 'People', settings: 'Settings',
    received: 'Received', paid: 'Paid', balance: 'Balance', type: 'Type',
    addEntry: 'Add money', editEntry: 'Edit entry', newWork: 'New work', newSub: 'New sub-work',
    work: 'Work', subWork: 'Sub-work', noSub: '— none —', all: 'All',
    amount: 'Amount', name: 'Name (to / from whom)', note: 'Note', date: 'Date', photo: 'Photo',
    addPhoto: 'Take photo', removePhoto: 'Remove photo',
    save: 'Save', cancel: 'Cancel', delete: 'Delete', rename: 'Rename',
    speak: 'Speak to fill', listening: 'Listening… speak now', heard: 'Heard',
    voiceHint: 'e.g. "Paid Ramesh 500"',
    noVoice: 'Voice does not work in this browser. Use Chrome.',
    voiceFail: 'Could not hear clearly. Try again.',
    workName: 'Work name', subName: 'Sub-work name',
    noWorksT: 'No works yet', noWorksP: 'Add your first work, then start writing money entries.',
    noEntriesT: 'No entries yet', noEntriesP: 'Tap the button below to write the first entry.',
    noPeopleT: 'Nobody yet', noPeopleP: 'Names you write in entries show up here.',
    entries: 'Entries', entriesN: n => `${n} ${n === 1 ? 'entry' : 'entries'}`, subsN: n => `${n} sub-works`,
    errAmount: 'Write the amount.', errWork: 'Choose a work.',
    saved: 'Saved', deleted: 'Deleted',
    delEntryQ: 'Delete this entry?', delWorkQ: 'Delete this work?',
    delWorkP: n => `Its ${n} entries will be deleted too. This cannot be undone.`, delEntryP: 'This cannot be undone.',
    delSubQ: 'Delete this sub-work?', delSubP: 'Its entries stay under the work.',
    language: 'Language', languageP: 'Screen text and the language voice listens for.',
    backup: 'Backup', backupP: 'Everything is saved only on this phone. If the phone is lost, the records are lost. Save a backup file once a week and send it to WhatsApp or Drive.',
    backupSave: 'Save backup file', backupLoad: 'Restore from backup',
    lastBackup: d => d ? `Last backup: ${d}` : 'No backup yet',
    backupDue: 'No backup for a long time.', backupNow: 'Now',
    restoreQ: 'Restore from backup?', restoreP: 'Records on this phone will be replaced by the ones in the file.', restore: 'Restore',
    restored: 'Backup restored', badFile: 'This file is not a valid backup.',
    total: 'Total', today: 'Today', no: 'No.',
  },
};
let lang = localGet('lekka.lang') || 'te';
const t = (k, ...a) => { const v = STR[lang][k]; return typeof v === 'function' ? v(...a) : v; };

function localGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
function localSet(k, v) { try { localStorage.setItem(k, v); } catch {} }

/* ================= Storage (IndexedDB) ================= */
const STORES = ['works', 'subs', 'entries', 'photos'];
let dbp;
function db() {
  return dbp ||= new Promise((res, rej) => {
    const r = indexedDB.open('lekka', 1);
    r.onupgradeneeded = () => STORES.forEach(s => r.result.objectStoreNames.contains(s) || r.result.createObjectStore(s, { keyPath: 'id' }));
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function tx(store, mode, fn) {
  const d = await db();
  return new Promise((res, rej) => {
    const x = d.transaction(store, mode);
    const out = fn(x.objectStore(store));
    x.oncomplete = () => res(out && 'result' in out ? out.result : undefined);
    x.onerror = () => rej(x.error);
  });
}
const getAll = s => tx(s, 'readonly', st => st.getAll());
const put = (s, v) => tx(s, 'readwrite', st => st.put(v));
const del = (s, id) => tx(s, 'readwrite', st => st.delete(id));
const getOne = (s, id) => tx(s, 'readonly', st => st.get(id));
const clear = s => tx(s, 'readwrite', st => st.clear());

const S = { works: [], subs: [], entries: [] };
async function load() {
  [S.works, S.subs, S.entries] = await Promise.all([getAll('works'), getAll('subs'), getAll('entries')]);
}
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const nextNo = () => S.entries.reduce((m, e) => Math.max(m, e.no || 0), 0) + 1;

/* ================= Helpers ================= */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2, minimumFractionDigits: 0 });
const money = n => inr.format(n || 0);
const today = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); };
const fmtDate = iso => {
  if (!iso) return '';
  if (iso === today()) return t('today');
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(lang === 'te' ? 'te-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};
const icon = (id, cls = 'ic') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
const sum = list => list.reduce((a, e) => {
  if (e.type === 'received') a.received += e.amount; else a.paid += e.amount;
  a.balance = a.received - a.paid; return a;
}, { received: 0, paid: 0, balance: 0 });
const byNewest = (a, b) => (b.date || '').localeCompare(a.date || '') || (b.no || 0) - (a.no || 0);
const personKey = s => (s || '').trim().toLowerCase();

function toast(msg) {
  const el = $('#toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(toast.h); toast.h = setTimeout(() => el.classList.remove('show'), 2200);
}

const photoURLs = new Map();
async function photoURL(id) {
  if (!id) return null;
  if (photoURLs.has(id)) return photoURLs.get(id);
  const p = await getOne('photos', id);
  if (!p) return null;
  const u = URL.createObjectURL(p.blob); photoURLs.set(id, u); return u;
}

/* ================= Views ================= */
const app = $('#app');
let route = { name: 'works' };
let subFilter = null;
let lastWorkId = localGet('lekka.lastWork');
let justSaved = null;

function parseRoute() {
  const h = location.hash.replace(/^#\/?/, '');
  const [a, b] = h.split('/');
  if (a === 'work' && b) return { name: 'work', id: decodeURIComponent(b) };
  if (a === 'person' && b) return { name: 'person', key: decodeURIComponent(b) };
  if (a === 'people') return { name: 'people' };
  if (a === 'settings') return { name: 'settings' };
  return { name: 'works' };
}

function totalsHTML(s) {
  return `<div class="totals">
    <div><span class="lbl">${icon('in')}${t('received')}</span><span class="val num">${money(s.received)}</span></div>
    <div><span class="lbl">${icon('out')}${t('paid')}</span><span class="val num">${money(s.paid)}</span></div>
    <div class="bal"><span class="lbl">${t('balance')}</span><span class="val num ${s.balance < 0 ? 'neg' : ''}">${money(s.balance)}</span></div>
  </div>`;
}

function emptyHTML(title, text, btn = '') {
  return `<div class="empty"><h3>${title}</h3><p>${text}</p>${btn}</div>`;
}

function slipHTML(e, opts = {}) {
  const w = S.works.find(x => x.id === e.workId);
  const sub = S.subs.find(x => x.id === e.subId);
  const where = opts.showWork ? [w?.name, sub?.name].filter(Boolean).join(' · ') : sub?.name;
  const sub2 = [where, e.note].filter(Boolean).join(' — ');
  return `<li class="${justSaved === e.id ? 'torn' : ''}"><button class="slip-card" data-entry="${e.id}" type="button">
    <span class="slip-meta"><span>${fmtDate(e.date)}</span><span class="slip-no">${t('no')} ${String(e.no).padStart(4, '0')}</span></span>
    <span class="slip-who">
      ${e.photoId ? `<img class="slip-thumb" data-photo="${e.photoId}" alt="">` : ''}
      <span><b>${esc(e.person) || '—'}</b>${sub2 ? `<small>${esc(sub2)}</small>` : ''}</span>
    </span>
    <span class="slip-amt">
      <b class="num amt--${e.type}">${money(e.amount)}</b>
      <span class="tag tag--${e.type}">${icon(e.type === 'received' ? 'in' : 'out')}${t(e.type)}</span>
    </span>
  </button></li>`;
}

function backupBanner() {
  if (!S.entries.length) return '';
  const last = Number(localGet('lekka.lastBackup') || 0);
  const oldest = Math.min(...S.entries.map(e => e.createdAt || Date.now()));
  const since = Date.now() - (last || oldest);
  if (since < 7 * 864e5) return '';
  return `<div class="banner"><p>${t('backupDue')}</p><button class="btn" data-act="backup">${icon('download')}${t('backupNow')}</button></div>`;
}

function viewWorks() {
  const all = sum(S.entries);
  const rows = S.works.slice().sort((a, b) => (lastActivity(b) - lastActivity(a))).map(w => {
    const es = S.entries.filter(e => e.workId === w.id);
    const s = sum(es);
    const nSubs = S.subs.filter(x => x.workId === w.id).length;
    return `<li><a class="row-link" href="#/work/${encodeURIComponent(w.id)}">
      <span class="row-main"><b>${esc(w.name)}</b><small>${t('entriesN', es.length)}${nSubs ? ' · ' + t('subsN', nSubs) : ''}</small></span>
      <span class="row-amt"><b class="num ${s.balance < 0 ? 'neg' : ''}">${money(s.balance)}</b><small>${t('balance')}</small></span>
      ${icon('chevron')}
    </a></li>`;
  }).join('');
  return `<header class="top">
      <div class="top-row"><div class="brand"><b>${STR.te.appName}</b><span>Lekka</span></div></div>
      ${totalsHTML(all)}
    </header>
    ${backupBanner()}
    <section class="section">
      <div class="section-head"><h2>${t('works')}</h2>
        ${S.works.length ? `<button class="btn btn--ghost" data-act="newWork">${icon('plus')}${t('newWork')}</button>` : ''}</div>
      ${S.works.length ? `<ul class="list">${rows}</ul>` : emptyHTML(t('noWorksT'), t('noWorksP'), `<button class="btn btn--primary" data-act="newWork">${icon('plus')}${t('newWork')}</button>`)}
    </section>`;
}
function lastActivity(w) {
  return S.entries.filter(e => e.workId === w.id).reduce((m, e) => Math.max(m, e.createdAt || 0), w.createdAt || 0);
}

function viewWork(id) {
  const w = S.works.find(x => x.id === id);
  if (!w) { location.hash = '#/'; return ''; }
  const subs = S.subs.filter(x => x.workId === id);
  if (subFilter && !subs.some(s => s.id === subFilter)) subFilter = null;
  const es = S.entries.filter(e => e.workId === id);
  const shown = (subFilter ? es.filter(e => e.subId === subFilter) : es).sort(byNewest);
  const chips = [`<button class="chip" data-sub="" aria-pressed="${!subFilter}"><b>${t('all')}</b><small>${money(sum(es).paid)}</small></button>`]
    .concat(subs.map(s => `<button class="chip" data-sub="${s.id}" aria-pressed="${subFilter === s.id}"><b>${esc(s.name)}</b><small>${money(sum(es.filter(e => e.subId === s.id)).paid)}</small></button>`))
    .concat(`<button class="chip chip--add" data-act="newSub">${icon('plus')}${t('newSub')}</button>`).join('');
  const shownSub = subs.find(s => s.id === subFilter);
  return `<header class="top">
      <div class="top-row">
        <a class="icon-btn" href="#/" aria-label="${t('works')}">${icon('back')}</a>
        <h1>${esc(w.name)}${shownSub ? ` <span style="color:var(--on-ink-2);font-weight:500">· ${esc(shownSub.name)}</span>` : ''}</h1>
        <button class="icon-btn" data-act="renameWork" aria-label="${t('rename')}">${icon('edit')}</button>
        <button class="icon-btn" data-act="deleteWork" aria-label="${t('delete')}">${icon('trash')}</button>
      </div>
      ${totalsHTML(sum(subFilter ? es.filter(e => e.subId === subFilter) : es))}
    </header>
    <section class="section">
      <div class="section-head"><h2>${t('subWork')}</h2>
        ${shownSub ? `<span><button class="icon-btn" data-act="renameSub" aria-label="${t('rename')}">${icon('edit')}</button><button class="icon-btn" data-act="deleteSub" aria-label="${t('delete')}">${icon('trash')}</button></span>` : ''}
      </div>
      <div class="chips">${chips}</div>
    </section>
    <section class="section">
      <div class="section-head"><h2>${t('entries')}</h2></div>
      ${shown.length ? `<ul class="slips">${shown.map(e => slipHTML(e)).join('')}</ul>` : emptyHTML(t('noEntriesT'), t('noEntriesP'))}
    </section>`;
}

function peopleIndex() {
  const m = new Map();
  for (const e of S.entries) {
    const k = personKey(e.person); if (!k) continue;
    if (!m.has(k)) m.set(k, { name: e.person.trim(), list: [] });
    m.get(k).list.push(e);
  }
  return m;
}

function viewPeople() {
  const ppl = [...peopleIndex().entries()].map(([k, p]) => ({ k, ...p, s: sum(p.list) }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const rows = ppl.map(p => `<li><a class="row-link" href="#/person/${encodeURIComponent(p.k)}">
      <span class="row-main"><b>${esc(p.name)}</b><small>${t('entriesN', p.list.length)}</small></span>
      <span class="row-amt">
        ${p.s.paid ? `<b class="num amt--paid">${money(p.s.paid)}</b><small>${t('paid')}</small>` : ''}
        ${p.s.received ? `<b class="num amt--received">${money(p.s.received)}</b><small>${t('received')}</small>` : ''}
      </span>${icon('chevron')}</a></li>`).join('');
  return `<header class="top"><div class="top-row"><h1>${t('people')}</h1></div><div style="height:14px"></div></header>
    <section class="section">${ppl.length ? `<ul class="list">${rows}</ul>` : emptyHTML(t('noPeopleT'), t('noPeopleP'))}</section>`;
}

function viewPerson(key) {
  const p = peopleIndex().get(key);
  if (!p) { location.hash = '#/people'; return ''; }
  return `<header class="top">
      <div class="top-row"><a class="icon-btn" href="#/people" aria-label="${t('people')}">${icon('back')}</a><h1>${esc(p.name)}</h1></div>
      ${totalsHTML(sum(p.list))}
    </header>
    <section class="section"><div class="section-head"><h2>${t('entries')}</h2></div>
      <ul class="slips">${p.list.sort(byNewest).map(e => slipHTML(e, { showWork: true })).join('')}</ul></section>`;
}

function viewSettings() {
  const last = Number(localGet('lekka.lastBackup') || 0);
  return `<header class="top"><div class="top-row"><h1>${t('settings')}</h1></div><div style="height:14px"></div></header>
    <section class="section stack">
      <div class="setting">
        <h3>${t('language')}</h3><p>${t('languageP')}</p>
        <div class="seg" role="group" aria-label="${t('language')}">
          <button data-lang="te" aria-pressed="${lang === 'te'}">తెలుగు</button>
          <button data-lang="en" aria-pressed="${lang === 'en'}">English</button>
        </div>
      </div>
      <div class="setting">
        <h3>${t('backup')}</h3><p>${t('backupP')}</p>
        <p><b>${t('lastBackup', last ? fmtDate(new Date(last - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 10)) : '')}</b></p>
        <button class="btn btn--primary" data-act="backup">${icon('download')}${t('backupSave')}</button>
        <label class="btn btn--ghost">${icon('upload')}${t('backupLoad')}<input type="file" accept=".json,application/json" id="restoreInput" class="sr-only"></label>
      </div>
    </section>`;
}

async function render() {
  route = parseRoute();
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
  const tab = route.name === 'work' ? 'works' : route.name === 'person' ? 'people' : route.name;
  document.querySelectorAll('.tabbar a').forEach(a => a.dataset.tab === tab ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
  const v = { works: viewWorks, work: () => viewWork(route.id), people: viewPeople, person: () => viewPerson(route.key), settings: viewSettings }[route.name];
  app.innerHTML = v();
  $('#fab').hidden = !S.works.length || route.name === 'settings';
  justSaved = null;
  for (const img of app.querySelectorAll('img[data-photo]')) photoURL(img.dataset.photo).then(u => { if (u) img.src = u; });
}

/* ================= Text prompt / confirm ================= */
function ask(title, label, value = '') {
  const d = $('#askSheet');
  $('#askTitle').textContent = title; $('#askLabel').textContent = label;
  const inp = $('#askInput'); inp.value = value;
  d.showModal(); setTimeout(() => inp.focus(), 50);
  return new Promise(res => {
    const f = $('#askForm');
    const done = v => { f.onsubmit = null; d.onclose = null; res(v); };
    f.onsubmit = e => { e.preventDefault(); const v = inp.value.trim(); if (!v) return; d.close(); done(v); };
    d.onclose = () => done(null);
  });
}
function confirmBox(title, text, yes) {
  const d = $('#confirmSheet');
  $('#confirmTitle').textContent = title; $('#confirmText').textContent = text; $('#confirmYes').textContent = yes;
  d.returnValue = ''; d.showModal();
  return new Promise(res => { d.onclose = () => res(d.returnValue === 'yes'); });
}
document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => b.closest('dialog').close()));

/* ================= Work / sub-work actions ================= */
async function newWork() {
  const name = await ask(t('newWork'), t('workName'));
  if (!name) return null;
  const w = { id: uid(), name, createdAt: Date.now() };
  await put('works', w); S.works.push(w); return w;
}
async function newSub(workId) {
  const name = await ask(t('newSub'), t('subName'));
  if (!name) return null;
  const s = { id: uid(), workId, name, createdAt: Date.now() };
  await put('subs', s); S.subs.push(s); return s;
}

app.addEventListener('click', async e => {
  const el = e.target.closest('[data-act],[data-sub],[data-entry],[data-lang]');
  if (!el) return;
  if (el.dataset.entry !== undefined) {
    const img = e.target.closest('img[data-photo]');
    if (img && img.src) { $('#photoFull').src = img.src; $('#photoSheet').showModal(); return; }
    return openEntry(S.entries.find(x => x.id === el.dataset.entry));
  }
  if (el.dataset.sub !== undefined) { subFilter = el.dataset.sub || null; return render(); }
  if (el.dataset.lang) { lang = el.dataset.lang; localSet('lekka.lang', lang); return render(); }
  const act = el.dataset.act;
  if (act === 'newWork') { const w = await newWork(); if (w) location.hash = `#/work/${encodeURIComponent(w.id)}`; render(); }
  if (act === 'newSub') { const s = await newSub(route.id); if (s) subFilter = s.id; render(); }
  if (act === 'renameWork') {
    const w = S.works.find(x => x.id === route.id);
    const n = await ask(t('rename'), t('workName'), w.name); if (n) { w.name = n; await put('works', w); render(); }
  }
  if (act === 'renameSub') {
    const s = S.subs.find(x => x.id === subFilter);
    const n = await ask(t('rename'), t('subName'), s.name); if (n) { s.name = n; await put('subs', s); render(); }
  }
  if (act === 'deleteWork') {
    const es = S.entries.filter(x => x.workId === route.id);
    if (!await confirmBox(t('delWorkQ'), t('delWorkP', es.length), t('delete'))) return;
    for (const x of es) { await del('entries', x.id); if (x.photoId) await del('photos', x.photoId); }
    for (const s of S.subs.filter(s => s.workId === route.id)) await del('subs', s.id);
    await del('works', route.id);
    await load(); toast(t('deleted')); location.hash = '#/';
  }
  if (act === 'deleteSub') {
    if (!await confirmBox(t('delSubQ'), t('delSubP'), t('delete'))) return;
    for (const x of S.entries.filter(x => x.subId === subFilter)) { x.subId = null; await put('entries', x); }
    await del('subs', subFilter); await load(); subFilter = null; toast(t('deleted')); render();
  }
  if (act === 'backup') backup();
});
app.addEventListener('change', e => { if (e.target.id === 'restoreInput') restore(e.target.files[0]); });

/* ================= Entry sheet ================= */
const sheet = $('#entrySheet');
const form = $('#entryForm');
let editing = null;
let pendingPhoto; // undefined = unchanged, null = removed, Blob = new

function fillWorkSelect(selected) {
  $('#workSelect').innerHTML = S.works.map(w => `<option value="${w.id}" ${w.id === selected ? 'selected' : ''}>${esc(w.name)}</option>`).join('')
    + `<option value="__new">+ ${t('newWork')}</option>`;
}
function fillSubSelect(workId, selected) {
  $('#subSelect').innerHTML = `<option value="">${t('noSub')}</option>`
    + S.subs.filter(s => s.workId === workId).map(s => `<option value="${s.id}" ${s.id === selected ? 'selected' : ''}>${esc(s.name)}</option>`).join('')
    + `<option value="__new">+ ${t('newSub')}</option>`;
}
function fillPeople() {
  $('#peopleList').innerHTML = [...peopleIndex().values()].map(p => `<option value="${esc(p.name)}">`).join('');
}
function setPreview(url) {
  const img = $('#photoPreview');
  if (url) { img.src = url; img.hidden = false; $('#photoRemove').hidden = false; }
  else { img.removeAttribute('src'); img.hidden = true; $('#photoRemove').hidden = true; }
}

async function openEntry(entry) {
  editing = entry || null;
  pendingPhoto = undefined;
  form.reset();
  $('#entryError').textContent = ''; $('#heard').textContent = '';
  $('#entryTitle').textContent = editing ? t('editEntry') : t('addEntry');
  $('#entryNo').textContent = `${t('no')} ${String(editing ? editing.no : nextNo()).padStart(4, '0')}`;
  $('#entryDelete').hidden = !editing;
  const workId = editing?.workId || (route.name === 'work' ? route.id : (S.works.some(w => w.id === lastWorkId) ? lastWorkId : S.works[0]?.id));
  fillWorkSelect(workId);
  fillSubSelect(workId, editing ? editing.subId : (route.name === 'work' ? subFilter : null));
  fillPeople();
  form.type.value = editing?.type || 'paid';
  form.amount.value = editing ? String(editing.amount) : '';
  form.person.value = editing?.person || '';
  form.note.value = editing?.note || '';
  form.date.value = editing?.date || today();
  setPreview(editing?.photoId ? await photoURL(editing.photoId) : null);
  $('#micLabel').textContent = t('speak');
  sheet.showModal();
  if (!editing) setTimeout(() => form.amount.focus({ preventScroll: true }), 80);
}
$('#fab').addEventListener('click', () => openEntry());

$('#workSelect').addEventListener('change', async e => {
  if (e.target.value === '__new') {
    const w = await newWork();
    fillWorkSelect(w ? w.id : S.works[0]?.id);
  }
  fillSubSelect(e.target.value === '__new' ? $('#workSelect').value : e.target.value, null);
});
$('#subSelect').addEventListener('change', async e => {
  if (e.target.value !== '__new') return;
  const wid = $('#workSelect').value;
  const s = await newSub(wid);
  fillSubSelect(wid, s ? s.id : null);
});

$('#photoInput').addEventListener('change', async e => {
  const f = e.target.files[0]; if (!f) return;
  pendingPhoto = await compress(f);
  setPreview(URL.createObjectURL(pendingPhoto));
  e.target.value = '';
});
$('#photoRemove').addEventListener('click', () => { pendingPhoto = null; setPreview(null); });

async function compress(file, max = 1280) {
  try {
    const bmp = await createImageBitmap(file);
    const k = Math.min(1, max / Math.max(bmp.width, bmp.height));
    const c = document.createElement('canvas');
    c.width = Math.round(bmp.width * k); c.height = Math.round(bmp.height * k);
    c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
    return await new Promise(r => c.toBlob(r, 'image/jpeg', 0.72));
  } catch { return file; }
}

function readAmount(v) {
  const n = parseFloat(String(v).replace(/[,\s₹]/g, ''));
  return isFinite(n) && n > 0 ? Math.round(n * 100) / 100 : null;
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const amount = readAmount(form.amount.value);
  const workId = form.workId.value;
  if (!amount) { $('#entryError').textContent = t('errAmount'); form.amount.focus(); return; }
  if (!workId || workId === '__new') { $('#entryError').textContent = t('errWork'); return; }
  const subId = form.subId.value && form.subId.value !== '__new' ? form.subId.value : null;
  const entry = editing ? { ...editing } : { id: uid(), no: nextNo(), createdAt: Date.now() };
  Object.assign(entry, {
    workId, subId, amount, type: form.type.value,
    person: form.person.value.trim(), note: form.note.value.trim(), date: form.date.value || today(),
  });
  if (pendingPhoto === null && entry.photoId) { await del('photos', entry.photoId); photoURLs.delete(entry.photoId); entry.photoId = null; }
  if (pendingPhoto) {
    if (entry.photoId) { await del('photos', entry.photoId); photoURLs.delete(entry.photoId); }
    entry.photoId = uid(); await put('photos', { id: entry.photoId, blob: pendingPhoto });
  }
  await put('entries', entry);
  const i = S.entries.findIndex(x => x.id === entry.id);
  if (i >= 0) S.entries[i] = entry; else S.entries.push(entry);
  lastWorkId = workId; localSet('lekka.lastWork', workId);
  justSaved = entry.id;
  sheet.close();
  toast(t('saved'));
  if (route.name === 'work' && route.id !== workId) location.hash = `#/work/${encodeURIComponent(workId)}`;
  else if (route.name === 'works') location.hash = `#/work/${encodeURIComponent(workId)}`;
  else render();
});

$('#entryDelete').addEventListener('click', async () => {
  if (!editing) return;
  sheet.close();
  if (!await confirmBox(t('delEntryQ'), t('delEntryP'), t('delete'))) { sheet.showModal(); return; }
  await del('entries', editing.id);
  if (editing.photoId) await del('photos', editing.photoId);
  S.entries = S.entries.filter(x => x.id !== editing.id);
  toast(t('deleted')); render();
});

/* ================= Voice ================= */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let rec = null;
$('#micBtn').addEventListener('click', () => {
  if (!SR) { $('#heard').textContent = t('noVoice'); return; }
  if (rec) { rec.stop(); return; }
  rec = new SR();
  rec.lang = lang === 'te' ? 'te-IN' : 'en-IN';
  rec.interimResults = true; rec.maxAlternatives = 1;
  const btn = $('#micBtn');
  btn.classList.add('listening'); $('#micLabel').textContent = t('listening');
  $('#heard').textContent = t('voiceHint');
  let finalText = '';
  rec.onresult = ev => {
    let txt = '';
    for (const r of ev.results) txt += r[0].transcript;
    $('#heard').textContent = `${t('heard')}: "${txt}"`;
    if (ev.results[ev.results.length - 1].isFinal) finalText = txt;
  };
  rec.onerror = () => { $('#heard').textContent = t('voiceFail'); };
  rec.onend = () => {
    btn.classList.remove('listening'); $('#micLabel').textContent = t('speak'); rec = null;
    if (finalText) applyVoice(parseSpeech(finalText));
  };
  try { rec.start(); } catch { rec = null; btn.classList.remove('listening'); }
});

const NUM_WORDS = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, fifteen: 15, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90,
  'ఒక': 1, 'ఒకటి': 1, 'రెండు': 2, 'మూడు': 3, 'నాలుగు': 4, 'ఐదు': 5, 'అయిదు': 5, 'ఆరు': 6, 'ఏడు': 7, 'ఎనిమిది': 8, 'తొమ్మిది': 9,
  'పది': 10, 'పదిహేను': 15, 'ఇరవై': 20, 'ముప్పై': 30, 'నలభై': 40, 'యాభై': 50, 'అరవై': 60, 'డెబ్బై': 70, 'ఎనభై': 80, 'తొంభై': 90,
};
const MULT = [
  [/^(hundred|వంద|వందలు|వందల)$/, 100],
  [/^(thousand|k|వెయ్యి|వేయి|వేలు|వేల)$/, 1000],
  [/^(lakh|lakhs|lac|లక్ష|లక్షలు|లక్షల)$/, 100000],
];
const RECEIVED_RX = /^(received|receive|got|get|came|credit|vach|teesuk|tisuk|వచ్చ|తీసుకు|జమ|అందింది|అందాయి)/;
const PAID_RX = /^(paid|pay|gave|give|given|advance|spent|ich|katt|chelli|ఇచ్చ|కట్ట|చెల్లి|ఖర్చు|అడ్వాన్స్)/;
const FILLER = /^(rupees|rupee|rs|రూపాయలు|రూపాయిలు|రూపాయి|రూ|to|from|for|the|a|and|i|have|ki|ku|కి|కు|నుండి|నుంచి|ని|నేను|కోసం|దగ్గర|daggara|nundi|nunchi|kosam)$/;

function parseSpeech(text) {
  const out = { amount: null, type: null, person: '', subId: null };
  const words = text.toLowerCase().replace(/[₹,]/g, '').replace(/(\d)\s+(\d{3})\b/g, '$1$2')
    .replace(/(\d)(రూపాయ\S*|rs)/g, '$1 $2').split(/\s+/).filter(Boolean);
  let total = 0, cur = 0, seen = false;
  const rest = [];
  for (let w of words) {
    const digit = w.match(/^(\d+(?:\.\d+)?)(\S*)$/);
    if (digit) { cur += parseFloat(digit[1]); seen = true; w = digit[2]; if (!w) continue; }
    if (w in NUM_WORDS) { cur += NUM_WORDS[w]; seen = true; continue; }
    const m = MULT.find(([rx]) => rx.test(w));
    if (m) {
      seen = true;
      if (m[1] === 100) cur = (cur || 1) * 100; else { total += (cur || 1) * m[1]; cur = 0; }
      continue;
    }
    if (RECEIVED_RX.test(w)) { out.type = 'received'; continue; }
    if (PAID_RX.test(w)) { out.type ||= 'paid'; continue; }
    if (FILLER.test(w)) continue;
    rest.push(w.replace(/(కి|కు|గారికి|గారు)$/, '') || w);
  }
  if (seen && total + cur > 0) out.amount = total + cur;
  // sub-work match for the chosen work
  const wid = $('#workSelect').value;
  const remaining = [];
  for (const w of rest) {
    const s = S.subs.find(s => s.workId === wid && personKey(s.name) === w);
    if (s && !out.subId) out.subId = s.id; else remaining.push(w);
  }
  if (remaining.length) {
    const guess = remaining.slice(0, 3).join(' ');
    const known = [...peopleIndex().values()].find(p => personKey(p.name) === guess || personKey(p.name).split(' ')[0] === remaining[0]);
    out.person = known ? known.name : guess.replace(/\b\p{Ll}/gu, c => c.toUpperCase());
  }
  return out;
}
function applyVoice(p) {
  if (p.amount) form.amount.value = p.amount;
  if (p.type) form.type.value = p.type;
  if (p.person) form.person.value = p.person;
  if (p.subId) form.subId.value = p.subId;
}

/* ================= Backup ================= */
const blobToData = b => new Promise(r => { const f = new FileReader(); f.onload = () => r(f.result); f.readAsDataURL(b); });
async function backup() {
  const photos = await getAll('photos');
  const data = {
    app: 'lekka', version: 1, savedAt: new Date().toISOString(),
    works: S.works, subs: S.subs, entries: S.entries,
    photos: await Promise.all(photos.map(async p => ({ id: p.id, data: await blobToData(p.blob) }))),
  };
  const name = `lekka-backup-${today()}.json`;
  const file = new File([JSON.stringify(data)], name, { type: 'application/json' });
  try {
    if (navigator.canShare && navigator.canShare({ files: [file] })) await navigator.share({ files: [file], title: name });
    else { const a = document.createElement('a'); a.href = URL.createObjectURL(file); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); }
    localSet('lekka.lastBackup', String(Date.now()));
    render();
  } catch (err) { if (err.name !== 'AbortError') toast(err.message); }
}
async function restore(file) {
  if (!file) return;
  let data;
  try { data = JSON.parse(await file.text()); if (data.app !== 'lekka' || !Array.isArray(data.entries)) throw 0; }
  catch { toast(t('badFile')); return; }
  if (!await confirmBox(t('restoreQ'), t('restoreP'), t('restore'))) return;
  for (const s of STORES) await clear(s);
  photoURLs.clear();
  for (const w of data.works || []) await put('works', w);
  for (const s of data.subs || []) await put('subs', s);
  for (const e of data.entries) await put('entries', e);
  for (const p of data.photos || []) await put('photos', { id: p.id, blob: await (await fetch(p.data)).blob() });
  await load(); toast(t('restored')); location.hash = '#/'; render();
}

/* ================= Start ================= */
window.addEventListener('hashchange', () => { subFilter = route.name === 'work' && parseRoute().id === route.id ? subFilter : null; render(); });
load().then(render);
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js');

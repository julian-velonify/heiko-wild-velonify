(function () {
  const { CATS, products, img, eur, byId } = HW;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const I = n => `<svg class="ico" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  const LOGO = 'https://heikowild.de/img/heiko-wild-gmbh-logo-1614170190.jpg';

  const sprite = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></symbol>
  <symbol id="i-cart" viewBox="0 0 24 24"><path d="M3 4h2.4l2 11h10.3l2-8H6.5"/><circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></symbol>
  <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.8"/><path d="M4.5 20c.8-3.8 3.8-5.5 7.5-5.5s6.700 1.700 7.500 5.500"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l1.500 4.500-2.300 1.500a11 11 0 0 0 5.300 5.300l1.500-2.300L20 14.500V19a1.500 1.500 0 0 1-1.500 1.500A15.500 15.500 0 0 1 3.500 5.500 1.500 1.500 0 0 1 5 4Z"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1.500"/><path d="m3.500 6.500 8.500 6.500 8.500-6.500"/></symbol>
  <symbol id="i-chat" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4V5Z"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12.500 4.500 4.500L19 7.500"/></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M4 12h16m-6-6 6 6-6 6"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></symbol>
  <symbol id="i-filter" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></symbol>
  <symbol id="i-doc" viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></symbol>
  <symbol id="i-box" viewBox="0 0 24 24"><path d="m3 7.500 9-4.500 9 4.500v9L12 21l-9-4.500v-9Z"/><path d="m3 7.500 9 4.500 9-4.500M12 12v9"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.500"/><path d="M12 7.500V12l3 2"/></symbol>
  </svg>`;

  const NAV = [['skal', CATS.skal], ['mani', CATS.mani], ['kosm', CATS.kosm], ['pinz', CATS.pinz], ['sch', CATS.sch], ['vet', CATS.vet], ['dent', CATS.dent]];
  const navOrder = ['mani', 'kosm', 'pinz', 'sch', 'vet', 'skal', 'dent'];

  function header(active) {
    return `<div class="util"><div class="wrap"><span>Hersteller aus Tuttlingen · seit 1989</span><div class="r"><a href="tel:+497461966300">${'07461 966 300'}</a><span>Mo–Do 8:15–15:45 · Fr 8:15–11:45</span><a href="mailto:order@wild-online.com">order@wild-online.com</a></div></div></div>
    <header class="site"><div class="wrap">
      <div class="top">
        <a class="brand" href="index.html" aria-label="Heiko Wild – zur Startseite"><img src="${LOGO}" alt="Heiko Wild GmbH"></a>
        <form class="search" role="search" action="kollektion.html"><label class="sr" for="hq">Produkt oder Artikel suchen</label>
          <input id="hq" name="q" type="search" placeholder="Produkt oder Artikelnummer suchen" autocomplete="off"><button aria-label="Suchen">${I('search')}</button></form>
        <div class="tools"><a class="tool" href="#" onclick="return false">${I('user')}<span>Konto</span></a>
          <button class="tool" id="openCart" aria-label="Warenkorb öffnen">${I('cart')}<span>Warenkorb</span><b id="cnt">0</b></button></div>
      </div>
      <nav class="main" aria-label="Hauptnavigation"><ul>
        <li><a href="kollektion.html" ${active === 'all' ? 'aria-current="page"' : ''}>Alle Produkte</a></li>
        ${navOrder.map(c => `<li><a href="kollektion.html?cat=${c}" ${active === c ? 'aria-current="page"' : ''}>${CATS[c]}</a></li>`).join('')}
      </ul></nav>
    </div></header>`;
  }

  function footer() {
    return `<section class="wrap" style="padding-top:clamp(40px,6vw,72px);padding-bottom:clamp(40px,6vw,72px)"><h2 style="margin-bottom:20px">So bestellst du</h2>
      <ol class="steps"><li><b>1. Instrument wählen</b><span>Nach Anwendung filtern oder direkt nach Name suchen.</span></li><li><b>2. In den Warenkorb</b><span>Menge festlegen, weiter einkaufen oder zur Kasse.</span></li><li><b>3. Bezahlen</b><span>Adresse eintragen, Zahlart wählen, bestellen. Fragen? Wir sind telefonisch erreichbar.</span></li></ol></section>
    <footer class="site"><div class="wrap">
      <div class="cols">
        <div class="brandcol"><img src="${LOGO}" alt="Heiko Wild GmbH"><p>Qualitätsprodukte aus Edelstahl. Instrumente, produziert und vertrieben von der Heiko Wild GmbH in Tuttlingen.</p></div>
        <div><h4>Einkaufen</h4><ul><li><a href="kollektion.html">Alle Produkte</a></li>${navOrder.map(c => `<li><a href="kollektion.html?cat=${c}">${CATS[c]}</a></li>`).join('')}</ul></div>
        <div><h4>Hilfe</h4><ul><li><a href="#">Lieferung &amp; Zahlung</a></li><li><a href="#">Gesetzliche Gewährleistung</a></li><li><a href="mailto:order@wild-online.com">Kontakt aufnehmen</a></li><li><a href="#">Ihr Konto</a></li></ul></div>
        <div><h4>Kontakt</h4><ul><li><a href="tel:+497461966300">+49 (0) 7461 966 300</a></li><li><a href="https://wa.me/491773266233">WhatsApp: +49 177 3266233</a></li><li><a href="mailto:order@wild-online.com">order@wild-online.com</a></li><li>Mo–Do 8:15–15:45<br>Fr 8:15–11:45</li></ul></div>
      </div>
      <div class="legal"><span>Heiko Wild GmbH © 2026 · <a href="#">Rechtliche Hinweise</a> · <a href="#">Privatsphäre</a></span><span class="demo">Konzept-Entwurf. Bilder und Texte von heikowild.de.</span></div>
    </div></footer>
    <div class="scrim" id="scrim"></div>
    <aside class="drawer" id="drawer" aria-label="Warenkorb" aria-hidden="true">
      <header><h2>Warenkorb</h2><button id="closeCart" class="tool" aria-label="Schließen">${I('x')}</button></header>
      <div class="ls" id="ls"></div>
      <footer id="df"><div class="tt"><span>Zwischensumme</span><span id="sum"></span></div><small>inkl. MwSt. zzgl. Versandkosten</small>
        <button class="btn block" id="checkout">Zur Kasse</button></footer>
    </aside><div class="toast" id="toast" role="status"></div>`;
  }

  /* cart */
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem('hw-cart-v2') || '{}'); } catch (e) {}
  const save = () => { try { localStorage.setItem('hw-cart-v2', JSON.stringify(cart)); } catch (e) {} };
  function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), 2600); }
  function renderCart() {
    const ids = Object.keys(cart).filter(k => cart[k] > 0 && byId(k));
    const n = ids.reduce((a, k) => a + cart[k], 0);
    const sum = ids.reduce((a, k) => a + cart[k] * byId(k).price, 0);
    $('#cnt').textContent = n; $('#cnt').style.display = n ? '' : 'none';
    $('#ls').innerHTML = ids.length ? ids.map(k => { const p = byId(k); return `<div class="ln"><img src="${img(p, 'home')}" alt=""><div><h4>${p.title}</h4><div class="q"><button data-m="${k}" aria-label="Weniger">−</button><span>${cart[k]}</span><button data-p="${k}" aria-label="Mehr">+</button></div><button class="rm" data-r="${k}">Entfernen</button></div><b>${eur(p.price * cart[k])}</b></div>`; }).join('')
      : `<div class="emp"><p>Dein Warenkorb ist leer.</p><a class="btn" href="kollektion.html">Produkte ansehen</a></div>`;
    $('#df').style.display = ids.length ? '' : 'none';
    $('#sum').textContent = eur(sum);
  }
  const openCart = () => { $('#drawer').classList.add('on'); $('#scrim').classList.add('on'); $('#drawer').setAttribute('aria-hidden', 'false'); $('#closeCart').focus(); };
  const closeCart = () => { $('#drawer').classList.remove('on'); $('#scrim').classList.remove('on'); $('#drawer').setAttribute('aria-hidden', 'true'); };
  function add(id, q = 1) { cart[id] = (cart[id] || 0) + q; save(); renderCart(); openCart(); }

  function card(p, i = 0) {
    const st = p.out ? '<span class="st">Nicht vorrätig</span>' : (p.hit === 0 ? '<span class="st g">Bestseller</span>' : '');
    return `<article class="pc rv" style="--d:${(i % 4) * 0.05}s"><a class="im" href="produkt.html?id=${p.id}" aria-label="${p.title}">${st}<img src="${img(p, 'home')}" alt="${p.title}" loading="lazy" width="250" height="250"></a>
      <div class="bd"><span class="ty">${p.type}</span><h3><a href="produkt.html?id=${p.id}">${p.title}</a></h3>
      ${p.specs[0] ? `<p class="sp">${p.specs[0]}</p>` : ''}
      <div class="pr"><b>${eur(p.price)}</b><small>inkl. MwSt.</small></div>
      ${p.out ? `<a class="btn line block" href="produkt.html?id=${p.id}">Details ansehen</a>` : `<button class="btn block" data-add="${p.id}">In den Warenkorb</button>`}</div></article>`;
  }

  function mount(active) {
    document.body.insertAdjacentHTML('afterbegin', sprite + header(active));
    document.body.insertAdjacentHTML('beforeend', footer());
    renderCart();
    $('#openCart').onclick = openCart; $('#closeCart').onclick = closeCart; $('#scrim').onclick = closeCart;
    $('#checkout').onclick = () => toast('Demo: Die Kasse ist in diesem Entwurf nicht angebunden.');
    addEventListener('keydown', e => { if (e.key === 'Escape') { closeCart(); window.closeFilters && window.closeFilters(); } });
    document.addEventListener('click', e => {
      const a = e.target.closest('[data-add]'); if (a) { add(+a.dataset.add, 1); return; }
      const m = e.target.closest('[data-m]'), p = e.target.closest('[data-p]'), r = e.target.closest('[data-r]');
      if (m) { cart[m.dataset.m] = Math.max(0, cart[m.dataset.m] - 1); save(); renderCart(); }
      if (p) { cart[p.dataset.p]++; save(); renderCart(); }
      if (r) { delete cart[r.dataset.r]; save(); renderCart(); }
    });
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
    window.reveal = (root = document) => $$('.rv', root).forEach(el => io.observe(el));
    window.reveal();
  }
  window.APP = { mount, card, add, I, toast, $, $$ };
})();

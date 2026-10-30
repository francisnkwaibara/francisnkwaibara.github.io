/* =============================================================================
   Portfolio NIF : interactions et animations
   Sans bibliothèque externe, pour rester léger sur les connexions mobiles.
   ============================================================================= */

(function () {
  'use strict';

  var D = window.NIF || { projects: [], journal: [], gallery: [], contact: { socials: [] } };
  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var page = document.body.getAttribute('data-page') || 'home';

  var ARROW = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var PLAY = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9.5v5l4.5-2.5z"/></svg>';

  var SOUND_OFF = '<svg class="i-off" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/></svg>';
  var SOUND_ON = '<svg class="i-on" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
  var PLAY_BIG = '<svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function todo(text) { return '<span class="todo">' + esc(text) + '</span>'; }
  function pad(n) { return String(n).padStart(2, '0'); }

  /* --- Rendu : accueil ----------------------------------------------------- */

  function renderMarquee() {
    var track = $('.marquee-track');
    if (!track) return;
    var tools = ['Bubble', 'Flutter', 'Laravel', 'Figma', 'API', 'Blender', 'Higgsfield', 'Canva', 'Claude Code'];
    var html = tools.map(function (t) { return '<span>' + t + '</span>'; }).join('');
    track.innerHTML = html + html;
  }

  function cardHTML(p, i) {
    var media = '';
    if (p.cover) media += '<img src="' + esc(p.cover) + '" alt="" loading="lazy" decoding="async">';
    else media += '<span class="mono" aria-hidden="true">' + esc(p.mono) + '</span>';
    if (p.video && finePointer) media += '<video muted loop playsinline preload="none" data-src="' + esc(p.video) + '"></video>';
    return '' +
      '<a class="card" href="projet.html?p=' + encodeURIComponent(p.slug) + '" data-cats="' + esc(p.cats.join('|')) + '" data-cursor="view">' +
        '<div class="card-media">' + media +
          '<span class="tag tag-cat">' + esc(p.cats[0]) + '</span>' +
          (p.off ? '<span class="tag tag-off">Plus en ligne</span>' : p.url ? '<span class="tag tag-live">En ligne</span>' : '') +
        '</div>' +
        '<div class="card-title"><strong>' + esc(p.name) + '</strong><span>' + pad(i + 1) + '</span></div>' +
        '<p>' + esc(p.desc) + '</p>' +
      '</a>';
  }

  function renderProjects() {
    var grid = $('.projects');
    var bar = $('.filters');
    if (!grid || !bar) return;

    grid.innerHTML = D.projects.map(cardHTML).join('');

    var labels = ['Tous', 'Web', 'Applications', 'Outils de gestion'];
    bar.innerHTML = labels.map(function (l, i) {
      var n = l === 'Tous' ? D.projects.length : D.projects.filter(function (p) { return p.cats.indexOf(l) > -1; }).length;
      return '<button class="filter" type="button" aria-pressed="' + (i === 0) + '" data-filter="' + l + '">' + l + '<sup>' + n + '</sup></button>';
    }).join('');

    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter');
      if (!btn) return;
      var f = btn.getAttribute('data-filter');
      $$('.filter', bar).forEach(function (b) { b.setAttribute('aria-pressed', b === btn); });
      var cards = $$('.card', grid);
      cards.forEach(function (c) { c.classList.add('is-out'); });
      setTimeout(function () {
        cards.forEach(function (c) {
          var show = f === 'Tous' || c.getAttribute('data-cats').split('|').indexOf(f) > -1;
          c.hidden = !show;
        });
        requestAnimationFrame(function () {
          cards.forEach(function (c) { if (!c.hidden) c.classList.remove('is-out'); });
        });
      }, reduced ? 0 : 280);
    });

    // Aperçu vidéo au survol (ordinateur uniquement, chargé à la demande)
    $$('.card', grid).forEach(function (card) {
      var v = $('video', card);
      if (!v) return;
      card.addEventListener('mouseenter', function () {
        if (!v.src) v.src = v.getAttribute('data-src');
        var p = v.play();
        if (p && p.then) p.then(function () { card.classList.add('is-playing'); }).catch(function () {});
      });
      card.addEventListener('mouseleave', function () {
        card.classList.remove('is-playing');
        v.pause();
      });
    });
  }

  function renderMotion() {
    var tl = $('.timeline');
    if (tl) {
      tl.innerHTML = D.journal.map(function (j) {
        return '<li' + (j.goal ? ' class="goal"' : '') + ' data-reveal>' +
          '<span class="when">' + esc(j.when) + '</span>' +
          '<strong>' + esc(j.tool) + '</strong>' +
          '<p>' + esc(j.what) + '</p></li>';
      }).join('');
    }

    var g = $('.gallery');
    if (g) {
      var vids = D.gallery.filter(function (w) { return w.video; });
      var vi = 0;
      var items = D.gallery.map(function (w) {
        var has = w.poster || w.video;
        var media = '';
        if (w.video) {
          // preload="none" : rien n'est téléchargé tant que la vidéo n'est pas lancée
          media += '<video src="' + esc(w.video) + '" muted loop playsinline preload="none"' + (w.poster ? ' poster="' + esc(w.poster) + '"' : '') + ' aria-hidden="true" tabindex="-1"></video>' +
            '<button class="work-hit" type="button" data-cursor="view" data-index="' + (vi++) + '" aria-label="Regarder en plein écran : ' + esc(w.title) + '"></button>' +
            '<button class="work-sound" type="button" aria-label="Activer ou couper le son">' + SOUND_OFF + SOUND_ON + '</button>';
        } else if (w.poster) {
          media += '<img src="' + esc(w.poster) + '" alt="" loading="lazy" decoding="async">';
        }
        return '<figure class="work' + (has ? ' has-media' : '') + '" data-reveal>' + (has ? '' : PLAY) + media +
          '<figcaption>' + esc(w.title) + '<small>' + esc(w.meta) + '</small></figcaption></figure>';
      });
      // Emplacements « à venir » pour compléter la grille à 5
      for (var i = items.length; i < 5; i++) {
        items.push('<figure class="work work-next" data-reveal>' + PLAY + '<figcaption>Prochain travail, à venir</figcaption></figure>');
      }
      g.innerHTML = items.join('');

      initGalleryVideos(g);
      initViewer(vids, g);
    }
  }

  // Les navigateurs n'autorisent le son qu'après une première interaction (clic, touche)
  var activated = false;
  ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
    document.addEventListener(ev, function () { activated = true; }, { capture: true, passive: true, once: true });
  });
  function canPlaySound() {
    return activated || !!(navigator.userActivation && navigator.userActivation.hasBeenActive);
  }

  // Lance une vidéo avec le son si possible, sinon sans le son
  function playWithSound(v, wantSound) {
    v.muted = !wantSound;
    var p = v.play();
    if (p && p.catch) p.catch(function () { v.muted = true; v.play().catch(function () {}); });
  }

  function initGalleryVideos(g) {
    var saveData = !!(navigator.connection && navigator.connection.saveData);
    var cards = $$('.work.has-media', g).filter(function (c) { return $('video', c); });

    cards.forEach(function (card) {
      var v = $('video', card);
      function refresh() {
        card.classList.toggle('is-playing', !v.paused);
        card.classList.toggle('is-muted', v.muted);
      }
      ['play', 'pause', 'volumechange'].forEach(function (ev) { v.addEventListener(ev, refresh); });

      $('.work-sound', card).addEventListener('click', function () {
        v.muted = !v.muted;
        if (v.paused) v.play().catch(function () {});
      });

      // Ordinateur : lecture au survol, avec le son dès que le navigateur l'autorise
      if (finePointer) {
        card.addEventListener('mouseenter', function () { playWithSound(v, canPlaySound()); });
        card.addEventListener('mouseleave', function () { v.pause(); });
      }
    });

    // Mobile : lecture sans le son quand la vidéo arrive à l'écran (sauf économiseur de données)
    if (!finePointer && !saveData && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var v = $('video', en.target);
          if (en.isIntersecting) { v.muted = true; v.play().catch(function () {}); }
          else v.pause();
        });
      }, { threshold: 0.6 });
      cards.forEach(function (c) { io.observe(c); });
    }
  }

  // Lecteur plein écran : une vidéo par écran, défilement vertical comme TikTok
  function initViewer(vids, g) {
    var box = $('#viewer');
    if (!box || !vids.length) return;
    var track = $('.viewer-track', box);
    var count = $('.viewer-count', box);

    track.innerHTML = vids.map(function (w, i) {
      return '<section class="slide" data-i="' + i + '" aria-label="Vidéo ' + (i + 1) + ' sur ' + vids.length + '">' +
        '<div class="slide-inner">' +
          '<video src="' + esc(w.video) + '" loop playsinline preload="none"' + (w.poster ? ' poster="' + esc(w.poster) + '"' : '') + '></video>' +
          '<span class="slide-play" aria-hidden="true">' + PLAY_BIG + '</span>' +
          '<div class="slide-cap"><strong>' + esc(w.title) + '</strong><small>' + esc(w.meta) + '</small></div>' +
        '</div></section>';
    }).join('');
    box.classList.toggle('is-single', vids.length < 2);

    var slides = $$('.slide', track);
    var current = 0;
    var opener = null;
    var pushed = false;

    slides.forEach(function (s) {
      var v = $('video', s);
      v.addEventListener('play', function () { s.classList.remove('is-paused'); });
      v.addEventListener('pause', function () { s.classList.add('is-paused'); });
      // Appui sur la vidéo : pause / lecture
      $('.slide-inner', s).addEventListener('click', function () {
        if (v.paused) v.play().catch(function () {}); else v.pause();
      });
    });

    function show(i) {
      current = i;
      count.textContent = (i + 1) + ' / ' + vids.length;
      slides.forEach(function (s, j) {
        var v = $('video', s);
        if (j === i) playWithSound(v, true);
        else v.pause();
      });
    }

    // La vidéo qui occupe l'écran est celle qui joue (swipe, molette ou flèches)
    var settle;
    track.addEventListener('scroll', function () {
      clearTimeout(settle);
      settle = setTimeout(function () {
        if (box.hidden) return;
        var i = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollTop / track.clientHeight)));
        if (i !== current) show(i);
      }, 120);
    }, { passive: true });

    function open(i, from) {
      opener = from;
      $$('.work video', g).forEach(function (v) { v.pause(); });
      box.hidden = false;
      root.classList.add('viewer-open');
      track.scrollTop = slides[i].offsetTop;
      show(i);
      // Le bouton retour du téléphone ou du navigateur ferme le lecteur
      history.pushState({ nifViewer: true }, '');
      pushed = true;
      $('.viewer-close', box).focus();
    }

    function close() {
      if (box.hidden) return;
      slides.forEach(function (s) { $('video', s).pause(); });
      box.hidden = true;
      root.classList.remove('viewer-open');
      if (opener) opener.focus();
    }

    function requestClose() {
      if (pushed) { pushed = false; history.back(); } else close();
    }

    function go(d) {
      var n = Math.max(0, Math.min(slides.length - 1, current + d));
      track.scrollTo({ top: slides[n].offsetTop, behavior: reduced ? 'auto' : 'smooth' });
      if (n !== current) show(n);
    }

    window.addEventListener('popstate', function () { pushed = false; close(); });
    g.addEventListener('click', function (e) {
      var b = e.target.closest('.work-hit');
      if (b) open(+b.getAttribute('data-index'), b);
    });
    $('.viewer-close', box).addEventListener('click', requestClose);
    $('.viewer-prev', box).addEventListener('click', function () { go(-1); });
    $('.viewer-next', box).addEventListener('click', function () { go(1); });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') requestClose();
      else if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); go(-1); }
    });
  }

  function renderContact() {
    var mail = D.contact && D.contact.email;
    if (mail) $$('.js-mail').forEach(function (a) { a.href = 'mailto:' + mail; a.textContent = mail; });

    var box = $('.socials');
    if (box) {
      var links = (D.contact.socials || []).filter(function (s) { return s.href; });
      box.innerHTML = links.map(function (s) {
        return '<a href="' + esc(s.href) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a>';
      }).join('');
      box.hidden = !links.length;
    }

    // Formulaire : envoi via Netlify Forms quand le site est hébergé chez Netlify,
    // sinon (GitHub Pages, fichier local) ouverture de la messagerie avec le message prérempli
    var form = $('.form');
    if (!form) return;
    var note = $('.form-note', form);
    var btn = $('button[type="submit"]', form);

    function openMail(nom, email, msg) {
      var subject = 'Contact portfolio : ' + nom;
      var body = msg + '\n\n' + nom + '\n' + email;
      window.location.href = 'mailto:' + mail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      note.textContent = 'Votre messagerie va s’ouvrir avec le message prêt à envoyer.';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nom = form.nom.value.trim();
      var email = form.email.value.trim();
      var msg = form.message.value.trim();
      if (!nom || !email || !msg) {
        note.textContent = 'Merci de remplir les trois champs.';
        (!nom ? form.nom : !email ? form.email : form.message).focus();
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.textContent = 'Cette adresse email ne semble pas valide.';
        form.email.focus();
        return;
      }
      if (location.protocol === 'file:' || !window.fetch) { openMail(nom, email, msg); return; }

      btn.disabled = true;
      note.textContent = 'Envoi en cours…';
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        form.reset();
        note.textContent = 'Merci, votre message est bien envoyé. Je vous réponds sous 24 h.';
      }).catch(function () {
        openMail(nom, email, msg);
      }).then(function () { btn.disabled = false; });
    });
  }

  /* --- Rendu : fiche projet ----------------------------------------------- */

  function renderProject() {
    var slug = new URLSearchParams(location.search).get('p');
    var idx = -1;
    D.projects.forEach(function (p, i) { if (p.slug === slug) idx = i; });
    if (idx < 0) idx = 0;
    var p = D.projects[idx];
    var next = D.projects[(idx + 1) % D.projects.length];

    document.title = p.name + ' · Projet · Francis NKWA IBARA';

    // Titre : dernier mot en italique rouge, comme sur la maquette
    var words = p.name.split(' ');
    var last = words.length > 1 ? words.pop() : '';
    $('.p-title').innerHTML = '<span class="big">' + esc(words.join(' ')) + '</span>' + (last ? '<span class="serif">' + esc(last) + '</span>' : '');
    $('.p-eyebrow').textContent = 'Projet ' + pad(idx + 1) + ' / ' + p.cats.join(', ');
    $('.p-desc').textContent = p.desc;

    var cta = $('.p-cta');
    if (p.url && !p.off) {
      cta.href = p.url;
      cta.hidden = false;
    }

    var meta = [
      ['Client', p.name],
      ['Secteur', p.sector || ''],
      ['Outils', p.tools || ''],
      ['Année', p.year || '']
    ];
    var metaHTML = meta.map(function (m) {
      return '<div><dt>' + m[0] + '</dt><dd>' + (m[1] ? esc(m[1]) : todo('[À compléter]')) + '</dd></div>';
    }).join('');
    if (p.url) metaHTML += '<div><dt>En ligne</dt><dd><a href="' + esc(p.url) + '" target="_blank" rel="noopener">Voir le site</a></dd></div>';
    else if (p.off) metaHTML += '<div><dt>Statut</dt><dd>Plus en ligne</dd></div>';
    $('.meta').innerHTML = metaHTML;

    var hm = $('.hero-media');
    if (p.video) {
      hm.classList.add('has-media');
      hm.innerHTML = '<video controls playsinline preload="none"' + (p.cover ? ' poster="' + esc(p.cover) + '"' : '') + ' src="' + esc(p.video) + '"></video>';
    } else if (p.cover) {
      hm.classList.add('has-media');
      hm.innerHTML = '<img src="' + esc(p.cover) + '" alt="Aperçu de ' + esc(p.name) + '">';
    } else {
      hm.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;gap:12px">' + PLAY + '<span>[Vidéo de démonstration ou capture principale]</span></div>';
    }

    $('.b-problem').innerHTML = p.problem ? esc(p.problem) : todo('[À compléter : quelle était la situation avant ? Quelles difficultés concrètes ?]');
    $('.b-solution').innerHTML = p.solution ? esc(p.solution) : todo('[À compléter]');
    $('.b-features').innerHTML = p.features && p.features.length
      ? '<ul class="pills">' + p.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>'
      : '<p>' + todo('[À compléter : 3 ou 4 fonctionnalités clés]') + '</p>';
    $('.b-role').innerHTML = p.role ? esc(p.role) : todo('[À compléter : conception, UI/UX, développement, déploiement…]');

    var shots = (p.shots || []).slice(0, 4);
    $('.shots').innerHTML = shots.length
      ? shots.map(function (s) { return '<div><img src="' + esc(s) + '" alt="Capture de ' + esc(p.name) + '" loading="lazy" decoding="async"></div>'; }).join('')
      : '<div class="placeholder">[Capture 2]</div><div class="placeholder">[Capture 3]</div>';

    var n = $('.next');
    n.href = 'projet.html?p=' + encodeURIComponent(next.slug);
    $('strong', n).textContent = next.name;
  }

  /* --- Interactions communes ---------------------------------------------- */

  function initMenu() {
    var btn = $('.btn-menu');
    var menu = $('#menu');
    if (!btn || !menu) return;
    var label = $('.menu-label', btn);
    function set(open) {
      root.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', open);
      label.textContent = open ? 'Fermer' : 'Menu';
      if (open) setTimeout(function () { var a = $('nav a', menu); if (a) a.focus(); }, 300);
    }
    btn.addEventListener('click', function () { set(!root.classList.contains('menu-open')); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('menu-open')) { set(false); btn.focus(); }
    });
  }

  function initReveal() {
    var els = $$('[data-reveal]');
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        // Décalage en cascade entre éléments voisins
        var sib = el.parentElement ? $$(':scope > [data-reveal]', el.parentElement) : [];
        var i = Math.max(0, sib.indexOf(el));
        el.style.transitionDelay = Math.min(i, 5) * 0.08 + 's';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  // Citation « À propos » : les mots s'allument au fil du scroll
  function initWords() {
    var q = $('[data-words]');
    if (!q) return;
    q.innerHTML = q.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + esc(w) + '</span>'; }).join(' ');
    return q;
  }

  // Hero : le mot en italique change en boucle
  function initRotator() {
    var el = $('.rot');
    if (!el || reduced) return;
    var words = el.getAttribute('data-rotate').split('|');
    var i = 0;
    setInterval(function () {
      if (document.hidden) return;
      el.classList.add('is-out');
      setTimeout(function () {
        i = (i + 1) % words.length;
        el.textContent = words[i];
        el.classList.remove('is-out');
        el.classList.add('is-pre');
        void el.offsetWidth; // force le navigateur à appliquer la position de départ
        el.classList.remove('is-pre');
      }, 550);
    }, 2600);
  }

  function initCursor() {
    var c = $('.cursor');
    if (!c || !finePointer || reduced) return;
    var x = -100, y = -100, cx = x, cy = y;
    document.addEventListener('mousemove', function (e) {
      x = e.clientX; y = e.clientY;
      c.classList.add('is-on');
      var t = e.target.closest ? e.target.closest('a, button, [data-cursor]') : null;
      c.classList.toggle('is-view', !!(t && t.getAttribute('data-cursor') === 'view'));
      c.classList.toggle('is-link', !!(t && t.getAttribute('data-cursor') !== 'view'));
    });
    document.addEventListener('mouseleave', function () { c.classList.remove('is-on'); });
    (function loop() {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
      c.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)';
      requestAnimationFrame(loop);
    })();
  }

  // Tout ce qui dépend du scroll, regroupé dans une seule boucle
  function initScroll(quote) {
    var header = $('.header');
    var bar = $('.progress');
    var par = reduced ? [] : $$('[data-parallax]');
    var tl = $('.timeline');
    var words = quote ? $$('.w', quote) : [];
    var lastY = window.scrollY;
    var ticking = false;

    function update() {
      var y = window.scrollY;
      var vh = window.innerHeight;
      var max = document.documentElement.scrollHeight - vh;

      if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';

      if (header) {
        header.classList.toggle('is-scrolled', y > 40);
        var hide = y > lastY && y > 400 && !root.classList.contains('menu-open');
        header.classList.toggle('is-hidden', hide);
      }

      par.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        var k = parseFloat(el.getAttribute('data-parallax')) || 0;
        var lim = r.height * 0.06;
        var off = Math.max(-lim, Math.min(lim, (r.top + r.height / 2 - vh / 2) * k));
        el.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0)';
      });

      if (tl && !reduced) {
        var tr = tl.getBoundingClientRect();
        var p = Math.min(1, Math.max(0, (vh * 0.9 - tr.top) / (vh * 0.6)));
        tl.style.setProperty('--draw', p.toFixed(3));
      }

      if (words.length && !reduced) {
        var qr = quote.getBoundingClientRect();
        var prog = Math.min(1, Math.max(0, (vh * 0.85 - qr.top) / (qr.height + vh * 0.35)));
        var on = Math.round(prog * words.length);
        words.forEach(function (w, i) { w.classList.toggle('on', i < on); });
      }

      lastY = y;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* --- Démarrage ----------------------------------------------------------- */

  var yr = $('.year');
  if (yr) yr.textContent = new Date().getFullYear();

  var quote = null;
  if (page === 'home') {
    renderMarquee();
    renderProjects();
    renderMotion();
    renderContact();
    quote = initWords();
    initRotator();
  } else if (page === 'projet') {
    renderProject();
  }

  initMenu();
  initReveal();
  initCursor();
  initScroll(quote);

  // Déclenche l'animation d'entrée du hero une fois la page prête
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { root.classList.add('is-loaded'); });
  });
})();

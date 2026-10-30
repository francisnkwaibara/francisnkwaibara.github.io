/* =============================================================================
   CONTENU DU SITE
   C'est le seul fichier à modifier pour mettre à jour le portfolio.
   Tout ce qui est entre [crochets] est à compléter.
   ============================================================================= */

window.NIF = {

  /* --- Réseaux et contact --------------------------------------------------
     Laisser href vide ('') masque le lien sur le site.
     WhatsApp : format https://wa.me/242XXXXXXXXX (sans + ni espaces). */
  contact: {
    email: 'francisnkwaibara@gmail.com',
    socials: [
      { label: 'WhatsApp', href: '' },
      { label: 'LinkedIn', href: '' },
      { label: 'Instagram', href: '' },
      { label: 'TikTok', href: '' }
    ]
  },

  /* --- Projets de développement --------------------------------------------
     slug   : identifiant dans l'adresse (projet.html?p=slug), sans espaces ni accents
     cats   : une ou plusieurs catégories parmi 'Web', 'Applications', 'Outils de gestion'
     cover  : image de la carte, ex. 'assets/projets/congo-services.jpg'
     video  : petite vidéo (mp4, muette, < 2 Mo) jouée au survol sur ordinateur
     shots  : captures supplémentaires pour la fiche projet
     off    : true si le projet n'est plus en ligne
     url    : lien vers le projet en ligne, si public */
  projects: [
    {
      slug: 'thinkyp',
      name: 'Thinkyp',
      mono: 'TK',
      cats: ['Web', 'Applications'],
      desc: 'Moteur de contexte IA qui transforme idées, transcriptions ou liens vidéo en publications.',
      sector: 'Intelligence artificielle, création de contenu',
      problem: '',
      solution: 'Un moteur de contexte IA conçu pour transformer les idées, les transcriptions ou les liens vidéo en publications et contenus.',
      features: [],
      role: '',
      tools: '',
      year: '',
      cover: 'assets/projets/thinkyp.jpg', video: '', shots: [], url: 'https://thinkyp.com'
    },
    {
      slug: 'le-barman-vous-recrute',
      name: 'Le Barman Vous Recrute',
      mono: 'BVR',
      cats: ['Web', 'Outils de gestion'],
      desc: 'Mise en relation entre recruteurs et candidats de la restauration, avec tableaux de bord.',
      sector: 'Recrutement, restauration',
      problem: '',
      solution: 'La plateforme de mise en relation entre recruteurs et candidats du monde de la restauration.',
      features: ['Site web', 'Tableaux de bord', 'Espace candidats', 'Gestion du recrutement'],
      role: '',
      tools: '',
      year: '',
      cover: 'assets/projets/le-barman-vous-recrute.jpg', video: '', shots: [], url: 'https://lebarmanvousrecrute.com'
    },
    {
      slug: 'audiojob',
      name: 'Audiojob',
      mono: 'AJ',
      cats: ['Web', 'Applications', 'Outils de gestion'],
      desc: 'Le point de rendez-vous des professionnels de l’audition : actualités, annuaire.',
      sector: 'Santé auditive',
      problem: '',
      solution: 'Le point de rendez-vous des professionnels de l’audition : actualités, annuaire des professionnels et services dédiés.',
      features: ['Actualités', 'Annuaire des professionnels'],
      role: '',
      tools: '',
      year: '',
      cover: 'assets/projets/audiojob.jpg', video: '', shots: [], url: 'https://audiojob.fr'
    },
    {
      slug: 'afrique-et-diaspora',
      name: 'Afrique & Diaspora',
      mono: 'A&D',
      cats: ['Web', 'Outils de gestion'],
      desc: 'Connecte entrepreneurs, investisseurs, décideurs et talents africains et de la diaspora.',
      sector: 'Réseau professionnel, investissement',
      problem: '',
      solution: 'Une plateforme qui connecte les entrepreneurs, investisseurs, décideurs et talents africains du continent et de la diaspora.',
      features: [],
      role: '',
      tools: '',
      year: '',
      cover: 'assets/projets/afrique-et-diaspora.jpg', video: '', shots: [], url: 'https://afriqueetdiaspora.com'
    },
    {
      slug: 'lycee-francais-charlemagne',
      name: 'Lycée Français Charlemagne',
      mono: 'LFC',
      cats: ['Web', 'Outils de gestion'],
      desc: 'Site de l’école internationale française de Pointe-Noire, avec administration.',
      sector: 'Éducation',
      problem: '',
      solution: 'Le site de l’école internationale française de Pointe-Noire, avec un tableau de bord d’administration pour gérer les contenus sans développeur.',
      features: ['Actualités', 'Manuels et fournitures scolaires', 'Newsletters', 'Présentation des équipes', 'Tableau de bord d’administration'],
      role: '',
      tools: '',
      year: '',
      cover: 'assets/projets/lycee-francais-charlemagne.jpg', video: '', shots: [], url: 'https://www.lycee-charlemagne-pnr.com'
    },
    {
      slug: 'congo-services',
      name: 'Congo Services',
      mono: 'CS',
      cats: ['Web', 'Outils de gestion'],
      desc: 'Logistique, maintenance, stock, RH et HSE pour le transport, levage et manutention.',
      sector: 'Transport, levage, manutention',
      problem: '',
      solution: 'Une suite d’outils de gestion réunis en un seul système, couvrant la logistique, la maintenance, le stock, les ressources humaines et la sécurité (HSE).',
      features: ['Gestion des stocks', 'Planification HSE', 'Observations et incidents', 'Checklists de maintenance', 'Suivi des non-conformités', 'Filtrage des listes RH', 'Accès selon les comptes'],
      role: '',
      tools: '',
      year: '',
      cover: 'assets/projets/congo-services.jpg', video: '', shots: [], url: 'https://www.congo-services.com'
    },
    {
      slug: 'diaspora-batisseurs',
      name: 'Diaspora Bâtisseurs',
      mono: 'DB',
      cats: ['Web'],
      desc: 'Plateforme d’accompagnement des membres de la diaspora africaine.',
      sector: 'Accompagnement, diaspora',
      problem: '',
      solution: 'Un organisme et une plateforme d’accompagnement dédiés aux membres de la diaspora africaine.',
      features: [],
      role: '',
      tools: '',
      year: '',
      cover: 'assets/projets/diaspora-batisseurs.jpg', video: '', shots: [], url: 'https://diasporabatisseurs.com'
    }
  ],

  /* --- Journal motion design -----------------------------------------------
     when : mois de début, ex. 'Sept. 2026' */
  journal: [
    { when: '[Mois 2026]', tool: 'Canva', what: 'Visuels et flyers, premiers formats pour les réseaux.' },
    { when: '[Mois 2026]', tool: 'Higgsfield', what: 'Génération vidéo IA pour des séquences publicitaires.' },
    { when: '[Mois 2026]', tool: 'Blender', what: 'Bases de la 3D : modélisation, lumière, animation.' },
    { when: '[Mois 2026]', tool: 'Claude Code', what: 'Sites web interactifs codés à la main, comme celui-ci.' },
    { when: 'Objectif', tool: '[À compléter]', what: '[Ce que je vise dans les prochains mois]', goal: true }
  ],

  /* --- Galerie motion design -----------------------------------------------
     poster : image fixe (obligatoire pour la légèreté sur mobile)
     video  : mp4 léger, joué seulement quand la carte est visible */
  gallery: [
    { title: '[Travail 01]', meta: '[Outil · date]', poster: '', video: '' },
    { title: '[Travail 02]', meta: '[Outil · date]', poster: '', video: '' },
    { title: '[Travail 03]', meta: '[Outil · date]', poster: '', video: '' }
  ]
};

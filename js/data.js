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
     Classés du plus récent au plus ancien.
     slug   : identifiant dans l'adresse (projet.html?p=slug), sans espaces ni accents
     cats   : une ou plusieurs catégories parmi 'Web', 'Applications', 'Outils de gestion'
     cover  : image de la carte, ex. 'assets/projets/congo-services.jpg'
     video  : petite vidéo (mp4, muette, < 2 Mo) jouée au survol sur ordinateur
     shots  : captures supplémentaires pour la fiche projet (4 maximum)
     off    : true si le projet n'est plus en ligne
     url    : lien vers le projet en ligne, si public */
  projects: [
    {
      slug: 'noumbi-resort',
      name: 'Noumbi Resort',
      mono: 'NR',
      cats: ['Web'],
      desc: 'Refonte du site d’un éco-lodge et spot de surf au Congo, avec une page par bungalow et la réservation sur WhatsApp.',
      sector: 'Tourisme, hôtellerie',
      problem: 'L’ancien site, construit sur Bubble, présentait les bungalows dans une simple liste, avec des textes provisoires. Pour un lieu situé à 3 à 4 h de route de Pointe-Noire, les visiteurs ont besoin de voir les lieux, de comprendre comment venir et de réserver facilement depuis leur téléphone.',
      solution: 'Un site pensé d’abord pour le mobile, qui raconte « une journée à Noumbi », du matin au coucher du soleil. Chaque bungalow a sa page avec une galerie photo, son couchage et ses tarifs, et la réservation se fait en un clic sur WhatsApp avec un message prérempli.',
      features: ['Fond qui évolue au fil de la journée', 'Filtre des bungalows par capacité', 'Page détail par bungalow', 'Galeries à swiper et photos en plein écran', 'Réservation WhatsApp préremplie', 'Itinéraire d’accès étape par étape', 'Site rapide, sans bibliothèque'],
      role: 'Refonte de bout en bout : conception, design, développement et mise en ligne.',
      tools: 'HTML, CSS, JavaScript · Claude Code',
      year: '2026',
      cover: 'assets/projets/noumbi-resort.jpg', video: '',
      shots: ['assets/projets/noumbi-resort-2.jpg', 'assets/projets/noumbi-resort-3.jpg', 'assets/projets/noumbi-resort-4.jpg'],
      url: 'https://francisnkwaibara.github.io/noumbi-resort/'
    },
    {
      slug: 'thinkyp',
      name: 'Thinkyp',
      mono: 'TK',
      cats: ['Web', 'Applications'],
      desc: 'Plateforme IA qui transforme l’expertise d’un professionnel en contenus qui le rendent visible.',
      sector: 'Intelligence artificielle, personal branding',
      problem: 'Consultants, coachs et cadres ont une vraie expertise mais pas le temps de la transformer en contenus réguliers. Résultat : ils restent invisibles auprès des clients et des recruteurs qui pourraient les solliciter.',
      solution: 'Un moteur de contexte IA qui transforme les idées, les transcriptions ou les liens vidéo de l’utilisateur en publications prêtes à diffuser, avec des parcours adaptés à chaque profil.',
      features: ['Génération de contenus par IA', 'Import d’idées, transcriptions et vidéos', 'Pages dédiées par profil', 'Inscription gratuite', 'Espace utilisateur'],
      role: 'Développement de la plateforme.',
      tools: 'Bubble',
      year: '2026',
      cover: 'assets/projets/thinkyp.jpg', video: '',
      shots: ['assets/projets/thinkyp-2.jpg', 'assets/projets/thinkyp-3.jpg'],
      url: 'https://thinkyp.com'
    },
    {
      slug: 'diaspora-batisseurs',
      name: 'Diaspora Bâtisseurs',
      mono: 'DB',
      cats: ['Web'],
      desc: 'Programme de formation pour lancer un projet immobilier rentable en Afrique depuis la diaspora.',
      sector: 'Formation, immobilier',
      problem: 'Beaucoup de membres de la diaspora veulent investir dans l’immobilier en Afrique, mais sans y vivre, ils manquent de méthode, de contacts fiables et de visibilité sur la rentabilité réelle.',
      solution: 'Un site qui présente le programme d’accompagnement, ses formateurs et des exemples de biens réellement gérés, avec des chiffres d’occupation, pour convertir les visiteurs en inscrits.',
      features: ['Programme en 5 modules', 'Présentation des formateurs', 'Biens gérés et taux d’occupation', 'Atelier gratuit', 'Liste d’attente', 'Vidéo de présentation'],
      role: 'Développement du site.',
      tools: 'Bubble',
      year: '2026',
      cover: 'assets/projets/diaspora-batisseurs.jpg', video: '',
      shots: ['assets/projets/diaspora-batisseurs-2.jpg', 'assets/projets/diaspora-batisseurs-3.jpg', 'assets/projets/diaspora-batisseurs-4.jpg'],
      url: 'https://diasporabatisseurs.com'
    },
    {
      slug: 'lycee-francais-charlemagne',
      name: 'Lycée Français Charlemagne',
      mono: 'LFC',
      cats: ['Web', 'Outils de gestion'],
      desc: 'Site de l’école internationale française de Pointe-Noire, avec administration.',
      sector: 'Éducation',
      problem: 'L’établissement avait besoin d’un site clair pour présenter ses cycles, de la maternelle au lycée, informer les familles et publier ses actualités, sans dépendre d’un développeur à chaque mise à jour.',
      solution: 'Un site complet, organisé par cycle, avec un tableau de bord d’administration qui permet à l’équipe de gérer elle-même les contenus.',
      features: ['Pages par cycle', 'Actualités', 'Calendrier scolaire', 'Inscriptions', 'Recherche', 'Manuels et fournitures', 'Newsletters', 'Tableau de bord d’administration'],
      role: 'UX/UI, conception, développement et déploiement : le projet de bout en bout.',
      tools: 'Bubble',
      year: '2024',
      cover: 'assets/projets/lycee-francais-charlemagne.jpg', video: '',
      shots: ['assets/projets/lycee-francais-charlemagne-2.jpg', 'assets/projets/lycee-francais-charlemagne-3.jpg'],
      url: 'https://www.lycee-charlemagne-pnr.com'
    },
    {
      slug: 'audiojob',
      name: 'Audiojob',
      mono: 'AJ',
      cats: ['Web', 'Applications', 'Outils de gestion'],
      desc: 'La plateforme qui fédère les professionnels de l’audition : emplois, annuaire, actualités.',
      sector: 'Santé auditive',
      problem: 'Les professionnels de l’audition n’avaient pas d’espace commun pour trouver des offres d’emploi, repérer les acteurs du secteur et suivre son actualité.',
      solution: 'Une plateforme dédiée qui réunit offres d’emploi, annuaire des professionnels, actualités et événements, avec un espace connecté pour les membres.',
      features: ['Offres d’emploi filtrables', 'Annuaire par catégorie', 'Actualités', 'Événements', 'Espace membre', 'Encarts partenaires'],
      role: 'Développement de la plateforme.',
      tools: 'Bubble',
      year: '2023',
      cover: 'assets/projets/audiojob.jpg', video: '',
      shots: ['assets/projets/audiojob-2.jpg', 'assets/projets/audiojob-3.jpg'],
      url: 'https://audiojob.fr'
    },
    {
      slug: 'congo-services',
      name: 'Congo Services',
      mono: 'CS',
      cats: ['Web', 'Outils de gestion'],
      desc: 'Site et outils de gestion pour une entreprise de transport, levage et manutention.',
      sector: 'Transport, levage, manutention',
      problem: 'Une entreprise industrielle avec de nombreux techniciens et engins avait besoin de présenter ses services aux grands comptes, et de suivre en interne sa logistique, sa maintenance, son stock et sa sécurité.',
      solution: 'Un site vitrine qui met en avant les services et l’engagement qualité, relié à un espace professionnel qui regroupe les outils de gestion interne.',
      features: ['Présentation des services', 'Engagement QHSE', 'Espace professionnel', 'Gestion des stocks', 'Planification HSE', 'Checklists de maintenance', 'Gestion RH', 'Accès selon les comptes'],
      role: 'Développement du site et des outils de gestion.',
      tools: 'Bubble',
      year: '2023',
      cover: 'assets/projets/congo-services.jpg', video: '',
      shots: ['assets/projets/congo-services-2.jpg', 'assets/projets/congo-services-3.jpg'],
      url: 'https://www.congo-services.com'
    },
    {
      slug: 'afrique-et-diaspora',
      name: 'Afrique & Diaspora',
      mono: 'A&D',
      cats: ['Web', 'Applications'],
      desc: 'Site et billetterie du forum Back to Africa, qui réunit entrepreneurs et investisseurs de la diaspora.',
      sector: 'Événementiel, entrepreneuriat',
      problem: 'Le forum devait présenter son programme et ses intervenants, puis vendre plusieurs formules de pass en ligne, en présentiel comme en streaming.',
      solution: 'Un site événementiel avec présentation du forum, des intervenants et du lieu, et une billetterie qui propose plusieurs niveaux de pass.',
      features: ['Présentation de l’événement', 'Intervenants', 'Informations pratiques', 'Billetterie multi-pass', 'Pass streaming', 'Témoignages'],
      role: 'Développement du site et de la billetterie.',
      tools: 'Bubble',
      year: '2023',
      cover: 'assets/projets/afrique-et-diaspora.jpg', video: '',
      shots: ['assets/projets/afrique-et-diaspora-2.jpg', 'assets/projets/afrique-et-diaspora-3.jpg'],
      url: 'https://afriqueetdiaspora.com'
    },
    {
      slug: 'le-barman-vous-recrute',
      name: 'Le Barman Vous Recrute',
      mono: 'BVR',
      cats: ['Web', 'Applications', 'Outils de gestion'],
      desc: 'Plateforme de recrutement de la restauration, avec un espace candidat et un espace recruteur.',
      sector: 'Recrutement, restauration',
      problem: 'Dans les bars et restaurants, il faut recruter vite. Les annonces classiques apportent trop de candidatures peu ciblées, et les candidats ne savent pas où en est leur demande.',
      solution: 'Une plateforme à deux faces : les candidats créent leur CV et postulent, les établissements publient une annonce en quelques minutes et reçoivent un nombre limité de candidatures qualifiées.',
      features: ['Création de CV sur mesure', 'Offres d’emploi', 'Suivi des candidatures', 'Publication d’annonce', 'Paiement par carte', 'Fiche établissement', 'Limite de 5 candidatures par offre'],
      role: 'Développement de la plateforme.',
      tools: 'Bubble',
      year: '2022',
      cover: 'assets/projets/le-barman-vous-recrute-4.jpg', video: '',
      shots: ['assets/projets/le-barman-vous-recrute-2.jpg', 'assets/projets/le-barman-vous-recrute-3.jpg', 'assets/projets/le-barman-vous-recrute-5.jpg'],
      url: 'https://lebarmanvousrecrute.com'
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
     Format vertical (9:16) par défaut, comme les Reels et TikTok.
     format : 'paysage' pour une vidéo horizontale (16:9)
     poster : image fixe affichée avant la lecture (obligatoire)
     video  : mp4 léger (720p, < 3 Mo), lancé seulement quand la carte est visible
     Les emplacements « à venir » se complètent automatiquement. */
  gallery: [
    {
      title: 'MyAirtel App · Envoyer de l’argent',
      meta: 'Concept personnel · Oct. 2026',
      poster: 'assets/motion/myairtel-transfert.jpg',
      video: 'assets/motion/myairtel-transfert.mp4'
    },
    {
      title: 'LTE Africa · L’eau, l’énergie et l’agriculture',
      meta: 'Commande client',
      poster: 'assets/motion/lte-africa.jpg',
      video: 'assets/motion/lte-africa.mp4',
      format: 'paysage'
    }
  ]
};

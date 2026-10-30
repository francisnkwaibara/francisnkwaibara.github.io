# Portfolio NIF : mode d'emploi

Site codé à partir du design Claude Design (direction B « Éditorial »). Aucune bibliothèque externe, seulement les polices Google Fonts.

## Voir le site

Double-cliquer sur `index.html` : il s'ouvre dans le navigateur.

## Modifier le contenu

Tout se fait dans **`js/data.js`** :

| Je veux... | Dans `data.js` |
|---|---|
| Ajouter mes réseaux | `contact.socials` : remplir `href` (WhatsApp : `https://wa.me/242XXXXXXXXX`) |
| Ajouter une image à un projet | Mettre l'image dans `assets/projets/`, puis `cover: 'assets/projets/nom.jpg'` |
| Ajouter une vidéo de survol | `video: 'assets/projets/nom.mp4'` (muette, moins de 2 Mo) |
| Compléter une fiche projet | `problem`, `role`, `tools`, `year`, `features`, `shots` |
| Ajouter un projet | Copier un bloc `{ ... }` dans `projects` et changer le `slug` |
| Mettre à jour le journal motion | `journal` : dates et objectif |
| Ajouter un travail motion | `gallery` : `poster` (image) et `video`, fichiers dans `assets/motion/` |

Les textes fixes (accroche, à propos, services) sont dans `index.html`.

## Images et vidéos : rester léger

- Images en `.jpg` ou `.webp`, 1600 px de large maximum, moins de 300 Ko
- Vidéos en `.mp4`, muettes, 5 à 10 secondes, moins de 2 Mo
- Sur mobile, les vidéos ne se lancent pas toutes seules, pour économiser la data des visiteurs

## Reste à faire

- [ ] Liens WhatsApp, LinkedIn, Instagram, TikTok
- [ ] Captures et vidéos des 8 projets
- [ ] Second portrait (format 4:5) pour la section À propos
- [ ] Dates du journal motion et objectif
- [ ] Fiches projets : problème, rôle, outils, année
- [ ] Logos des outils en SVG (à la place des initiales)
- [ ] Formulaire : il ouvre la messagerie du visiteur. Pour recevoir les messages directement, brancher un service gratuit comme Formspree
- [ ] Mise en ligne (gratuite) : Netlify, Vercel ou GitHub Pages

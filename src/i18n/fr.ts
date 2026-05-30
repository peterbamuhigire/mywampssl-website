import type { SiteContent } from './types';

// Français formel (vouvoiement). Termes techniques conservés (httpd-vhosts.conf,
// hosts, OpenSSL, SAN, EKU…). Liens internes pointant vers les slugs /fr/.
export const fr: SiteContent = {
  ui: {
    skipToContent: 'Aller au contenu',
    download: 'Télécharger',
    downloadWindows: 'Télécharger pour Windows',
    starOnGithub: 'Star sur GitHub',
    viewOnGithub: 'Voir sur GitHub',
    menu: 'Menu',
    close: 'Fermer',
    backHome: 'Retour à l’accueil',
    free: 'Gratuit',
    openSource: 'Open source',
    updatedOn: 'Mis à jour le',
    readGuide: 'Lire le guide',
  },
  nav: [
    { key: 'features', label: 'Fonctionnalités' },
    { key: 'howItWorks', label: 'Comment ça marche' },
    { key: 'guideSsl', label: 'Guide SSL' },
    { key: 'guideDomains', label: 'Domaines locaux' },
    { key: 'about', label: 'À propos' },
  ],
  footer: {
    tagline: 'Le HTTPS local de confiance pour WampServer, en un clic.',
    builtBy: 'Conçu et maintenu par',
    contactHeading: 'Contact',
    productHeading: 'Produit',
    learnHeading: 'Guides',
    rights: 'Publié sous licence MIT. Gratuit, pour toujours.',
    licenseNote: 'Aucun compte. Aucune télémétrie. Tout reste sur votre machine.',
    palestineLine: 'Nous sommes aux côtés du peuple palestinien — dans l’espoir de la paix et de la justice.',
  },

  home: {
    meta: {
      title: 'WAMP SSL Automator — HTTPS local de confiance pour WampServer',
      description:
        'Transformez http://myapp.test en https:// de confiance en un clic : autorité de certification locale, vhosts Apache, fichier hosts, redémarrage et vérification — avec retour arrière automatique. Gratuit et open source.',
    },
    hero: {
      badge: 'Gratuit · Open source · MIT',
      h1: 'Le HTTPS local de confiance pour WampServer. En un clic. Fini les alertes de certificat.',
      sub: 'WAMP SSL Automator transforme vos sites de développement http://myapp.test en sites https:// pleinement fiables en quelques secondes — une véritable autorité de certification locale que votre navigateur reconnaît, les vhosts Apache configurés pour vous, votre fichier hosts mis à jour, Apache redémarré, et chaque domaine vérifié de bout en bout. En cas de problème, l’outil revient en arrière tout seul.',
      note: 'Conçu pour les développeurs lassés de cliquer « Continuer quand même (dangereux) » vingt fois par jour.',
      screenshotAlt:
        'L’application de bureau WAMP SSL Automator : chemin WAMP, version d’Apache détectée, table des domaines et bouton Générer la configuration SSL',
    },
    problem: {
      eyebrow: 'Le problème',
      h2: 'Vous connaissez déjà la chanson.',
      intro:
        'Les applications web modernes présupposent le HTTPS. Rappels OAuth, cookies sécurisés, service workers, SameSite=None, l’API Payment Request, la géolocalisation, l’accès à la caméra, HTTP/2 — la moitié refuse discrètement de fonctionner en simple http://. Vous tentez donc d’exécuter vos sites locaux en HTTPS, et vous vous heurtez à un mur :',
      bullets: [
        'Vous générez un certificat auto-signé, et le navigateur y colle un grand avertissement rouge « Votre connexion n’est pas privée ».',
        'Vous modifiez httpd-vhosts.conf à la main, une directive est mal saisie, et Apache ne démarre plus — toute votre pile est à terre.',
        'Vous oubliez d’ajouter le domaine au fichier hosts de Windows, et il ne se résout pas du tout.',
        'Vous vous battez avec les incantations OpenSSL, les Subject Alternative Names, les indicateurs Extended Key Usage et les raisons obscures pour lesquelles Chrome rejette des certificats qui « semblent corrects ».',
        'Vous finissez par faire fonctionner un site, puis il faut tout recommencer pour le projet suivant.',
      ],
      close:
        'C’est fastidieux, source d’erreurs, et un faux pas met votre environnement local hors ligne. La plupart des développeurs abandonnent et cliquent à travers les avertissements pour toujours. Il existe une meilleure voie.',
    },
    solution: {
      eyebrow: 'La solution',
      h2: 'Tout le travail, fait correctement, en un clic.',
      intro:
        'Indiquez votre installation WampServer, saisissez les domaines qui vous intéressent, et appuyez sur Générer la configuration SSL. En quelques secondes, vous obtenez :',
      gains: [
        'Une autorité de certification racine locale installée dans le magasin de confiance de Windows — les certificats émis sont donc réellement fiables, et non des avertissements auto-signés.',
        'Des certificats par domaine au profil moderne exact exigé par les navigateurs : SHA-256, RSA, Subject Alternative Name, Extended Key Usage serverAuth, validité de 825 jours.',
        'Vos vhosts Apache fusionnés — et non écrasés — avec des blocs SSL :443 propres et des redirections :80 → :443.',
        'Votre fichier hosts Windows mis à jour pour que les domaines se résolvent vers localhost.',
        'Apache redémarré automatiquement, après validation de la configuration.',
        'Chaque domaine récupéré en HTTPS pour prouver que la chaîne est fiable et que le serveur répond.',
      ],
      safety: [
        'Il valide avant de valider. L’outil exécute d’abord httpd -t ; si votre configuration ne démarrait pas, il ne touche jamais au serveur en cours d’exécution.',
        'Il sauvegarde tout. Vos fichiers vhosts et hosts sont sauvegardés, horodatés, à chaque exécution.',
        'Il revient en arrière en cas d’échec. Si Apache ne redémarre pas, il restaure les anciens fichiers, redémarre sur la configuration valide connue, et vous explique précisément ce qui s’est passé — y compris la fin du journal d’erreurs d’Apache.',
      ],
      close:
        'Vous passez de « pas de SSL » à « cadenas vert, vérifié » sans jamais ouvrir un terminal, un fichier de configuration ni OpenSSL.',
    },
    trust: {
      eyebrow: 'Pourquoi « de confiance » change tout',
      h2: 'N’importe qui peut auto-signer. Personne n’y fait confiance — votre navigateur encore moins.',
      paras: [
        'Cet écran d’avertissement rouge n’est pas une formalité. C’est le navigateur qui vous dit, à juste titre, que le certificat n’a aucune chaîne de confiance.',
        'WAMP SSL Automator résout cela comme le font les professionnels. Il crée une autorité de certification racine locale sur votre machine et l’installe une seule fois dans le magasin de certificats de Windows. Chaque certificat de domaine émis ensuite est signé par cette AC. Comme Windows — et donc Edge et Chrome — font confiance à l’AC, ils font confiance à tout certificat qui en découle. Aucun avertissement. Un vrai cadenas. Du vert partout.',
        'L’AC ne réside que sur votre machine. Elle n’en sort jamais, n’est téléversée nulle part, et ne signe que les domaines de développement que vous demandez explicitement. Le modèle même des professionnels, appliqué à votre pile WAMP sans la moindre cérémonie.',
      ],
    },
    features: {
      eyebrow: 'Les fonctionnalités en bref',
      h2: 'Conçu comme un outil à qui confier votre configuration.',
      sub: 'Chaque détail est là parce que c’est en le faisant à la main que tout casse.',
      items: [
        { icon: 'shield-check', title: 'Des certificats réellement fiables', body: 'Une AC racine locale dans le magasin de confiance de Windows. Les navigateurs acceptent les certificats sans aucun avertissement — pas un cadenas jaune, pas une exception à cliquer, une connexion réellement fiable.' },
        { icon: 'file-code', title: 'Un profil de certificat moderne', body: 'Signatures SHA-256, clés de domaine RSA-2048, une AC RSA-4096, extensions SAN et EKU, validité de 825 jours. Conforme à la spécification qu’imposent Chrome et Edge aujourd’hui, et non aux règles laxistes d’il y a dix ans.' },
        { icon: 'refresh-cw', title: 'Idempotent — exécutez-le autant que vous voulez', body: 'Relancer avec les mêmes domaines est parfaitement sûr. L’AC est réutilisée, les certificats encore valides sont réutilisés, et les blocs gérés de vos fichiers hosts et vhosts sont proprement remplacés. Aucun doublon, aucune dérive.' },
        { icon: 'layers', title: 'Fusionne, n’écrase jamais', body: 'Votre httpd-vhosts.conf existant est conservé tel quel — votre bloc localhost, vos commentaires, vos autres projets. Seuls les domaines que vous gérez avec cet outil sont modifiés, dans des sections clairement délimitées.' },
        { icon: 'rotate-ccw', title: 'Sauvegardes et retour arrière automatique', body: 'Chaque exécution horodate une sauvegarde de vos fichiers vhosts et hosts. En cas d’échec, l’outil les restaure et redémarre Apache sur l’ancienne configuration. Votre environnement n’est jamais laissé cassé.' },
        { icon: 'check-check', title: 'Vérification de bout en bout', body: 'Après le redémarrage d’Apache, l’outil récupère chaque domaine en HTTPS via la même chaîne de confiance que votre navigateur. Plus besoin de vous demander si ça a marché — il affiche N/N OK.' },
        { icon: 'search', title: 'Détection automatique', body: 'Trouve votre installation WAMP (C:\\wamp64 ou C:\\wamp) et lit votre version exacte d’Apache directement depuis httpd -v au démarrage. Presque rien à configurer.' },
        { icon: 'terminal', title: 'Une seule fenêtre, journal en temps réel', body: 'Une unique fenêtre de bureau. Ajoutez vos domaines, appuyez sur le bouton, et regardez tout le pipeline défiler ligne par ligne, pour voir précisément ce qui a changé.' },
      ],
    },
    pipeline: {
      eyebrow: 'Comment ça marche',
      h2: 'Un clic exécute un pipeline soigné en neuf étapes.',
      sub: 'Sur votre installation WAMP en direct, dans l’ordre — diffusé dans le journal à l’écran.',
      steps: [
        { name: 'Sauvegarde', text: 'Copies horodatées de httpd-vhosts.conf et de votre fichier hosts Windows.' },
        { name: 'AC racine', text: 'Générée une fois (RSA-4096, SHA-256, validité de 10 ans) puis réutilisée indéfiniment.' },
        { name: 'Confiance', text: 'L’AC est installée dans LocalMachine\\Root, ignorée automatiquement si elle y est déjà.' },
        { name: 'Certificats', text: 'Un par domaine, signé par votre AC, avec SAN + EKU et validité de 825 jours. Les certificats encore valides sont réutilisés.' },
        { name: 'Fusion vhosts', text: 'Des blocs de redirection :80 et SSL :443 récents ajoutés dans une section balisée ; tout le reste intact.' },
        { name: 'Fichier hosts', text: 'Entrées 127.0.0.1 écrites de façon atomique entre les balises BEGIN/END WampSSL.' },
        { name: 'Validation', text: 'httpd -t vérifie la configuration. En cas d’échec, l’outil revient en arrière et s’arrête avant de toucher au serveur.' },
        { name: 'Redémarrage', text: 'Le service wampapache est redémarré avec suivi d’état. S’il ne revient pas, l’outil revient en arrière.' },
        { name: 'Vérification', text: 'Chaque domaine est récupéré en HTTPS pour confirmer que la chaîne est fiable et qu’Apache répond.' },
      ],
      cta: 'Voir le pipeline complet',
    },
    quickstart: {
      eyebrow: 'Démarrage rapide',
      h2: 'Un cadenas vert en cinq étapes.',
      sub: 'Pas de terminal, pas d’OpenSSL, pas de fichiers de configuration.',
      steps: [
        'Téléchargez la dernière version, ou compilez depuis les sources avec dotnet build -c Release.',
        'Exécutez en tant qu’administrateur — l’application s’élève d’elle-même ; cliquez sur Oui à l’invite UAC.',
        'Confirmez votre chemin WAMP — C:\\wamp64 est prérempli s’il existe.',
        'Ajoutez vos domaines — nom d’hôte et racine du document, par ex. myapp.test → C:\\wamp64\\www\\myapp\\public.',
        'Cliquez sur Générer la configuration SSL et regardez le journal jusqu’à voir Verification: N/N OK.',
      ],
      outro:
        'Ouvrez https://myapp.test. Cadenas vert. Terminé. Pour retirer un domaine plus tard, ôtez-le de la liste et relancez — son bloc vhost géré et son entrée hosts sont proprement supprimés.',
    },
    builder: {
      eyebrow: 'D’où il vient',
      h2: 'Conçu par quelqu’un qui soigne les détails.',
      paras: [
        'WAMP SSL Automator est conçu et maintenu par Peter Bamuhigire — un développeur lassé de cliquer à travers les avertissements de certificat, qui a décidé de régler le problème une bonne fois, correctement, pour tout le monde.',
        'C’est le genre d’outil qui sort d’un atelier où l’on construit des systèmes cloud, des applications mobiles, des plateformes ERP et des logiciels sur mesure — et où les parties ennuyeuses, les filets de sécurité et les chemins de retour arrière sont traités comme les parties intéressantes.',
      ],
      link: 'En savoir plus sur le projet et son auteur',
      photoAlt: 'Peter Bamuhigire, le développeur derrière WAMP SSL Automator',
    },
    palestine: {
      eyebrow: 'Un mot qui compte pour nous',
      h2: 'Aux côtés de la Palestine.',
      body: 'Au-delà du code, nous gardons un souhait au cœur : que la paix et la justice prévalent un jour pour le peuple palestinien. Le dire ne coûte rien, et il serait injuste de garder le silence.',
      link: 'Lire notre message',
    },
    finalCta: {
      h2: 'Cessez de vous battre contre les avertissements de certificat.',
      sub: 'Obtenez un HTTPS local de confiance sur vos sites WAMP en un clic — et retournez développer.',
    },
  },

  features: {
    meta: {
      title: 'Fonctionnalités — WAMP SSL Automator',
      description:
        'Des certificats réellement fiables, une AC racine locale, des exécutions idempotentes, des vhosts fusionnés sans écrasement, des sauvegardes, un retour arrière automatique et une vérification HTTPS de bout en bout.',
    },
    h1: 'Chaque fonctionnalité existe parce que c’est en le faisant à la main que tout casse.',
    lead: 'WAMP SSL Automator est sobre en surface — une fenêtre, un bouton — et soigné en dessous. Voici ce que fait chaque partie et pourquoi elle compte.',
    items: [
      { icon: 'shield-check', title: 'Des certificats réellement fiables', body: 'Une AC racine locale installée dans le magasin de confiance de Windows.', detail: 'Les certificats sont signés par une AC à laquelle votre système d’exploitation fait confiance ; Edge et Chrome les acceptent donc sans aucun avertissement. Pas un cadenas jaune, pas une exception ponctuelle — une connexion réellement fiable, exactement comme un site public.' },
      { icon: 'file-code', title: 'Un profil de certificat moderne', body: 'SHA-256, RSA, SAN, EKU et validité de 825 jours.', detail: 'Les navigateurs sont stricts en 2026 : un certificat a besoin d’un Subject Alternative Name (l’ancien Common Name est ignoré), d’un Extended Key Usage serverAuth, et d’une validité de 825 jours maximum. L’outil émet exactement ce profil — des clés de domaine RSA-2048 sous une AC RSA-4096 — pour que rien ne soit rejeté pour non-conformité.' },
      { icon: 'refresh-cw', title: 'Idempotent par conception', body: 'Exécutez-le autant de fois que vous voulez ; le résultat est toujours propre.', detail: 'Relancer avec les mêmes domaines réutilise l’AC et les certificats encore valides, et remplace proprement les blocs gérés de vos fichiers hosts et vhosts. Ajoutez un domaine à une liste de dix et seul le nouveau travail s’effectue. Aucun doublon, aucune dérive, rien à nettoyer.' },
      { icon: 'layers', title: 'Fusionne, n’écrase jamais', body: 'Votre configuration Apache existante est conservée telle quelle.', detail: 'Votre bloc localhost, vos commentaires, vos autres projets — tout reste intact. L’outil n’écrit que dans des sections clairement délimitées pour les domaines que vous gérez avec lui ; il cohabite avec votre existant au lieu de le remplacer.' },
      { icon: 'rotate-ccw', title: 'Sauvegardes et retour arrière automatique', body: 'Sauvegardes horodatées à chaque exécution ; restauration en cas d’échec.', detail: 'Avant toute modification, il sauvegarde vos fichiers vhosts et hosts avec un horodatage. Si Apache ne redémarre pas, il restaure ces fichiers, relance Apache sur la configuration valide connue, et vous montre la fin du journal d’erreurs pour que vous sachiez exactement ce qui s’est passé.' },
      { icon: 'check-check', title: 'Vérification de bout en bout', body: 'Il prouve le résultat au lieu de le supposer.', detail: 'Après le redémarrage, l’outil récupère chaque domaine en HTTPS via la même chaîne de confiance que votre navigateur. La dernière ligne du journal est un verdict clair — N/N OK — vous n’avez donc jamais à ouvrir un navigateur pour vérifier.' },
      { icon: 'search', title: 'Détection automatique', body: 'Trouve WAMP et lit votre version d’Apache pour vous.', detail: 'Au démarrage, il localise votre installation dans C:\\wamp64 ou C:\\wamp et lit votre version exacte d’Apache depuis httpd -v, pour que la configuration générée corresponde à votre pile. Il n’y a presque rien à régler.' },
      { icon: 'terminal', title: 'Une fenêtre, un journal en temps réel', body: 'Voyez précisément ce qui change, au moment où ça change.', detail: 'Tout se passe dans une unique fenêtre de bureau avec un journal en direct. Le pipeline s’exécute sur un fil d’arrière-plan et diffuse chaque étape à mesure ; l’outil n’est jamais une boîte noire qui agit sur votre système à votre insu.' },
    ],
    cta: { h2: 'Prêt pour un cadenas vert ?', sub: 'Téléchargez-le, ajoutez vos domaines, et regardez le journal afficher N/N OK.' },
  },

  howItWorks: {
    meta: {
      title: 'Comment ça marche — Le pipeline SSL en un clic',
      description:
        'Sauvegarde, AC racine, confiance, certificats par domaine, fusion des vhosts, fichier hosts, validation, redémarrage et vérification — validé avant tout commit et annulé en cas d’échec.',
    },
    h1: 'Ce qui se passe quand vous appuyez sur le bouton.',
    lead: 'Cliquer sur Générer la configuration SSL exécute ce pipeline sur votre installation WAMP en direct, dans l’ordre, sur un fil d’arrière-plan — chaque ligne étant diffusée dans le journal à l’écran. Il valide avant de valider, et revient en arrière en cas d’échec.',
    steps: [
      { name: 'Sauvegarde', text: 'Des copies horodatées de httpd-vhosts.conf et de votre fichier hosts Windows sont écrites en premier, pour toujours disposer d’un point de restauration propre.', log: '[1/9] Sauvegarde  vhosts + hosts sauvegardés (.bak-20260530-1142)' },
      { name: 'AC racine', text: 'Une autorité de certification locale est générée une fois — RSA-4096, SHA-256, validité de 10 ans — puis réutilisée à chaque exécution future.', log: '[2/9] AC racine   AC RSA-4096 prête (réutilisée)' },
      { name: 'Confiance', text: 'L’AC est installée dans le magasin de confiance machine de Windows (LocalMachine\\Root). Si elle est déjà approuvée, cette étape est ignorée.', log: '[3/9] Confiance   AC présente dans LocalMachine\\Root' },
      { name: 'Certificats', text: 'Un certificat par domaine est émis, signé par votre AC, avec un Subject Alternative Name, un EKU serverAuth et une validité de 825 jours. Les certificats encore valides sont réutilisés.', log: '[4/9] Certs       myapp.test  émis (SAN, EKU, 825j)' },
      { name: 'Fusion vhosts', text: 'Des blocs de redirection :80 → :443 et des blocs SSL :443 propres sont ajoutés dans une section balisée de httpd-vhosts.conf. Tout le reste demeure exactement tel quel.', log: '[5/9] Vhosts      fusionnés dans la section # WampSSL' },
      { name: 'Fichier hosts', text: 'Les domaines sont écrits dans votre fichier hosts Windows en tant qu’entrées 127.0.0.1, de façon atomique, entre les balises BEGIN/END WampSSL.', log: '[6/9] Hosts       127.0.0.1 myapp.test' },
      { name: 'Validation', text: 'httpd -t vérifie la nouvelle configuration. Si elle ne démarrait pas, l’outil restaure les sauvegardes et s’arrête — sans jamais toucher au serveur en cours d’exécution.', log: '[7/9] Validation  httpd -t : Syntax OK' },
      { name: 'Redémarrage', text: 'Le service Windows wampapache est redémarré avec suivi d’état. S’il ne revient pas, l’outil restaure les sauvegardes et redémarre sur la configuration valide connue.', log: '[8/9] Redémarrage wampapache en cours d’exécution' },
      { name: 'Vérification', text: 'Chaque domaine est récupéré en HTTPS via la même chaîne de confiance que votre navigateur, pour confirmer que le certificat est fiable et qu’Apache répond.', log: '[9/9] Vérification Verification: 3/3 OK' },
    ],
    safety: {
      h2: 'Le filet de sécurité que vous construiriez vous-même, si vous aviez un après-midi de libre.',
      paras: [
        'L’ordre est délibéré. Les sauvegardes précèdent toute modification. La validation précède tout redémarrage. La vérification vient ensuite, pour que le succès soit prouvé plutôt que supposé.',
        'Si une étape échoue, l’outil ne vous laisse pas à mi-chemin. Il restaure les sauvegardes horodatées, redémarre Apache sur la configuration qui fonctionnait l’instant d’avant, et signale ce qui a mal tourné — y compris la fin du journal d’erreurs d’Apache — pour que vous puissiez corriger la véritable cause.',
        'Comme l’ensemble est idempotent, la correction consiste généralement à rectifier l’entrée et à réappuyer sur le bouton.',
      ],
    },
    cta: { h2: 'Voyez-le tourner sur votre machine.', sub: 'Téléchargez, ajoutez un domaine, et regardez défiler les neuf étapes.' },
  },

  about: {
    meta: {
      title: 'À propos — WAMP SSL Automator',
      description:
        'Pourquoi cet outil existe, comment il est conçu, et qui le maintient. Open source sous licence MIT, développé au grand jour par Tech Guy Peter.',
    },
    h1: 'Un petit outil avec une exigence tenace.',
    lead: 'WAMP SSL Automator existe pour une raison : un HTTPS local de confiance devrait prendre un clic, pas un après-midi. Tout le reste en découle.',
    project: {
      h2: 'Pourquoi il existe',
      paras: [
        'Chaque développeur sous WampServer bute sur le même mur. Les fonctionnalités web modernes présupposent le HTTPS, les certificats auto-signés déclenchent un écran d’avertissement rouge, et la correction manuelle — une AC locale, le bon profil de certificat, un vhost Apache, le fichier hosts, un redémarrage prudent — est assez délicate pour que la plupart renoncent et cliquent à travers les avertissements pour toujours.',
        'Cet outil fait tout ce travail correctement, en un clic, avec des sauvegardes et un retour arrière automatique pour qu’un faux pas ne puisse pas mettre votre environnement hors ligne. C’est l’outil que son auteur aurait voulu voir exister, construit une bonne fois, correctement, pour tous ceux qui ont le même problème.',
      ],
    },
    builder: {
      h2: 'À propos de l’auteur',
      paras: [
        'WAMP SSL Automator est conçu et maintenu par Peter Bamuhigire — connu en ligne sous le nom de Tech Guy Peter. C’est un développeur logiciel et web dont le travail quotidien couvre les systèmes cloud, les applications mobiles, les plateformes ERP et les logiciels sur mesure, en plus du conseil auprès d’équipes qui ont besoin que les choses soient bien faites.',
        'Cet outil illustre bien sa manière de travailler : prendre un problème réellement agaçant, le comprendre jusqu’aux extensions du certificat, et livrer quelque chose de soigné là où ça compte — valider avant de valider, sauvegarder avant de modifier, prouver le résultat au lieu de le supposer. Les parties ennuyeuses sont traitées comme les parties importantes, car elles le sont.',
      ],
      skillsLabel: 'Intervient sur',
      skills: ['Systèmes cloud', 'Applications mobiles', 'Plateformes ERP', 'Logiciels sur mesure', 'Conseil'],
      photoAlt: 'Peter Bamuhigire — Tech Guy Peter',
      linkText: 'techguypeter.com',
    },
    open: {
      h2: 'Open source, et gratuit, pour toujours',
      paras: [
        'WAMP SSL Automator est publié sous licence MIT. Vous pouvez l’utiliser au travail comme à la maison, lire chaque ligne de ce qu’il fait, le forker, l’améliorer, et renvoyer ces améliorations. Aucune offre payante, aucune version « pro », rien à déverrouiller.',
        'Il est conçu et maintenu au grand jour précisément parce qu’il touche à des parties sensibles de votre système — votre magasin de certificats et la configuration de votre serveur. Vous ne devriez pas avoir à faire confiance à une boîte noire pour cela. Vous pouvez lire exactement ce qu’il fait, et les contributions, rapports de bogues et idées de fonctionnalités sont les bienvenus.',
      ],
    },
  },

  palestine: {
    meta: {
      title: 'Aux côtés de la Palestine',
      description:
        'Un message d’espoir : que la paix et la justice prévalent un jour pour le peuple palestinien.',
    },
    h1: 'Aux côtés de la Palestine.',
    paras: [
      'Ceci est un petit projet logiciel. Mais les personnes qui font des logiciels sont d’abord des personnes, et certaines choses méritent d’être dites clairement, même ici.',
      'Nous sommes aux côtés du peuple palestinien. Nous espérons — sincèrement, et sans réserve — que la paix et la justice prévaudront un jour, que les familles seront en sécurité, que les enfants grandiront libres, et que la dignité sera rendue là où elle a été ôtée.',
      'La paix n’est pas un slogan et la justice n’est pas une faveur. Elles sont dues à chaque peuple. En attendant ce jour, nous gardons cet espoir, et nous le disons à voix haute.',
    ],
    photoAlt: 'Des personnes brandissant le drapeau palestinien, dans l’espoir de la fin de la guerre',
    flagAlt: 'Le drapeau de la Palestine flottant au-dessus d’une ville au crépuscule',
    childrenAlt: 'Deux jeunes garçons debout au milieu des décombres d’un bâtiment détruit',
    childrenCaption: 'Que chaque enfant grandisse en sécurité — et libre.',
    closing: 'Que la paix et la justice prévalent.',
  },

  faq: {
    meta: {
      title: 'FAQ — WAMP SSL Automator',
      description:
        'Réponses sur la confiance du navigateur, la sûreté de la configuration, le retour arrière, OpenSSL, la licence, et la sécurité pour le développement local.',
    },
    h1: 'Foire aux questions',
    lead: 'Des réponses courtes et honnêtes. Si votre question n’y figure pas, le suivi des problèmes sur GitHub est le moyen le plus rapide de nous joindre.',
    groups: [
      {
        heading: 'Confiance et navigateurs',
        items: [
          { q: 'Mon navigateur affichera-t-il encore un avertissement ?', a: 'Non. Les certificats sont signés par une AC racine installée dans le magasin de confiance de Windows ; Edge et Chrome leur font donc confiance. Firefox conserve son propre magasin — réglez security.enterprise_roots.enabled sur true dans about:config une fois, et il leur fera confiance aussi.' },
          { q: 'Pourquoi un certificat auto-signé ne suffit-il pas ?', a: 'Un certificat auto-signé n’a aucune chaîne de confiance ; le navigateur refuse donc, à juste titre, de lui faire confiance et affiche l’avertissement rouge « Votre connexion n’est pas privée ». WAMP SSL Automator crée plutôt une AC racine locale, l’approuve une fois dans Windows, et signe chaque certificat de domaine avec elle — d’où l’absence d’avertissement.' },
          { q: 'L’AC quitte-t-elle ma machine ?', a: 'Jamais. L’AC racine et sa clé privée sont générées localement et stockées sur votre machine. Rien n’est téléversé nulle part, et l’AC ne signe que les domaines de développement que vous ajoutez explicitement.' },
        ],
      },
      {
        heading: 'Sûreté et votre configuration',
        items: [
          { q: 'Écrase-t-il ma configuration Apache existante ?', a: 'Non. Il fusionne. Seuls les domaines que vous gérez avec l’outil sont ajoutés ou remplacés, dans des sections clairement délimitées de httpd-vhosts.conf. Tout le reste est conservé, et chaque exécution est d’abord sauvegardée.' },
          { q: 'Et si Apache ne redémarre pas ?', a: 'L’outil valide la configuration avec httpd -t avant de redémarrer, et revient en arrière automatiquement si le redémarrage échoue — en restaurant vos anciens fichiers et la configuration fonctionnelle, avec le journal d’erreurs d’Apache inclus dans le message.' },
          { q: 'Puis-je l’exécuter plusieurs fois ?', a: 'Oui — il est idempotent. Relancer réutilise l’AC et les certificats encore valides, et remplace proprement les blocs gérés. Ajouter ou retirer un domaine puis relancer est le flux de travail prévu.' },
          { q: 'Comment retirer un domaine ?', a: 'Ôtez-le de la liste et relancez. Son bloc vhost géré et son entrée dans le fichier hosts sont proprement supprimés ; rien d’autre n’est affecté.' },
        ],
      },
      {
        heading: 'Prérequis et licence',
        items: [
          { q: 'Dois-je connaître OpenSSL ?', a: 'Pas du tout — c’est tout l’intérêt. Vous ajoutez des domaines et cliquez sur un bouton. L’outil utilise en coulisse l’openssl.exe fourni avec l’Apache de WampServer.' },
          { q: 'De quoi ai-je besoin pour l’exécuter ?', a: 'Windows 10 ou 11, une installation WampServer fonctionnelle, et des droits d’administrateur (l’outil s’élève via UAC pour écrire dans le magasin de certificats, le fichier hosts et la configuration d’Apache). Il faut aussi le runtime .NET 8, sauf si vous utilisez la version autonome qui ne nécessite rien de préinstallé.' },
          { q: 'Est-il vraiment gratuit ?', a: 'Oui — gratuit et open source sous licence MIT. Pas d’offre payante, pas de version « pro », aucun piège.' },
          { q: 'Puis-je l’utiliser pour des serveurs de production ?', a: 'Non. Il est conçu pour le développement local. Les sites de production doivent utiliser une AC publique comme Let’s Encrypt.' },
          { q: 'Envoie-t-il des données ou me suit-il ?', a: 'Non. Aucun serveur, aucun compte, aucune télémétrie. Le seul appel réseau qu’il effectue est la vérification HTTPS vers votre propre localhost pour confirmer le résultat.' },
        ],
      },
    ],
  },

  guideSsl: {
    meta: {
      title: 'HTTPS/SSL WampServer : localhost fiable et domaines .test',
      description:
        'Activez un HTTPS fiable pour localhost WampServer et vos domaines locaux .test avec une AC locale, des vhosts SSL Apache, le fichier hosts, des certificats acceptés par le navigateur et une automatisation en un clic.',
      keywords: [
        'activer HTTPS localhost WampServer',
        'configuration SSL WampServer',
        'HTTPS localhost WAMP',
        'alerte certificat WampServer',
        'vhost SSL Apache Windows',
        'HTTPS local de confiance',
        'WAMP SSL Automator',
      ],
    },
    h1: 'Comment configurer un HTTPS (SSL) de confiance sur WampServer pour Windows',
    lead: 'Ce guide vous montre comment activer un HTTPS de confiance pour localhost WampServer et pour des domaines de projet locaux comme myapp.test — d’abord en comprenant ce que le navigateur exige réellement, puis en le faisant à la main, et enfin en un clic. À la fin, vous saurez pourquoi le HTTPS sur localhost est délicat, pourquoi les certificats SSL WAMP déclenchent encore des avertissements, et exactement comment les rendre fiables.',
    published: '2026-05-30',
    updated: '2026-05-30',
    tocLabel: 'Sur cette page',
    sections: [
      {
        id: 'pourquoi-https-localhost',
        h2: 'Pourquoi exécuter le HTTPS sur localhost ?',
        html: `<p>Beaucoup de développeurs exécutent leurs sites locaux en simple <code>http://</code> pendant des années. Alors pourquoi s’embêter avec le HTTPS sur <code>localhost</code> ?</p>
<p>Parce que les fonctionnalités modernes des navigateurs présupposent de plus en plus un contexte sécurisé. Celles-ci se comportent différemment — ou refusent simplement de fonctionner — en HTTP simple :</p>
<ul>
<li>Les service workers et l’API Cache</li>
<li>Les cookies sécurisés et <code>SameSite=None</code> (nécessaires à de nombreux flux OAuth et SSO)</li>
<li>Les URI de redirection OAuth/OpenID qui exigent <code>https://</code></li>
<li>L’API Payment Request, la géolocalisation, l’accès à la caméra et au microphone</li>
<li>HTTP/2, que les navigateurs ne négocient que par TLS</li>
</ul>
<p>Si votre application de production utilise l’une de ces fonctionnalités, tester en HTTP revient à tester un chemin de code différent de celui de vos utilisateurs. Exécuter un HTTPS de confiance en local supprime cet écart.</p>`,
      },
      {
        id: 'pourquoi-avertissement-auto-signe',
        h2: 'Pourquoi un certificat auto-signé affiche-t-il « Votre connexion n’est pas privée » ?',
        html: `<p>Réponse brève : <strong>la confiance est une chaîne, et un certificat auto-signé n’a aucune chaîne.</strong></p>
<p>Votre navigateur fait confiance à un site lorsque son certificat est signé par une autorité de certification (AC) à laquelle votre système d’exploitation fait déjà confiance. Un certificat auto-signé se signe <em>lui-même</em> — aucune autorité fiable ne se porte garante — et le navigateur fait donc ce qu’il faut : il vous avertit. Cliquer sur « Continuer quand même (dangereux) » fonctionne, mais vous vous entraînez à ignorer l’avertissement même qui vous protège ailleurs.</p>
<p>La solution professionnelle n’est pas de fabriquer un « meilleur » certificat auto-signé. C’est de créer votre propre petite autorité de certification, de dire à votre ordinateur d’y faire confiance une fois, puis de signer le certificat de chaque site avec elle. C’est précisément ce que font les étapes manuelles ci-dessous — et ce que WAMP SSL Automator fait pour vous.</p>`,
      },
      {
        id: 'ce-quil-faut',
        h2: 'Ce qu’il vous faut',
        html: `<ul>
<li><strong>WampServer</strong> installé et en cours d’exécution sur Windows 10 ou 11. Son Apache intégré fournit l’<code>openssl.exe</code> utilisé ci-dessous.</li>
<li><strong>Des droits d’administrateur</strong>, car vous allez écrire dans le magasin de certificats de Windows, le fichier hosts et la configuration d’Apache.</li>
<li>Un projet servi par Apache, par exemple <code>C:\\wamp64\\www\\myapp\\public</code>.</li>
</ul>
<p>Tout au long de ce guide, le domaine d’exemple est <code>myapp.test</code>. Le suffixe <code>.test</code> est réservé aux tests et ne se résoudra jamais sur l’internet public, ce qui en fait un choix idéal pour le développement local.</p>`,
      },
      {
        id: 'mode-https-wampserver',
        h2: 'Et le mode HTTPS de WampServer pour localhost ?',
        html: `<p>Si votre recherche a commencé par <strong>« activer le mode HTTPS pour localhost »</strong>, vous êtes au bon endroit. Les versions récentes de WampServer incluent un mode HTTPS pour <code>localhost</code>, utile pour que le tableau de bord WampServer réponde sur <code>https://localhost</code>.</p>
<p>La plupart des projets ont besoin de plus que cela. Laravel, WordPress, Symfony, les backends API et les rappels OAuth tournent souvent sur des hôtes virtuels nommés comme <code>myapp.test</code>, <code>shop.test</code> ou <code>api.test</code>. Ces noms ont toujours besoin des mêmes éléments difficiles : une autorité de certification locale fiable, des certificats par domaine avec Subject Alternative Name, des vhosts Apache <code>:443</code>, des entrées dans le fichier hosts Windows, un redémarrage propre et une vraie vérification HTTPS.</p>
<p>C’est l’écart que vise WAMP SSL Automator. Il ne remplace pas WampServer ; il automatise le travail de certificats et d’hôtes virtuels autour de WampServer pour que chaque projet local puisse utiliser un HTTPS fiable sans avertissement du navigateur.</p>`,
      },
      {
        id: 'methode-manuelle',
        h2: 'Option A — la méthode manuelle (et ses pièges)',
        html: `<p>Voici la version honnête du processus à la main, pour que vous voyiez chaque rouage.</p>
<h3>1. Créer une AC racine locale</h3>
<p>Ouvrez un terminal où OpenSSL est disponible (WampServer le fournit dans <code>C:\\wamp64\\bin\\apache\\apache&lt;version&gt;\\bin</code>). Générez une clé d’AC et un certificat d’AC auto-signé :</p>
<pre><code>openssl genrsa -out myCA.key 4096
openssl req -x509 -new -nodes -key myCA.key -sha256 -days 3650 -out myCA.crt -subj "/CN=My Local Dev CA"</code></pre>
<h3>2. Approuver l’AC dans Windows</h3>
<p>Importez <code>myCA.crt</code> dans le magasin racine de confiance de la machine. Dans une console PowerShell élevée :</p>
<pre><code>Import-Certificate -FilePath myCA.crt -CertStoreLocation Cert:\\LocalMachine\\Root</code></pre>
<p><strong>Piège :</strong> importer dans le magasin de l’utilisateur courant au lieu de <code>LocalMachine\\Root</code>, ou oublier de s’exécuter en mode élevé, laisse l’AC non approuvée et l’avertissement persiste.</p>
<h3>3. Émettre un certificat pour votre domaine — avec un SAN</h3>
<p>Les navigateurs modernes ignorent l’ancien champ Common Name et exigent un <strong>Subject Alternative Name</strong> ainsi qu’un Extended Key Usage <strong>serverAuth</strong>. Créez un fichier d’extensions <code>myapp.ext</code> :</p>
<pre><code>subjectAltName = DNS:myapp.test
extendedKeyUsage = serverAuth</code></pre>
<p>Générez ensuite une clé, une CSR, et signez-la avec votre AC pour 825 jours au maximum :</p>
<pre><code>openssl genrsa -out myapp.key 2048
openssl req -new -key myapp.key -out myapp.csr -subj "/CN=myapp.test"
openssl x509 -req -in myapp.csr -CA myCA.crt -CAkey myCA.key -CAcreateserial -out myapp.crt -days 825 -sha256 -extfile myapp.ext</code></pre>
<p><strong>Piège :</strong> un SAN manquant, un EKU <code>serverAuth</code> manquant, ou une validité supérieure à 825 jours feront tous rejeter par Chrome et Edge un certificat qui « semble pourtant correct ».</p>
<h3>4. Configurer un vhost SSL Apache</h3>
<p>Assurez-vous que <code>mod_ssl</code> est activé, puis ajoutez un vhost <code>:443</code> dans <code>httpd-vhosts.conf</code> et une redirection <code>:80</code> :</p>
<pre><code>&lt;VirtualHost *:80&gt;
  ServerName myapp.test
  Redirect permanent / https://myapp.test/
&lt;/VirtualHost&gt;

&lt;VirtualHost *:443&gt;
  ServerName myapp.test
  DocumentRoot "C:/wamp64/www/myapp/public"
  SSLEngine on
  SSLCertificateFile "C:/wamp64/certs/myapp.crt"
  SSLCertificateKeyFile "C:/wamp64/certs/myapp.key"
  &lt;Directory "C:/wamp64/www/myapp/public"&gt;
    Require local
  &lt;/Directory&gt;
&lt;/VirtualHost&gt;</code></pre>
<p><strong>Piège :</strong> une seule directive mal saisie et Apache ne démarrera pas — mettant tous les sites de votre pile hors ligne jusqu’à ce que vous la trouviez.</p>
<h3>5. Mapper le domaine dans le fichier hosts</h3>
<p>Modifiez <code>C:\\Windows\\System32\\drivers\\etc\\hosts</code> (en tant qu’administrateur) et ajoutez :</p>
<pre><code>127.0.0.1 myapp.test</code></pre>
<h3>6. Redémarrer Apache et croiser les doigts</h3>
<p>Redémarrez le service <code>wampapache</code>. Si vous avez oublié quelque chose aux étapes 1 à 5, vous le découvrez maintenant — généralement avec une pile hors ligne plutôt qu’un message utile.</p>
<p>Ça fonctionne, mais cela fait beaucoup d’étapes précises et sensibles à l’ordre, à répéter pour chaque nouveau projet. C’est l’écart que l’outil comble.</p>`,
      },
      {
        id: 'methode-un-clic',
        h2: 'Option B — la méthode en un clic',
        html: `<p>WAMP SSL Automator effectue pour vous chaque étape ci-dessus, dans le bon ordre, avec un filet de sécurité :</p>
<ul>
<li>Il génère et approuve l’AC racine locale une fois, puis la réutilise.</li>
<li>Il émet chaque certificat de domaine avec le profil SAN + EKU + 825 jours exact qu’exigent les navigateurs.</li>
<li>Il <strong>fusionne</strong> les blocs vhost dans votre configuration existante au lieu de l’écraser, et met à jour le fichier hosts dans des sections balisées.</li>
<li>Il exécute <code>httpd -t</code> avant de redémarrer, et <strong>revient en arrière automatiquement</strong> en cas d’échec — en restaurant des sauvegardes horodatées des deux fichiers.</li>
<li>Il récupère ensuite chaque domaine en HTTPS et indique <code>N/N OK</code>.</li>
</ul>
<p>Vous ajoutez vos domaines, cliquez sur <em>Générer la configuration SSL</em>, et regardez le journal. Voyez le <a href="/fr/comment-ca-marche/">pipeline complet en neuf étapes</a> pour savoir exactement ce qui s’exécute.</p>`,
      },
      {
        id: 'verifier',
        h2: 'Comment vérifier que le HTTPS fonctionne ?',
        html: `<p>Ouvrez <code>https://myapp.test</code> dans Edge ou Chrome. Vous devriez voir un cadenas normal et aucun avertissement. Pour vérifier en ligne de commande :</p>
<pre><code>curl -I https://myapp.test</code></pre>
<p>Une réponse fiable sans erreur de certificat signifie que la chaîne est bonne. Si vous utilisez Firefox, activez <code>security.enterprise_roots.enabled</code> dans <code>about:config</code> une fois pour qu’il lise aussi le magasin de confiance de Windows.</p>`,
      },
    ],
    faqs: [
      { q: 'La configuration du HTTPS localhost sur WampServer est-elle gratuite ?', a: 'Oui. La méthode manuelle comme WAMP SSL Automator sont gratuites ; l’outil est open source sous licence MIT et utilise l’OpenSSL déjà fourni avec WampServer.' },
      { q: 'WampServer possède-t-il déjà un mode HTTPS pour localhost ?', a: 'Les versions récentes de WampServer incluent une prise en charge HTTPS pour localhost, mais les domaines de projet comme myapp.test ont toujours besoin de certificats fiables, de vhosts SSL Apache et d’entrées dans le fichier hosts. WAMP SSL Automator automatise précisément cette configuration répétable par domaine.' },
      { q: 'Pourquoi Chrome avertit-il encore après avoir ajouté un certificat SSL à WAMP ?', a: 'Presque toujours parce que le certificat est auto-signé (aucune AC fiable), qu’il lui manque un Subject Alternative Name, qu’il n’a pas d’Extended Key Usage serverAuth, ou qu’il est valide plus de 825 jours. Le signer avec une AC locale de confiance et utiliser le profil moderne corrige l’avertissement.' },
      { q: 'WAMP SSL Automator peut-il corriger « Votre connexion n’est pas privée » sur WampServer ?', a: 'Oui, lorsque l’avertissement vient d’un certificat local non approuvé. L’outil crée une AC racine locale, l’installe dans le magasin de confiance Windows, émet des certificats par domaine compatibles avec les navigateurs et vérifie chaque domaine HTTPS après le redémarrage d’Apache.' },
      { q: 'Où WampServer conserve-t-il la configuration SSL d’Apache ?', a: 'Dans httpd-vhosts.conf (dans le dossier conf/extra de l’Apache de votre installation WAMP). mod_ssl doit être activé, et les vhosts SSL écoutent sur le port 443.' },
      { q: 'Dois-je répéter cela pour chaque projet ?', a: 'À la main, oui — chaque domaine a besoin de son propre certificat, vhost et entrée hosts. WAMP SSL Automator vous permet de gérer une liste de domaines et de tout régénérer d’un coup, en réutilisant l’AC.' },
    ],
  },

  guideDomains: {
    meta: {
      title: 'Configurer des domaines locaux .test sur Windows (WAMP)',
      description:
        'Configurez des domaines locaux sur Windows avec le fichier hosts et les vhosts Apache dans WampServer — la méthode manuelle et la méthode en un clic, avec les solutions aux problèmes courants.',
    },
    h1: 'Comment configurer des domaines locaux sur Windows avec WampServer',
    lead: 'Au lieu de travailler sur http://localhost/myapp, vous pouvez donner à chaque projet sa propre adresse propre, comme http://myapp.test. Ce guide explique le fichier hosts de Windows et les hôtes virtuels Apache, vous montre comment les relier, et comment ajouter un HTTPS de confiance une fois qu’ils se résolvent.',
    published: '2026-05-30',
    updated: '2026-05-30',
    tocLabel: 'Sur cette page',
    sections: [
      {
        id: 'quest-ce-quun-domaine-local',
        h2: 'Qu’est-ce qu’un domaine local, et pourquoi en utiliser un ?',
        html: `<p>Un domaine local est un nom d’hôte qui ne se résout que sur votre propre machine, comme <code>myapp.test</code>. Rien n’en est publié sur internet ; votre ordinateur accepte simplement de traiter ce nom comme une adresse vers lui-même.</p>
<p>Les domaines locaux valent leur petite configuration, car ils vous permettent de :</p>
<ul>
<li>Exécuter chaque projet à sa propre racine (<code>myapp.test</code>) au lieu d’un sous-dossier de <code>localhost</code>, pour que les chemins et les cookies se comportent comme en production.</li>
<li>Faire tourner plusieurs projets côte à côte sans conflits de chemins.</li>
<li>Correspondre au domaine attendu par votre framework (Laravel, Symfony, le multisite WordPress et d’autres tiennent compte de l’hôte).</li>
<li>Ajouter un HTTPS de confiance par domaine, ce qu’un simple <code>localhost</code> rend malaisé.</li>
</ul>`,
      },
      {
        id: 'fichier-hosts',
        h2: 'Le fichier hosts de Windows, expliqué',
        html: `<p>Avant que votre ordinateur ne demande à un serveur DNS où se trouve un domaine, il consulte d’abord un fichier texte local. Sous Windows, ce fichier est :</p>
<pre><code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></pre>
<p>Tout nom que vous y mappez l’emporte sur l’internet public. C’est exactement ce que nous voulons pour le développement local : nous pointons le domaine choisi vers <code>127.0.0.1</code>, l’adresse qui signifie toujours « cette machine ».</p>`,
      },
      {
        id: 'mapper-domaine',
        h2: 'Étape 1 — mapper le domaine dans le fichier hosts',
        html: `<p>Ouvrez le Bloc-notes <strong>en tant qu’administrateur</strong> (le fichier est protégé), ouvrez le fichier hosts ci-dessus, et ajoutez une ligne :</p>
<pre><code>127.0.0.1 myapp.test</code></pre>
<p>Enregistrez. Pour confirmer que le nom se résout désormais vers votre machine, ouvrez un terminal et exécutez :</p>
<pre><code>ping myapp.test</code></pre>
<p>Vous devriez voir des réponses de <code>127.0.0.1</code>. À ce stade, le nom se résout, mais Apache ne sait pas encore quoi servir pour lui — c’est l’étape suivante.</p>`,
      },
      {
        id: 'vhost-apache',
        h2: 'Étape 2 — pointer Apache vers lui avec un hôte virtuel',
        html: `<p>Un hôte virtuel indique à Apache quel dossier servir pour un nom d’hôte donné. Ouvrez <code>httpd-vhosts.conf</code> dans votre installation WAMP et ajoutez :</p>
<pre><code>&lt;VirtualHost *:80&gt;
  ServerName myapp.test
  DocumentRoot "C:/wamp64/www/myapp/public"
  &lt;Directory "C:/wamp64/www/myapp/public"&gt;
    Options Indexes FollowSymLinks
    AllowOverride All
    Require local
  &lt;/Directory&gt;
&lt;/VirtualHost&gt;</code></pre>
<p>Redémarrez le service Apache (<code>wampapache</code>) depuis l’icône de la zone de notification WampServer, puis ouvrez <code>http://myapp.test</code>. Votre projet devrait se charger à sa propre adresse propre.</p>
<p><strong>Conseil :</strong> conservez <code>Require local</code> pour que le vhost ne soit accessible que depuis votre propre machine.</p>`,
      },
      {
        id: 'pourquoi-test-tld',
        h2: 'Pourquoi utiliser .test, et non .dev ou .local ?',
        html: `<p>Choisissez votre suffixe avec soin :</p>
<ul>
<li><strong>.test</strong> — réservé par l’IETF pour les tests. Il ne sera jamais un vrai domaine public ; c’est donc le choix le plus sûr.</li>
<li><strong>.dev</strong> — un véritable domaine de premier niveau public détenu par Google, préchargé en HTTPS uniquement (HSTS). L’utiliser en local provoque des redirections déroutantes. À éviter.</li>
<li><strong>.local</strong> — réservé au DNS multicast (mDNS/Bonjour) et peut entrer en conflit avec la découverte réseau. À éviter.</li>
</ul>
<p>Tenez-vous-en à <code>.test</code> pour un développement local prévisible.</p>`,
      },
      {
        id: 'ajouter-https',
        h2: 'Étape 3 — ajouter un HTTPS de confiance',
        html: `<p>Une fois que votre domaine se résout et qu’Apache le sert, la dernière étape est un certificat de confiance pour que le navigateur affiche un cadenas vert au lieu d’un avertissement. Cela nécessite une autorité de certification locale et un certificat au bon profil — détaillé dans notre <a href="/fr/guide/https-ssl-wampserver/">guide du HTTPS de confiance sur WampServer</a>.</p>
<p>Vous pouvez le faire à la main avec OpenSSL, ou laisser <a href="/fr/">WAMP SSL Automator</a> créer l’AC, émettre le certificat, ajouter le vhost <code>:443</code> et l’entrée hosts, redémarrer Apache et vérifier le résultat — pour chaque domaine de votre liste, en un clic.</p>`,
      },
      {
        id: 'problemes-courants',
        h2: 'Problèmes courants et solutions',
        html: `<ul>
<li><strong>Le domaine ne se résout pas.</strong> Le fichier hosts n’a pas été enregistré en tant qu’administrateur, ou un antivirus l’a verrouillé. Rouvrez le Bloc-notes en mode élevé et réenregistrez ; videz le cache DNS avec <code>ipconfig /flushdns</code>.</li>
<li><strong>Vous voyez la page WAMP par défaut, pas votre projet.</strong> Le chemin <code>DocumentRoot</code> est incorrect, ou Apache n’a pas été redémarré après modification du vhost.</li>
<li><strong>Apache ne démarre pas après modification des vhosts.</strong> Une erreur de syntaxe dans <code>httpd-vhosts.conf</code>. Exécutez <code>httpd -t</code> pour voir la ligne fautive, corrigez-la, et redémarrez.</li>
<li><strong>403 Forbidden.</strong> Le bloc <code>&lt;Directory&gt;</code> est manquant ou son chemin ne correspond pas au <code>DocumentRoot</code>.</li>
</ul>`,
      },
    ],
    faqs: [
      { q: 'Où se trouve le fichier hosts sous Windows ?', a: 'Dans C:\\Windows\\System32\\drivers\\etc\\hosts. Vous devez ouvrir votre éditeur en tant qu’administrateur pour enregistrer les modifications, car le fichier est protégé.' },
      { q: 'Dois-je modifier le fichier hosts et un vhost Apache ?', a: 'Oui — ils ont des rôles différents. Le fichier hosts fait résoudre le domaine vers votre machine (127.0.0.1) ; l’hôte virtuel Apache indique au serveur quel dossier servir pour ce domaine.' },
      { q: 'Pourquoi utiliser .test plutôt que .dev pour les domaines locaux ?', a: 'Le suffixe .test est réservé aux tests et ne sera jamais un domaine public. Le TLD .dev est réel et HTTPS uniquement (préchargé HSTS), ce qui provoque des redirections déroutantes en local.' },
      { q: 'Comment ajouter le HTTPS à un domaine local ?', a: 'Créez une autorité de certification locale de confiance, émettez un certificat pour le domaine avec un Subject Alternative Name, et ajoutez un vhost Apache :443 — ou utilisez WAMP SSL Automator pour tout faire en un clic.' },
    ],
  },
};

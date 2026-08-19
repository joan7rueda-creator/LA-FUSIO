export const languages = {
  ca: 'Català',
  es: 'Castellano',
} as const;

export const defaultLang = 'ca' as const;

export const ui = {
  ca: {
    'site.title': 'La Fusió — Pastisseria, flors i moments.',
    'site.description':
      'La Fusió és un espai que fusiona pastisseria artesanal i floristeria. Un lloc per gaudir de la nostra pastisseria, prendre un cafè, descobrir flors i quedar-te una mica més.',

    'nav.fusion': 'La Fusió',
    'nav.pasteleria': 'Pastisseria',
    'nav.flores': 'Flors',
    'nav.instagram': 'Instagram',
    'nav.visitanos': "Visita'ns",
    'nav.contacta': 'Contacta',

    'placeholder.photoPending': 'Foto pendent',

    'a11y.skipToContent': 'Anar al contingut principal',
    'a11y.openMenu': 'Obrir menú',
    'a11y.closeMenu': 'Tancar menú',
    'a11y.languageSwitcher': "Canviar d'idioma",

    'hero.eyebrow': 'Pastisseria & Floristeria',
    'hero.title': 'Pastisseria, flors i moments.',
    'hero.subtitle': 'Un lloc on gaudir de la nostra pastisseria, prendre un cafè i descobrir flors.',
    'hero.cta.primary': 'Descobreix La Fusió',
    'hero.cta.secondary': "Visita'ns",
    'hero.chip.pasteleria': 'Pastisseria artesanal',
    'hero.chip.flores': 'Flors seleccionades',
    'hero.chip.espacio': 'Un espai per gaudir',
    'hero.scrollCue': 'Descobreix més',
    'hero.imageLabel': "Façana i entrada de La Fusió a Sant Celoni, envoltada de flors i plantes",

    'fusion.eyebrow': 'La fusió',
    'fusion.title1': 'Dos mons.',
    'fusion.title2': 'Un mateix lloc.',
    'fusion.text':
        "La Fusió neix de la unió entre la pastisseria i les flors. Un espai pensat per gaudir, desconnectar i descobrir alguna cosa diferent a cada visita.",
    'fusion.pasteleria.title': 'Pastisseria',
    'fusion.pasteleria.desc':
      "El sabor, l'aroma i l'art de la rebosteria artesanal. Vine a esmorzar, fer un berenar o simplement aturar-te un moment i desconnectar amb un bon cafè.",
    'fusion.pasteleria.imageLabel': 'Taulell de La Fusió amb dolços, te i flors en primer pla',
    'fusion.flores.title': 'Flors',
    'fusion.flores.desc':
      "Color, natura i composicions que et pots endur. Vine a fer-te el teu ram, trobar aquell detall que buscaves o descobrir flors noves per a cada ocasió.",
    'fusion.flores.imageLabel': 'Taula amb flors i composicions florals de La Fusió',

    'pasteleria.eyebrow': 'Pastisseria artesanal',
    'pasteleria.title': 'La pastisseria és només el principi.',
    'pasteleria.imageLabel': 'Mini-postres amb fruits vermells i formatge cremós sobre galeta',
    'pasteleria.footnote': 'Carta subjecta a variacions de temporada.',
    'pasteleria.item1.name': 'Brioixeria',
    'pasteleria.item1.desc': 'Cada matí, acabada de fer al forn.',
    'pasteleria.item2.name': 'Pastisseria de temporada',
    'pasteleria.item2.desc': 'Creacions que canvien amb el calendari.',
    'pasteleria.item3.name': 'Pastissos i dolços',
    'pasteleria.item3.desc': 'Per compartir o per regalar.',
    'pasteleria.item4.name': 'Espresso',
    'pasteleria.item4.desc': 'Intens i directe, la base de tot.',
    'pasteleria.item5.name': 'Cafè amb llet',
    'pasteleria.item5.desc': "Suau i proper, per prendre'l amb calma.",

    'flores.eyebrow': 'Floristeria',
    'flores.title': 'Flors per a cada moment.',
    'flores.text':
      "Seleccions florals pensades per regalar, decorar o simplement endur-te una mica de natura.",
    'flores.tile1': 'Ram — selecció de temporada',
    'flores.tile2': 'Flor individual — detall',
    'flores.tile3': 'Composició floral',
    'flores.tile4': 'Detall botànic',
    'flores.tile5': 'Composició floral — barra',

    'visualimpact.eyebrow': 'La Fusió',
    'visualimpact.title': 'Pastisseria. Flors. Vida.',
    'visualimpact.imageLabel':
      'Fotografia panoràmica — pastisseria i flors, llum natural, interior La Fusió',

    'experience.eyebrow': "L'experiència La Fusió",
    'experience.title': 'No és només pastisseria.',
    'experience.line1': 'És aquell cafè i aquell dolç que gaudeixes sense mirar el rellotge.',
    'experience.line2': 'El ram que trobes per casualitat.',
    'experience.line3': "El lloc on entres per una cosa i acabes descobrint-ne una altra.",
    'experience.detailFloral': 'Detall floral',
    'experience.detailPasteleria': 'Detall de pastisseria',

    'products.eyebrow': 'Selecció',
    'products.title': 'Descobreix La Fusió',
    'products.subtitle': "Una mostra del que hi trobaràs. Fotografies i noms definitius, properament.",
    'products.footnote': "Llisca per veure'n més →",
    'products.imagePendingSuffix': 'imatge pendent',
    'products.item1.cat': 'Pastisseria',
    'products.item1.name': 'Pastisseria de temporada',
    'products.item2.cat': 'Flors',
    'products.item2.name': 'Ram de temporada',
    'products.item3.cat': 'Cafè',
    'products.item3.name': "Cafè d'especialitat",
    'products.item4.cat': 'Regals',
    'products.item4.name': 'Detall per regalar',
    'products.item5.cat': 'Flors',
    'products.item5.name': 'Composició floral',
    'products.item6.cat': 'Pastisseria',
    'products.item6.name': 'Selecció de brioixeria',

    'instagram.eyebrow': 'Instagram',
    'instagram.title': 'Segueix-nos a Instagram',
    'instagram.subtitle':
      'Descobreix la nostra pastisseria, flors, novetats i el dia a dia de La Fusió.',
    'instagram.cta': 'Veure Instagram',
    'instagram.tileLabel': "Publicació d'Instagram",

    'cta.eyebrow': "T'esperem",
    'cta.title': 'Vine a descobrir La Fusió.',
    'cta.text': 'Un dolç, unes flors o simplement un lloc on parar un moment.',
    'cta.primary': 'Com arribar-hi',
    'cta.secondary': 'Contacta amb nosaltres',
    'cta.imageLabel': 'Fotografia — façana o racó acollidor de La Fusió',

    'contact.eyebrow': "Visita'ns",
    'contact.title': "Vine a veure'ns.",
    'contact.info.address': 'Adreça',
    'contact.info.phone': 'Telèfon',
    'contact.info.email': 'Correu electrònic',
    'contact.info.instagram': 'Instagram',
    'contact.hours.title': 'Horaris',
    'contact.hours.consultar': 'Consultar',
    'contact.cta': 'Com arribar-hi',
    'contact.map.text': "Mapa — s'activarà amb Google Maps en confirmar la ubicació",
    'contact.placeholderAddress': 'Adreça per confirmar',
    'contact.placeholderPhone': 'Telèfon per confirmar',

    'hours.weekdays': 'Dilluns – Divendres',
    'hours.saturday': 'Dissabte',
    'hours.sunday': 'Diumenge',

    'footer.tagline':
      'Un espai on la pastisseria i les flors es troben. Vine a gaudir, descobrir i quedar-te una mica més.',
    'footer.nav.title': 'Navegació',
    'footer.contact.title': 'Contacte',
    'footer.hours.title': 'Horari',
    'footer.bigline': 'Pastisseria, flors i moments.',
    'footer.legal.privacy': 'Política de privacitat',
    'footer.legal.cookies': 'Cookies',
    'footer.legal.avisoLegal': 'Avís legal',
    'footer.legal.rights': 'Tots els drets reservats.',

    'legal.privacidad.title': 'Política de privacitat',
    'legal.privacidad.metaTitle': 'Política de privacitat — La Fusió',
    'legal.privacidad.metaDescription': 'Política de privacitat de La Fusió.',
    'legal.privacidad.body':
      "Aquest contingut està pendent de redacció legal definitiva. Aquí es detallarà com La Fusió recull, utilitza i protegeix les dades personals de les persones usuàries d'aquest lloc web.",

    'legal.cookies.title': 'Política de cookies',
    'legal.cookies.metaTitle': 'Política de cookies — La Fusió',
    'legal.cookies.metaDescription': 'Política de cookies de La Fusió.',
    'legal.cookies.body':
      "Aquest contingut està pendent de redacció legal definitiva. Aquí es detallaran les cookies utilitzades en aquest lloc web i com gestionar-les.",

    'legal.avisoLegal.title': 'Avís legal',
    'legal.avisoLegal.metaTitle': 'Avís legal — La Fusió',
    'legal.avisoLegal.metaDescription': 'Avís legal de La Fusió.',
    'legal.avisoLegal.body':
      "Aquest contingut està pendent de redacció legal definitiva. Aquí es detallarà la identificació del titular del lloc web i les condicions generals d'ús.",
  },
  es: {
    'site.title': 'La Fusió — Pastelería, flores y momentos.',
    'site.description':
      'La Fusió es un espacio que fusiona pastelería artesanal y floristería. Un lugar para disfrutar de nuestra pastelería, tomar un café, descubrir flores y quedarte un poco más.',

    'nav.fusion': 'La Fusió',
    'nav.pasteleria': 'Pastelería',
    'nav.flores': 'Flores',
    'nav.instagram': 'Instagram',
    'nav.visitanos': 'Visítanos',
    'nav.contacta': 'Contacta',

    'placeholder.photoPending': 'Foto pendiente',

    'a11y.skipToContent': 'Ir al contenido principal',
    'a11y.openMenu': 'Abrir menú',
    'a11y.closeMenu': 'Cerrar menú',
    'a11y.languageSwitcher': 'Cambiar idioma',

    'hero.eyebrow': 'Pastelería & Floristería',
    'hero.title': 'Pastelería, flores y momentos.',
    'hero.subtitle': 'Un lugar donde disfrutar de nuestra pastelería, tomar un café y descubrir flores.',
    'hero.cta.primary': 'Descubre La Fusió',
    'hero.cta.secondary': 'Visítanos',
    'hero.chip.pasteleria': 'Pastelería artesanal',
    'hero.chip.flores': 'Flores seleccionadas',
    'hero.chip.espacio': 'Un espacio para disfrutar',
    'hero.scrollCue': 'Descubre más',
    'hero.imageLabel': 'Fachada y entrada de La Fusió en Sant Celoni, rodeada de flores y plantas',

    'fusion.eyebrow': 'La fusión',
    'fusion.title1': 'Dos mundos.',
    'fusion.title2': 'Un mismo lugar.',
    'fusion.text':
      'La Fusió nace de la unión entre la pastelería y las flores. Un espacio pensado para disfrutar, desconectar y descubrir algo diferente en cada visita.',
    'fusion.pasteleria.title': 'Pastelería',
    'fusion.pasteleria.desc':
      'El sabor, el aroma y el arte de la repostería artesanal. Ven a desayunar, merendar o simplemente parar un momento y desconectar con un buen café.',
    'fusion.pasteleria.imageLabel': 'Mostrador de La Fusió con dulces, té y flores en primer plano',
    'fusion.flores.title': 'Flores',
    'fusion.flores.desc':
      'Color, naturaleza y composiciones que puedes llevarte. Ven a hacerte tu ramo, encontrar ese detalle que buscabas o descubrir flores nuevas para cada ocasión.',
    'fusion.flores.imageLabel': 'Mesa con flores y composiciones florales de La Fusió',

    'pasteleria.eyebrow': 'Pastelería artesanal',
    'pasteleria.title': 'La pastelería es solo el principio.',
    'pasteleria.imageLabel': 'Mini-postres con frutos rojos y queso cremoso sobre galleta',
    'pasteleria.footnote': 'Carta sujeta a variaciones de temporada.',
    'pasteleria.item1.name': 'Bollería',
    'pasteleria.item1.desc': 'Cada mañana, recién horneada.',
    'pasteleria.item2.name': 'Pastelería de temporada',
    'pasteleria.item2.desc': 'Creaciones que cambian con el calendario.',
    'pasteleria.item3.name': 'Tartas y dulces',
    'pasteleria.item3.desc': 'Para compartir o para regalar.',
    'pasteleria.item4.name': 'Espresso',
    'pasteleria.item4.desc': 'Intenso y directo, la base de todo.',
    'pasteleria.item5.name': 'Café con leche',
    'pasteleria.item5.desc': 'Suave y cercano, para tomarse con calma.',

    'flores.eyebrow': 'Floristería',
    'flores.title': 'Flores para cada momento.',
    'flores.text':
      'Selecciones florales pensadas para regalar, decorar o simplemente llevar un poco de naturaleza contigo.',
    'flores.tile1': 'Ramo — selección de temporada',
    'flores.tile2': 'Flor individual — detalle',
    'flores.tile3': 'Composición floral',
    'flores.tile4': 'Detalle botánico',
    'flores.tile5': 'Composición floral — barra',

    'visualimpact.eyebrow': 'La Fusió',
    'visualimpact.title': 'Pastelería. Flores. Vida.',
    'visualimpact.imageLabel':
      'Fotografía panorámica — pastelería y flores, luz natural, interior La Fusió',

    'experience.eyebrow': 'La experiencia La Fusió',
    'experience.title': 'No es solo pastelería.',
    'experience.line1': 'Es ese café y ese dulce que disfrutas sin mirar el reloj.',
    'experience.line2': 'El ramo que encuentras por casualidad.',
    'experience.line3': 'El lugar al que entras por una cosa y terminas descubriendo otra.',
    'experience.detailFloral': 'Detalle floral',
    'experience.detailPasteleria': 'Detalle de pastelería',

    'products.eyebrow': 'Selección',
    'products.title': 'Descubre La Fusió',
    'products.subtitle': 'Una muestra de lo que encontrarás. Fotografías y nombres definitivos, próximamente.',
    'products.footnote': 'Desliza para ver más →',
    'products.imagePendingSuffix': 'imagen pendiente',
    'products.item1.cat': 'Pastelería',
    'products.item1.name': 'Pastelería de temporada',
    'products.item2.cat': 'Flores',
    'products.item2.name': 'Ramo de temporada',
    'products.item3.cat': 'Café',
    'products.item3.name': 'Café de especialidad',
    'products.item4.cat': 'Regalos',
    'products.item4.name': 'Detalle para regalar',
    'products.item5.cat': 'Flores',
    'products.item5.name': 'Composición floral',
    'products.item6.cat': 'Pastelería',
    'products.item6.name': 'Selección de bollería',

    'instagram.eyebrow': 'Instagram',
    'instagram.title': 'Síguenos en Instagram',
    'instagram.subtitle':
      'Descubre nuestra pastelería, flores, novedades y el día a día de La Fusió.',
    'instagram.cta': 'Ver Instagram',
    'instagram.tileLabel': 'Publicación de Instagram',

    'cta.eyebrow': 'Te esperamos',
    'cta.title': 'Ven a descubrir La Fusió.',
    'cta.text': 'Un dulce, unas flores o simplemente un lugar donde parar un momento.',
    'cta.primary': 'Cómo llegar',
    'cta.secondary': 'Contacta con nosotros',
    'cta.imageLabel': 'Fotografía — fachada o rincón acogedor de La Fusió',

    'contact.eyebrow': 'Visítanos',
    'contact.title': 'Ven a vernos.',
    'contact.info.address': 'Dirección',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Email',
    'contact.info.instagram': 'Instagram',
    'contact.hours.title': 'Horarios',
    'contact.hours.consultar': 'Consultar',
    'contact.cta': 'Cómo llegar',
    'contact.map.text': 'Mapa — se activará con Google Maps al confirmar la ubicación',
    'contact.placeholderAddress': 'Dirección por confirmar',
    'contact.placeholderPhone': 'Teléfono por confirmar',

    'hours.weekdays': 'Lunes – Viernes',
    'hours.saturday': 'Sábado',
    'hours.sunday': 'Domingo',

    'footer.tagline':
      'Un espacio donde la pastelería y las flores se encuentran. Ven a disfrutar, descubrir y quedarte un poco más.',
    'footer.nav.title': 'Navegación',
    'footer.contact.title': 'Contacto',
    'footer.hours.title': 'Horario',
    'footer.bigline': 'Pastelería, flores y momentos.',
    'footer.legal.privacy': 'Política de privacidad',
    'footer.legal.cookies': 'Cookies',
    'footer.legal.avisoLegal': 'Aviso legal',
    'footer.legal.rights': 'Todos los derechos reservados.',

    'legal.privacidad.title': 'Política de privacidad',
    'legal.privacidad.metaTitle': 'Política de privacidad — La Fusió',
    'legal.privacidad.metaDescription': 'Política de privacidad de La Fusió.',
    'legal.privacidad.body':
      'Este contenido está pendiente de redacción legal definitiva. Aquí se detallará cómo La Fusió recoge, utiliza y protege los datos personales de las personas usuarias de este sitio web.',

    'legal.cookies.title': 'Política de cookies',
    'legal.cookies.metaTitle': 'Política de cookies — La Fusió',
    'legal.cookies.metaDescription': 'Política de cookies de La Fusió.',
    'legal.cookies.body':
      'Este contenido está pendiente de redacción legal definitiva. Aquí se detallarán las cookies utilizadas en este sitio web y cómo gestionarlas.',

    'legal.avisoLegal.title': 'Aviso legal',
    'legal.avisoLegal.metaTitle': 'Aviso legal — La Fusió',
    'legal.avisoLegal.metaDescription': 'Aviso legal de La Fusió.',
    'legal.avisoLegal.body':
      'Este contenido está pendiente de redacción legal definitiva. Aquí se detallará la identificación del titular del sitio web y las condiciones generales de uso.',
  },
} as const;

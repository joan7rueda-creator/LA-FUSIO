// Datos de contacto y negocio de La Fusió (independientes del idioma).
// TODO: sustituir cada placeholder por el dato real antes de publicar.
// Editar aquí actualiza automáticamente footer, cabecera, contacto y SEO estructurado.
// Los textos que sí varían según el idioma (p.ej. "Dirección por confirmar") viven en
// src/i18n/ui.ts, no aquí.

export const SITE = {
  name: 'La Fusió',

  contact: {
    // TODO: teléfono real.
    phone: '',
    // TODO: email real.
    email: 'hola@lafusio.com',
  },

  social: {
    // TODO: usuario real de Instagram.
    instagram: 'https://www.instagram.com/',
    instagramHandle: '@lafusio',
  },

  // TODO: horario real. Días sin franjas (`ranges`) se muestran con la etiqueta "consultar".
  // `dayKey` referencia una clave de traducción hours.* en src/i18n/ui.ts.
  hours: [
    { dayKey: 'weekdays', ranges: [] as [string, string][] },
    { dayKey: 'saturday', ranges: [] as [string, string][] },
    { dayKey: 'sunday', ranges: [] as [string, string][] },
  ],

  // Placeholder de mapa: estructura lista para sustituir por un iframe de Google
  // Maps (u otro proveedor) en cuanto tengamos la ubicación real. Ver Contact.astro.
  maps: {
    embedUrl: '',
    directionsUrl: '',
  },
} as const;

export type WeekDayKey = (typeof SITE.hours)[number]['dayKey'];

// Datos de contacto y negocio de La Fusió (independientes del idioma).
// Editar aquí actualiza automáticamente footer, cabecera, contacto y SEO estructurado.
// Los textos que sí varían según el idioma viven en src/i18n/ui.ts, no aquí.

const RAW_ADDRESS = 'Carrer Major, 37-39, Baixos, 08470 Sant Celoni, Barcelona';

export const SITE = {
  name: 'La Fusió',

  address: {
    street: 'Carrer Major, 37-39, Baixos',
    postalCode: '08470',
    city: 'Sant Celoni',
    region: 'Barcelona',
    country: 'ES',
    display: RAW_ADDRESS,
  },

  contact: {
    phone: '+34938676288',
    phoneDisplay: '938 67 62 88',
    email: 'hola@lafusio.com',
  },

  social: {
    // TODO: usuario real de Instagram.
    instagram: 'https://www.instagram.com/',
    instagramHandle: '@lafusio',
  },

  // Horario real. `dayKey` referencia una clave de traducción hours.* en src/i18n/ui.ts.
  // Días sin franjas (`ranges` vacío) se muestran con la etiqueta "Tancat"/"Cerrado".
  hours: [
    { dayKey: 'monday', ranges: [] as [string, string][] },
    { dayKey: 'tuesdayFriday', ranges: [['8:30', '13:00'], ['17:00', '20:00']] as [string, string][] },
    { dayKey: 'saturday', ranges: [['8:30', '14:00'], ['17:00', '20:00']] as [string, string][] },
    { dayKey: 'sunday', ranges: [['8:30', '14:00']] as [string, string][] },
  ],

  maps: {
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(RAW_ADDRESS)}&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RAW_ADDRESS)}`,
  },
} as const;

export type WeekDayKey = (typeof SITE.hours)[number]['dayKey'];

/** "8:30–13:00, 17:00–20:00" a partir de las franjas de un día. */
export function formatRanges(ranges: readonly (readonly [string, string])[]): string {
  return ranges.map(([open, close]) => `${open}–${close}`).join(', ');
}

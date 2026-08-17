// Datos de contacto y negocio de LAFUSIO.
// TODO: sustituir cada placeholder por el dato real antes de publicar.
// Editar aquí actualiza automáticamente footer, cabecera, contacto y SEO estructurado.

export const SITE = {
  name: 'LAFUSIO',
  tagline: 'Café, flores y momentos.',

  address: {
    // TODO: dirección real del local.
    display: 'Dirección por confirmar',
    city: '',
  },

  contact: {
    // TODO: teléfono real.
    phone: '',
    phoneDisplay: 'Teléfono por confirmar',
    // TODO: email real.
    email: 'hola@lafusio.com',
  },

  social: {
    // TODO: usuario real de Instagram.
    instagram: 'https://www.instagram.com/',
    instagramHandle: '@lafusio',
  },

  // TODO: horario real. Días sin franjas (`ranges`) se muestran como "Consultar".
  hours: [
    { day: 'Lunes – Viernes', ranges: [] as [string, string][] },
    { day: 'Sábado', ranges: [] as [string, string][] },
    { day: 'Domingo', ranges: [] as [string, string][] },
  ],

  // Placeholder de mapa: estructura lista para sustituir por un iframe de Google
  // Maps (u otro proveedor) en cuanto tengamos la ubicación real. Ver Contact.astro.
  maps: {
    embedUrl: '',
    directionsUrl: '',
  },
} as const;

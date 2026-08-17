// El `base` configurado en astro.config.mjs, siempre con barra final (p.ej. "/" o "/LA-FUSIO/").
export const BASE_URL = import.meta.env.BASE_URL;

/** Añade el `base` a una ruta interna absoluta, p.ej. withBase("privacidad/") -> "/LA-FUSIO/privacidad/". */
export function withBase(path: string): string {
  return BASE_URL + path.replace(/^\/+/, '');
}

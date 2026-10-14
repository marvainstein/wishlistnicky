/**
 * Conexión a Supabase para las reservas compartidas (proyecto propio de esta wishlist).
 * Son claves públicas (publishable): están pensadas para ir en el navegador.
 * Se pueden sobreescribir con VITE_SUPABASE_URL / VITE_SUPABASE_KEY.
 * Vacías = modo local (las reservas quedan solo en cada navegador).
 */
export const SUPABASE_URL: string = import.meta.env.VITE_SUPABASE_URL ?? '';

export const SUPABASE_KEY: string = import.meta.env.VITE_SUPABASE_KEY ?? '';

export const SUPABASE_READY = Boolean(SUPABASE_URL && SUPABASE_KEY);

/** Foto de fondo de toda la página (en /public). */
export const SCENE_IMAGE = 'scene/paisaje.jpg';

/** Foto del sol (en /public), recortada cuadrada y centrada en el sol. */
export const SUN_IMAGE = 'scene/sol.jpg';

/**
 * Cara que se superpone en el centro del sol (archivo en /public, por ejemplo
 * "scene/luli-sol.jpg"). Si queda vacío, se ve el sol de la foto tal cual.
 */
export const SUN_FACE: string | undefined = undefined;

/**
 * Canción que suena al entrar (archivo en /public). Si el archivo no existe,
 * la web funciona igual y el botón de música no aparece.
 */
export const MUSIC_SRC = 'audio/cancion.mp3';

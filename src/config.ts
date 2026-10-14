/**
 * Conexión a Supabase para las reservas compartidas (proyecto propio de esta wishlist).
 * Son claves públicas (publishable): están pensadas para ir en el navegador.
 * Se pueden sobreescribir con VITE_SUPABASE_URL / VITE_SUPABASE_KEY.
 * Vacías = modo local (las reservas quedan solo en cada navegador).
 */
export const SUPABASE_URL: string = import.meta.env.VITE_SUPABASE_URL ?? '';

export const SUPABASE_KEY: string = import.meta.env.VITE_SUPABASE_KEY ?? '';

export const SUPABASE_READY = Boolean(SUPABASE_URL && SUPABASE_KEY);

/** Tela de fondo de toda la página (en /public). Se repite como estampado. */
export const SCENE_IMAGE = 'scene/tela.jpg';

/** Lo que está "sacando" la cámara: se ve en su pantalla al entrar. */
export const LIVE_IMAGE = 'scene/lizy.webp';

/** La cámara rosa: PNG/WebP con la pantalla transparente (ahí se ven los regalos). */
export const CAMERA_IMAGE = 'scene/camara.webp';

/**
 * Canción que suena al entrar (archivo en /public). Si el archivo no existe,
 * la web funciona igual y el botón de música no aparece.
 */
export const MUSIC_SRC = 'audio/cancion.mp3';

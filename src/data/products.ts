/**
 * LA WISHLIST
 * ------------------------------------------------------------------
 * Para agregar, quitar o editar un regalo, tocá solo este archivo.
 * Las fotos van en /public/products/ y se referencian como "products/archivo.jpg".
 *
 * Campos:
 *  id        identificador único y estable (se usa para las reservas, no lo cambies
 *            una vez publicado o se pierde la reserva de ese regalo).
 *  name      nombre del regalo.
 *  image     foto principal.  imageAlt: descripción de la foto (accesibilidad).
 *  url       link para comprarlo (opcional; sin url no aparece el botón de compra).
 *  extra     un segundo producto que va junto (ej: la maceta de una planta):
 *            { name, url, image?, imageAlt? }. Se muestra con su foto chiquita y su link.
 *  linkLabel texto del botón del link si no es una tienda (ej: 'lo organizo yo').
 *  linkReserves true = tocar ese botón abre el link y además lo reserva para todos
 *            (reemplaza a "lo regalo yo"). linkLabelReserved: texto del link una vez reservado.
 *  note      nota personal (opcional).
 *  hearts    1 a 3 (opcional). En la web los corazones son decorativos e iguales
 *            para todos; este número solo ordena qué regalos vuelan en el hero.
 *  size      talle / variante a comprar (opcional).
 *  reservedBy si alguien ya lo tiene asignado (ej: 'reservado por mis suegros'):
 *            se muestra como reservado para todos, con ese texto, y no se puede reservar.
 *  category, description, price: opcionales; solo se muestran si existen.
 *  look      cómo se presenta en la web:
 *            variant  'hardware' | 'blister' | 'snapshot' | 'window'
 *                     (window es el formato genérico para regalos nuevos)
 *            color    color de plástico de la card
 *            sticker  texto corto del sticker (opcional)
 */

export type PlasticColor = 'tangerine' | 'blueberry' | 'lime' | 'grape' | 'strawberry' | 'bondi' | 'graphite';
export type CardVariant = 'hardware' | 'blister' | 'snapshot' | 'window';

export interface Product {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  /** true si la foto es provisoria (se muestra una etiqueta "foto provisoria") */
  imageIsPlaceholder?: boolean;
  url?: string;
  /** producto complementario que va con este (foto chica + link propio) */
  extra?: { name: string; url: string; image?: string; imageAlt?: string };
  /** texto del botón del link cuando no es "ir a comprar" */
  linkLabel?: string;
  linkLabelReserved?: string;
  /** el botón del link también reserva (sin paso de confirmación) */
  linkReserves?: boolean;
  note?: string;
  hearts?: 1 | 2 | 3;
  size?: string;
  /** ya asignado de antemano; el texto se muestra en el cartel */
  reservedBy?: string;
  category?: string;
  description?: string;
  price?: string;
  look?: {
    variant?: CardVariant;
    color?: PlasticColor;
    sticker?: string;
    /** foto con la saturación subida (y sin atenuar aunque esté reservada) */
    vivid?: boolean;
  };
}

export const products: Product[] = [
  // Sumá los regalos acá (ver el formato arriba).
];

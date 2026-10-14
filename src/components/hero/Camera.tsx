import { useState, type ReactNode } from 'react';
import type { Product } from '../../data/products';
import { CAMERA_IMAGE } from '../../config';

interface CameraProps {
  /** lo que se ve en la pantalla al entrar (lo que la cámara está sacando) */
  home: ReactNode;
  photos: Product[];
  onOpen: (id: string) => void;
}

/** Fecha estampada en naranja, como las cámaras digitales: '26 10 14 */
function dateStamp(d = new Date()) {
  const two = (n: number) => String(n).padStart(2, '0');
  return `'${two(d.getFullYear() % 100)} ${two(d.getMonth() + 1)} ${two(d.getDate())}`;
}

/**
 * La cámara rosa de la imagen. En su pantalla está lo que la cámara está sacando;
 * con las flechas de la cruceta se pasan las fotos de los regalos, DISP vuelve al
 * principio y el botón rosa del medio "saca la foto" (flash) y, si se ve un
 * regalo, lo abre.
 */
export function Camera({ home, photos, onOpen }: CameraProps) {
  // -1 = pantalla de inicio; 0..n-1 = fotos de los regalos
  const [i, setI] = useState(-1);
  const [shots, setShots] = useState(0);
  const n = photos.length;
  const current = i >= 0 ? photos[i] : null;

  // recorre: inicio -> regalo 1 -> ... -> regalo n -> inicio
  const go = (step: number) => setI((v) => ((v + 1 + step + n + 1) % (n + 1)) - 1);
  const shoot = () => {
    setShots((s) => s + 1);
    if (current) window.setTimeout(() => onOpen(current.id), 260);
  };

  return (
    <div className="cam">
      <div className="cam__screen">
        <div className={`cam__home${i < 0 ? ' is-on' : ''}`} aria-hidden={i >= 0}>
          {home}
        </div>
        {photos.map((p, k) => (
          <img key={p.id} className={`cam__photo${k === i ? ' is-on' : ''}`} src={p.image} alt="" loading="lazy" />
        ))}

        {/* lo que la cámara escribe encima */}
        <div className="cam__osd" aria-hidden="true">
          <span className="cam__rec">{current ? '▶ PLAY' : '● REC'}</span>
          {current && <span>{`${i + 1}/${n}`}</span>}
          <span className="cam__batt" />
        </div>
        {current && (
          <p className="cam__caption" aria-live="polite">
            {current.name}
          </p>
        )}
        <span className="cam__date" aria-hidden="true">
          {dateStamp()}
        </span>
        <span key={shots} className={`cam__flash${shots ? ' is-firing' : ''}`} aria-hidden="true" />
      </div>

      <img className="cam__body" src={CAMERA_IMAGE} alt="" />

      {/* botones reales encima de los dibujados */}
      {n > 0 && (
        <>
          <button type="button" className="cam__btn cam__btn--prev" onClick={() => go(-1)} aria-label="Foto anterior" />
          <button type="button" className="cam__btn cam__btn--next" onClick={() => go(1)} aria-label="Ver las fotos de los regalos" />
          <button type="button" className="cam__btn cam__btn--disp" onClick={() => setI(-1)} aria-label="Volver al inicio de la cámara" />
        </>
      )}
      <button
        type="button"
        className="cam__btn cam__btn--shutter"
        onClick={shoot}
        aria-label={current ? `Ver ${current.name}` : 'Sacar la foto'}
      />
      {n > 0 && (
        <span className="cam__hint cam__hint--photos sticker" data-color="blueberry" aria-hidden="true">
          ◀ ▶ ¡mirá las fotos!
        </span>
      )}
      <span className="cam__hint cam__hint--shoot sticker" data-color="lime" aria-hidden="true">
        ¡apretá!
      </span>
    </div>
  );
}

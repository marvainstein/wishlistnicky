import { useEffect, useState } from 'react';
import type { Product } from '../../data/products';
import { CAMERA_IMAGE } from '../../config';
import { Sparkle } from '../decor/Decor';

interface CameraProps {
  photos: Product[];
  onOpen: (id: string) => void;
}

/** Fecha estampada en naranja, como las cámaras digitales: '26 10 14 */
function dateStamp(d = new Date()) {
  const two = (n: number) => String(n).padStart(2, '0');
  return `'${two(d.getFullYear() % 100)} ${two(d.getMonth() + 1)} ${two(d.getDate())}`;
}

/**
 * La cámara rosa de la imagen: en su pantalla pasan las fotos de los regalos.
 * Las flechas de la cruceta cambian de foto y el botón rosa del medio "saca la foto"
 * (flash) y abre el regalo que se ve.
 */
export function Camera({ photos, onOpen }: CameraProps) {
  const [i, setI] = useState(0);
  const [shots, setShots] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = photos.length;
  const current = n ? photos[i % n] : null;

  // pasa sola cada tanto (salvo que la persona esté mirando o pida menos movimiento)
  useEffect(() => {
    if (n < 2 || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % n), 3800);
    return () => window.clearInterval(t);
  }, [n, paused]);

  const go = (step: number) => setI((v) => (v + step + n) % n);
  const shoot = () => {
    setShots((s) => s + 1);
    if (current) window.setTimeout(() => onOpen(current.id), 260);
  };

  return (
    <div
      className="cam"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="cam__screen">
        {n === 0 ? (
          <div className="cam__splash" aria-hidden="true">
            <Sparkle className="cam__spark cam__spark--1" />
            <Sparkle className="cam__spark cam__spark--2" />
            <span className="cam__splash-hi">¡ta-dah!</span>
            <span className="cam__splash-sub">acá van a aparecer los regalos</span>
          </div>
        ) : (
          photos.map((p, k) => (
            <img
              key={p.id}
              className={`cam__photo${k === i % n ? ' is-on' : ''}`}
              src={p.image}
              alt=""
              loading={k === 0 ? 'eager' : 'lazy'}
            />
          ))
        )}

        {/* lo que la cámara escribe encima de la foto */}
        <div className="cam__osd" aria-hidden="true">
          <span className="cam__rec">● PLAY</span>
          <span className="cam__count">{n ? `${(i % n) + 1}/${n}` : '0/0'}</span>
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
      {n > 1 && (
        <>
          <button type="button" className="cam__btn cam__btn--prev" onClick={() => go(-1)} aria-label="Foto anterior" />
          <button type="button" className="cam__btn cam__btn--next" onClick={() => go(1)} aria-label="Foto siguiente" />
        </>
      )}
      <button
        type="button"
        className="cam__btn cam__btn--shutter"
        onClick={shoot}
        aria-label={current ? `Ver ${current.name}` : 'Sacar una foto'}
      />
      <span className="cam__hint sticker" data-color="lime" aria-hidden="true">
        ¡apretá!
      </span>
    </div>
  );
}

import type { CSSProperties } from 'react';
import { SCENE_IMAGE } from '../../config';

/* Elementos decorativos (aria-hidden). */

/** La tela rosa de Lizzie, fija detrás de toda la página. */
export function Scene() {
  return <div className="scene" aria-hidden="true" style={{ backgroundImage: `url(${SCENE_IMAGE})` }} />;
}

export function PointerArrow({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={`pointer-arrow ${className}`} style={style} viewBox="0 0 22 26" aria-hidden="true">
      <path d="M2 2 L2 20 L7 15.5 L10.5 23 L14 21.5 L10.6 14.2 L17.5 14 Z" fill="#fff" stroke="#5c0f45" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function Sparkle({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={`sparkle ${className}`} style={style} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c.8 6.4 4.6 10.6 12 12-7.4 1.4-11.2 5.6-12 12-.8-6.4-4.6-10.6-12-12C7.4 10.6 11.2 6.4 12 0z" />
    </svg>
  );
}

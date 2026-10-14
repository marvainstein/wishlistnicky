import { useEffect, useState } from 'react';
import { Sparkle } from '../decor/Decor';
import { SCENE_IMAGE } from '../../config';
import './intro.css';

interface IntroGateProps {
  hasMusic: boolean;
  onEnter: (withSound: boolean) => void;
}

/**
 * Pantalla de entrada sobre la tela de Lizzie. Al tocar "¡entrar!" arranca la
 * música, si hay (el navegador necesita ese toque).
 */
export function IntroGate({ hasMusic, onEnter }: IntroGateProps) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('has-gate');
    return () => document.documentElement.classList.remove('has-gate');
  }, []);

  const enter = (withSound: boolean) => {
    if (leaving) return;
    setLeaving(true);
    onEnter(withSound);
  };

  return (
    <div
      className={`gate${leaving ? ' is-leaving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
      style={{
        backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0.2) 0 6deg, rgba(255, 255, 255, 0) 6deg 16deg), url(${SCENE_IMAGE})`,
      }}
    >
      <div className="gate__panel toon" data-color="strawberry">
        <Sparkle className="gate__spark gate__spark--1" />
        <Sparkle className="gate__spark gate__spark--2" />
        <p className="gate__kicker lcd">★ la wishlist de Nicky ★</p>
        <h1 id="gate-title" className="gate__title">
          ¡ta-dah!
        </h1>
        <button type="button" className="plastic-btn gate__enter" data-color="strawberry" onClick={() => enter(true)} autoFocus>
          ♡ {hasMusic ? '¡entrar con música!' : '¡entrar!'}
        </button>
        {hasMusic && (
          <button type="button" className="plastic-btn plastic-btn--ghost gate__quiet" onClick={() => enter(false)}>
            entrar sin sonido
          </button>
        )}
      </div>
    </div>
  );
}

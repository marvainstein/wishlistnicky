import type { Product } from '../../data/products';
import { Window } from '../ui/Window';
import { Sparkle } from '../decor/Decor';
import { Camera } from './Camera';
import { LIVE_IMAGE } from '../../config';
import './hero.css';

interface HeroProps {
  featured: Product[];
  total: number;
  reservedCount: number;
  onOpen: (id: string) => void;
}

export function Hero({ featured, total, reservedCount, onOpen }: HeroProps) {
  const progress = total ? Math.round((reservedCount / total) * 100) : 0;

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__stage">

        <Sparkle className="hero__spark hero__spark--1" />
        <Sparkle className="hero__spark hero__spark--2" />

        <Window
          title="¡hottie alert!"
          color="strawberry"
          className="hero__window"
          status={
            <>
              <span>{total} deseos · {reservedCount} reservados</span>
              <span>modo: diva ✦</span>
            </>
          }
        >
          <div className="hero__screen">
            <p className="hero__eyebrow lcd">
              <span>HELLO!</span>
              <span aria-hidden="true">★</span>
              <span>pasá nomás</span>
            </p>

            <h1 id="hero-title" className="hero__title">
              <span className="hero__word hero__word--wish" data-text="Wish">Wish</span>
              <span className="hero__word hero__word--list" data-text="list">list</span>
              <span className="hero__tag sticker" data-color="blueberry">de Nicky ♡</span>
            </h1>

            <p className="hero__lede">
              Una lista corta de cosas que me harían feliz. Si elegís una, reservala acá así nadie la repite.
            </p>

            <div className="hero__actions">
              <a href="#wishlist" className="plastic-btn" data-color="strawberry">
                <span aria-hidden="true">♡</span> ver la wishlist
              </a>
              <a href="#como" className="plastic-btn plastic-btn--ghost">
                ¿cómo reservo?
              </a>
            </div>

            <div className="hero__meter" aria-label={`${reservedCount} de ${total} regalos reservados`}>
              <span className="hero__meter-label">reservados</span>
              <span className="hero__meter-track" aria-hidden="true">
                <span className="hero__meter-fill" style={{ width: `${progress}%` }} />
              </span>
              <span className="hero__meter-num">
                {reservedCount}/{total}
              </span>
            </div>
          </div>
        </Window>

        <Camera
          photos={featured}
          onOpen={onOpen}
          home={
            <div className="cam__live">
              <img src={LIVE_IMAGE} alt="Lizy Tagliani sonriendo, en la pantalla de la cámara" />
              <span className="cam__af" aria-hidden="true" />
            </div>
          }
        />
      </div>

    </section>
  );
}

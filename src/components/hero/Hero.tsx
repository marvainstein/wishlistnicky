import type { Product } from '../../data/products';
import { Sparkle } from '../decor/Decor';
import { Camera } from './Camera';
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

        <Camera
          photos={featured}
          onOpen={onOpen}
          home={
            <div className="hero__screen">
              <h1 id="hero-title" className="hero__title">
                <span className="hero__word hero__word--wish" data-text="Wish">Wish</span>
                <span className="hero__word hero__word--list" data-text="list">list</span>
                <span className="hero__tag sticker" data-color="blueberry">de Nicky ♡</span>
              </h1>

              <p className="hero__lede">
                Cosas que me harían feliz. Si elegís una, reservala acá así nadie la repite.
              </p>

              <a href="#wishlist" className="plastic-btn plastic-btn--sm hero__go" data-color="strawberry">
                <span aria-hidden="true">♡</span> ver la wishlist
              </a>

              <div className="hero__meter" aria-label={`${reservedCount} de ${total} regalos reservados`}>
                <span className="hero__meter-track" aria-hidden="true">
                  <span className="hero__meter-fill" style={{ width: `${progress}%` }} />
                </span>
                <span className="hero__meter-num">
                  {reservedCount}/{total} reservados
                </span>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}

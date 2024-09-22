import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedGame: React.FC = () => {
  return (
    <section className="featured-game">
      <div className="container">
        <img src="tropical-match.jpg" alt="Tropical Match" />
        <h2>Tropical Match</h2>
        <p>Cennet adada 3'lü eşleştirme eğlencesi!</p>
        <Link to="/oyun?game=tropical-match" className="play-button">Oyna</Link>
      </div>
    </section>
  );
}

export default FeaturedGame;
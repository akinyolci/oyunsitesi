import React from 'react';
import { Link } from 'react-router-dom';

interface GameItemProps {
  game: {
    id: string;
    game_category: string;
    gameId: string;
    game_name: string;
    game_url: string;
    game_image_url: string;
  };
}



const GameItem: React.FC<GameItemProps> = ({ game }) => {
    const imageSrc = require(`../images/${game.game_image_url}`); 

  return (
    <div className="game-item">
      <div className="game-image-container">
        <img src={imageSrc} alt={game.game_name} className="game-image" />
      </div>
      <h3>{game.game_name}</h3>
      <Link to={`/oyun?game=${game.gameId}&url=${encodeURIComponent(game.game_url)}`} className="play-button">
        Oyna
      </Link>
    </div>
  );
}

export default GameItem;
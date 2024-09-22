import React from 'react';
import { Grid } from '@mui/material';
import GameItem from './GameItem';
import { useGameState } from '../context/GameContext';

const GameList: React.FC = () => {
  const { games, loading, error } = useGameState();

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <Grid container spacing={2}>
      {games.map((game) => (
        <Grid item xs={6} sm={4} md={2} lg={1.33} key={game.id}>
          <GameItem game={game} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GameList;
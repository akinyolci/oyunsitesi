import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { GameProvider } from './context/GameContext';
import Header from './components/Header';
import FeaturedGame from './components/FeaturedGame';
import GameList from './components/GameList';
import GamePage from './components/GamePage';
import Footer from './components/Footer';
import CategoryGameList from './components/CategoryGameList';
import OtherCategories from './components/OtherCategories';

const App: React.FC = () => {
  return (
    <GameProvider>
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Box sx={{ py: 4 }}>
              <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
                  Önerilen Oyunlar
                </Typography>
                <GameList />
              </Container>
            </Box>
            <Box sx={{ py: 4, backgroundColor: '#f5f5f5' }}>
              <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
                  En İyi Oyunlar
                </Typography>
                <GameList />
              </Container>
            </Box>
            <CategoryGameList />
            <OtherCategories />
          </main>
        } />
        <Route path="/oyun" element={<GamePage />} />
      </Routes>
      <Footer />
    </GameProvider>
  );
}

export default App;
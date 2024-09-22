import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import Header from './Header';
import CategoryGameList from './CategoryGameList';
import OtherCategories from './OtherCategories';

const GamePage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const url = params.get('url');

  return (
    <main>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          {url ? (
            <Box sx={{ width: '100%', height: '600px', position: 'relative', mb: 4 }}>
              <iframe
                id="game-frame"
                src={url}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allowFullScreen
              ></iframe>
            </Box>
          ) : (
            <Typography variant="h6" align="center" sx={{ mb: 4 }}>
              Oyun URL'si bulunamadı.
            </Typography>
          )}
          <Box sx={{ mb: 4 }}>
            <CategoryGameList />
          </Box>
          <Box>
            <OtherCategories />
          </Box>
        </Box>
      </Container>
    </main>
  );
}

export default GamePage;
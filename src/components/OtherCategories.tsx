import React from 'react';
import { Box, Typography, Chip, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const categories = [
  '.io Games', '1001', '2 Kişilik', 'Almanca', 'App Games', 'Araba Yarışı', 'Arcade', 'At', 'Ateş ve Su', 'Baloncular',
  'Basketbol', 'Bilardo', 'Bilgi Yarışması', 'Blok', 'Bombacı', 'Bowling', 'Boyama', 'Bulmaca', 'Dart', 'Dövüş',
  'Erkek Oyunları', 'Flash Oyunlar', 'Flipper', 'Giysi', 'Gizli Nesne', 'Golf', 'HTML5 Oyunları', 'Halloween', 'Hapis',
  'Hayvanlar', 'Idle ve Clicker', 'Kabarcık Zinciri', 'Kamyon', 'Makyaj ve Süs', 'Masa Oyunları', 'Matematik', 'Maymun',
  'Maymuncuklar', 'Merge', 'Minecraft', 'Mobil Oyunlar', 'Motorsiklet', 'Okul Öncesi', 'Otobüs', "Papa's Oyunları",
  'Paskalya', 'Poker', 'Polis', 'Reaksiyon', 'Restoran ve Otel', 'Sevgi', 'Silah', 'Simülasyon', 'Snake', 'Solitaire',
  'Solucan', 'Tarayıcı Bazında', 'Tetris', 'Tren', 'Triple Tile', 'Uçma', 'Yaz', 'Yemek ve Pasta', 'Yeniyıl', 'Çiftlik',
  'Öğretici', 'Üçünü Birleştir', 'Üçünü Eşleştirme', 'İşaretle ve Tıkla', 'İşletme'
];

const OtherCategories: React.FC = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#4a90e2', mb: 3 }}>
          Diğer Kategoriler
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              component={Link}
              to={`/kategori/${encodeURIComponent(category)}`}
              clickable
              sx={{
                backgroundColor: '#e0e0e0',
                '&:hover': {
                  backgroundColor: '#bdbdbd',
                },
                m: 0.5
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default OtherCategories;
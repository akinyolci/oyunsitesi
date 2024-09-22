import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

interface Game {
  id: string;
  name: string;
  image: string;
  url: string;
  ageLimit: string;
}

interface Category {
  name: string;
  games: Game[];
}

const categories: Category[] = [
  {
    name: 'Araba Oyunları',
    games: [
      { id: 'oyun1', name: 'Araba Oyunu 1', image: 'ates-ve-su.jpg', url: '/oyun1', ageLimit: '6+' },
      { id: 'oyun2', name: 'Araba Oyunu 2', image: 'ates-ve-su.jpg', url: '/oyun2', ageLimit: '12+' },
    ]
  },
  {
    name: 'Kız Oyunları',
    games: [
      { id: 'oyun3', name: 'Kız Oyunu 1', image: 'ates-ve-su.jpg', url: '/oyun3', ageLimit: '0+' },
      { id: 'oyun4', name: 'Kız Oyunu 2', image: 'ates-ve-su.jpg', url: '/oyun4', ageLimit: '0+' },
    ]
  },
  // Diğer kategorileri buraya ekleyin
];

const CategoryGameList: React.FC = () => {
  return (
    <Box className="category-game-list">
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Kategoriler
        </Typography>
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.name}>
              <Card className="category-card">
                <CardContent className="category-card-content">
                  <Typography variant="h6" component="div" gutterBottom>
                    {category.name}
                  </Typography>
                  <Box className="category-games">
                    {category.games.slice(0, 4).map((game) => (
                      <Box key={game.id} className="category-game-item">
                        <CardMedia
                          component="img"
                          image={require(`../images/${game.image}`)}
                          alt={game.name}
                        />
                        <Typography
                          variant="caption"
                          className="age-limit"
                        >
                          {game.ageLimit}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button size="small" component={Link} to={`/kategori/${category.name}`} className="more-button">
                    Daha Fazla &gt;
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CategoryGameList;
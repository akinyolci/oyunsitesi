import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; // Logo dosya yolunu doğru şekilde ayarlayın

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#ff9800', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={logo} alt="Webte Oyna Logo" style={{ width: '100px' }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Oyun Kategorileri
            </Typography>
            <Box>
              <MuiLink component={Link} to="/iki-kisilik-oyunlar" color="inherit">İki Kişilik Oyunlar</MuiLink>
            </Box>
            <Box>
              <MuiLink component={Link} to="/lifestyle" color="inherit">Lifestyle</MuiLink>
            </Box>
            <Box>
              <MuiLink component={Link} to="/zeka" color="inherit">Zeka Oyunları</MuiLink>
            </Box>
            <Box>
              <MuiLink component={Link} to="/cocuk" color="inherit">Çocuk Oyunları</MuiLink>
            </Box>
            <Box>
              <MuiLink component={Link} to="/macera" color="inherit">Macera Oyunları</MuiLink>
            </Box>
            <Box>
              <MuiLink component={Link} to="/yaris" color="inherit">Yarış Oyunları</MuiLink>
            </Box>
            <Box>
              <MuiLink component={Link} to="/savas" color="inherit">Savaş Oyunları</MuiLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Şirket Bilgisi
            </Typography>
            <Box>
              <MuiLink href="#" color="inherit">Kullanım Koşulları</MuiLink>
            </Box>
            <Box>
              <MuiLink href="#" color="inherit">Gizlilik İlkesi</MuiLink>
            </Box>
            <Box>
              <MuiLink href="#" color="inherit">Çerezler</MuiLink>
            </Box>
            <Box>
              <MuiLink href="#" color="inherit">Çerez Onayı</MuiLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Destek
            </Typography>
            <Box>
              <MuiLink href="#" color="inherit">Yardım</MuiLink>
            </Box>
            <Box>
              <MuiLink href="#" color="inherit">İletişim</MuiLink>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Webte Oyna. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
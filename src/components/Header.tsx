import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.png';
const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ff9800' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}> {/* Toolbar içeriğini iki yana yaymak için justifyContent eklendi */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Logo ve menü öğelerini hizalamak için alignItems  */}
        <Link to="/"> {/* Link eklendi */}
          <img src={logo} alt="Webte Oyna Logo" style={{ width: '100px' }} />
        </Link>
      </Box>        
        {/* Masaüstü menü elemanları */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}> {/* Menü öğelerini hizalamak için alignItems eklendi */}
          <Button color="inherit" component={Link} to="/">Ana Sayfa</Button>
          <Button color="inherit" component={Link} to="/iki-kisilik-oyunlar">İki Kişilik Oyunlar</Button>
          <Button color="inherit" component={Link} to="/lifestyle">Lifestyle</Button>
          <Button color="inherit" component={Link} to="/zeka">Zeka Oyunları</Button>
          <Button color="inherit" component={Link} to="/cocuk">Çocuk Oyunları</Button>
          <Button color="inherit" component={Link} to="/macera">Macera Oyunları</Button>
          <Button color="inherit" component={Link} to="/yaris">Yarış Oyunları</Button>
          <Button color="inherit" component={Link} to="/savas">Savaş Oyunları</Button>
        </Box>

        {/* Mobil menü ikonu */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleMenuClick}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobil menü */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Ana Sayfa</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/iki-kisilik-oyunlar" style={{ textDecoration: 'none', color: 'black' }}>İki Kişilik Oyunlar</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/lifestyle" style={{ textDecoration: 'none', color: 'black' }}>Lifestyle</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/zeka" style={{ textDecoration: 'none', color: 'black' }}>Zeka Oyunları</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/cocuk" style={{ textDecoration: 'none', color: 'black' }}>Çocuk Oyunları</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/macera" style={{ textDecoration: 'none', color: 'black' }}>Macera Oyunları</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/yaris" style={{ textDecoration: 'none', color: 'black' }}>Yarış Oyunları</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/savas" style={{ textDecoration: 'none', color: 'black' }}>Savaş Oyunları</Link>
          </MenuItem>
        </Menu>

        {/* Arama Çubuğu */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Ara..."
          sx={{ 
            marginLeft: 2, 
            backgroundColor: 'white',
            display: { xs: 'none', md: 'block' } // Bu satırı ekleyin
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;


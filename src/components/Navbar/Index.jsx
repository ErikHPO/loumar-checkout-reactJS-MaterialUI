import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockIcon from '@mui/icons-material/Lock';
import logo from '../../assets/logo-loumar.webp'
import checkoutSeguro from '../../assets/checkout-seguro-yellow.png'

function ResponsiveAppBar() {

  return (
    <AppBar position="static" sx={{ 
      height: '80px',
      justifyContent: 'center',
     }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* add logo img here*/}
          <img src={logo} alt="logo" style={{ width: '180px' }} />

          {/* <LockIcon sx={{ display: { xs: 'flex', md: 'flex', color: '#EFB73A' }, ml: 2 }} /> */}
          <img src={checkoutSeguro} alt="checkout seguro" style={{ width: '150px', marginLeft: '1.5rem' }} />

          
          

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

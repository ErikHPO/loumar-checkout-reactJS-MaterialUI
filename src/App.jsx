import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Index'
import Checkout from './view/Checkout'
import Footer from './components/Footer/Index'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider, useTheme } from '@emotion/react'
import { Container, useMediaQuery } from '@mui/material'

const theme = createTheme({
  overrides: {
    MuiContainer: {
      root: {
        "&.checkout": {
          display: 'flex',
          backgroundColor: 'red',
          padding: '0',
        }
      }
    }
  },
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      darker: '#192C52',
      main: '#1E3460',
      light: '#1E3460'
    },
    secondary: {
      main: '#048189',
      light: '#04818960'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
      grey: '#E8E8E8',
    },
    checkout:{
      main: '#01BB00'
    }
  },
  stepper:{
    root: {
      width: "100%",
    },
    mobileStepper: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      backgroundColor: 'red',
    },
  }
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

      <Navbar/>
      <Container className="checkout" id="checkout-container" >
        <Checkout/>
      </Container>
      <Footer/>

      </ThemeProvider>
    </div>
  )
}

export default App

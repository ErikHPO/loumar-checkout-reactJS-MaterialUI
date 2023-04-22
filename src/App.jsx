import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Index'
import Checkout from './view/Checkout'
import Footer from './components/Footer/Index'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react'
import { Container } from '@mui/material'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      darker: '#192C52',
      main: '#1E3460',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    checkout:{
      main: '#01BB00'
    }
  },
});


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>

      <Navbar/>
      <Container maxWidth='lg' className="checkout" >
        <Checkout/>
      </Container>
      <Footer/>

      </ThemeProvider>
    </div>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar/Index'
import Checkout from './view/Checkout'
import Footer from './components/Footer/Index'
import { ThemeProvider,  } from '@emotion/react'
import { Container,  } from '@mui/material'
import {theme} from './utils/theme'


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

import { useState }  from 'react'

import { AppContainer } from './App.style'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Contact from './components/Contact'
import Footer from './components/Footer'

const MainPage = () => {

  return (
    <AppContainer>
      <Home />
      <About />
      <Contact />
      <Footer />
    </AppContainer>
  )
}

export default MainPage
import { AppContainer } from './App.style'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const MainPage = () => {

  return (
    <AppContainer>
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </AppContainer>
  )
}

export default MainPage
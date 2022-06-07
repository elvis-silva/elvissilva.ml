import { AppContainer } from './App.style'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const MainPage = () => {

  return (
    <AppContainer data-testid='main-page'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </AppContainer>
  )
}

export default MainPage
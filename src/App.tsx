import { AppContainer } from './App.style'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Header />
      <Features />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </AppContainer>
  )
}

export default App

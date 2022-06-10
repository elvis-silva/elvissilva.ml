import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import MainPage from './MainPage'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Router>
        <Navbar toggle={toggle}/>
        <NavbarMobile isOpen={isOpen} toggle={toggle}/>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Router>    
    </>    
  )
}

export default App

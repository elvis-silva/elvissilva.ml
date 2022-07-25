import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../components/Navbar'

const toggle = () => { /* toggle */ }

test('show navbar on app', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let navbar = screen.getByTestId('navbar')
  expect(navbar).toBeInTheDocument()
})

test('show menu container on navbar', () => {  
  render(<Router><Navbar toggle={toggle}/></Router>)
  let container = screen.getByTestId('container')
  expect(container).toBeInTheDocument()
})

test('show hamburger in navbar', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let hamburger = screen.getByTestId('hamburger')
  expect(hamburger).toBeInTheDocument()
})

test('show logo on navbar', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let logo = screen.getByTestId('logo')
  expect(logo).toBeInTheDocument()
})

test('show nav-menu on navbar', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let navMenu = screen.getByTestId('nav-menu')
  expect(navMenu).toBeInTheDocument()
})

test('show menu-inicio on navbar', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let menuInicio = screen.getByTestId('menu-inicio')
  expect(menuInicio).toBeInTheDocument()
})

test('show link-inicio on navbar', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let linkInicio = screen.getByTestId('link-inicio')
  expect(linkInicio).toBeInTheDocument()
})

test('show menu-sobre on navbar', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let menuSobre = screen.getByTestId('menu-sobre')
  expect(menuSobre).toBeInTheDocument()
})

test('show link-sobre on navbar', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let linkSobre = screen.getByTestId('link-sobre')
  expect(linkSobre).toBeInTheDocument()
})

test('show menu-skills on navbar', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let menuSkills = screen.getByTestId('menu-skills')
  expect(menuSkills).toBeInTheDocument()
})

test('show link-skills on navbar', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let linkSkills = screen.getByTestId('link-skills')
  expect(linkSkills).toBeInTheDocument()
})

// test('show menu-projetos on navbar', () => {
//   render(<Router><Navbar toggle={toggle}/></Router>)
//   let menuProjetos = screen.getByTestId('menu-projetos')
//   expect(menuProjetos).toBeInTheDocument()
// })

// test('show link-projetos on navbar', () => {
//   render(<Router><Navbar toggle={toggle}/></Router>)
//   let linkProjetos = screen.getByTestId('link-projetos')
//   expect(linkProjetos).toBeInTheDocument()
// })

test('show menu-contato on navbar', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let menuContato = screen.getByTestId('menu-contato')
  expect(menuContato).toBeInTheDocument()
})

test('show link-contato on navbar', () => {
  render(<Router><Navbar toggle={toggle}/></Router>)
  let linkContato = screen.getByTestId('link-contato')
  expect(linkContato).toBeInTheDocument()
})

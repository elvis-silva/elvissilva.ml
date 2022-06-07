import { render, screen } from '@testing-library/react'
import App from '../App'

test('show main page in document', () => {
  render(<App />)
  let mainPage = screen.getByTestId(/main-page/i)
  expect(mainPage).toBeInTheDocument()
})

test('show navbar component in the app', () => {
  render(<App />)
  let navbar = screen.getByTestId('navbar')
  expect(navbar).toBeInTheDocument()
})

test('show home component in the app', () => {
  render(<App />)
  let home = screen.getByTestId('home')
  expect(home).toBeInTheDocument()
})

test('show about component in the app', () => {
  render(<App />)
  let about = screen.getByTestId('about')
  expect(about).toBeInTheDocument()
})

test('show skills component in the app', () => {
  render(<App />)
  let skills = screen.getByTestId('skills')
  expect(skills).toBeInTheDocument()
})

test('show projects component in the app', () => {
  render(<App />)
  let projects = screen.getByTestId('projects')
  expect(projects).toBeInTheDocument()
})

test('show contact component in the app', () => {
  render(<App />)
  let contact = screen.getByTestId('contact')
  expect(contact).toBeInTheDocument()
})

test('show footer component in the app', () => {
  render(<App />)
  let footer = screen.getByTestId('footer')
  expect(footer).toBeInTheDocument()
})
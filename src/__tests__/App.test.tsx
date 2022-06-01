import { render, screen } from '@testing-library/react'
import App from '../App'

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
import { render, screen } from '@testing-library/react'
import App from '../App'

test('show navigation component in the app', () => {
  render(<App />)
  let navigation = screen.getByTestId('navigation')
  expect(navigation).toBeInTheDocument()
})

test('show header component in the app', () => {
  render(<App />);
  let headerComponent = screen.getByTestId('header')
  expect(headerComponent).toBeInTheDocument()
});

test('show features component in the app', () => {
  render(<App />)
  let features = screen.getByTestId('features')
  expect(features).toBeInTheDocument()
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

test('show gallery component in the app', () => {
  render(<App />)
  let gallery = screen.getByTestId('gallery')
  expect(gallery).toBeInTheDocument()
})

test('show contact compentent in the app', () => {
  render(<App />)
  let contact = screen.getByTestId('contact')
  expect(contact).toBeInTheDocument()
})

test('show footer component in the app', () => {
  render(<App />)
  let footer = screen.getByTestId('footer')
  expect(footer).toBeInTheDocument()
})
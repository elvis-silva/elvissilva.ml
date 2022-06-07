import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

test('show footer on document', () => {
  render(<Footer />)
  let footer = screen.getByTestId(/footer/i)
  expect(footer).toBeInTheDocument()
})

test('show desenvolvido por elvis silva', () => {
  render(<Footer />)
  let devFrom = screen.getByTestId(/dev-from/i)
  expect(devFrom).toBeInTheDocument()
})

test('show copyright text', () => {
  render(<Footer />)
  let copyright = screen.getByTestId(/copyright/i)
  expect(copyright).toBeInTheDocument()
})
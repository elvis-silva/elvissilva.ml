import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

test('show desenvolvido por elvis silva', () => {
  render(<Footer />)
  let title = screen.getByText(/desenvolvido por elvis silva/i)
  expect(title).toBeInTheDocument()
})

test('show copyright text', () => {
  render(<Footer />)
  let text = screen.getByText(/copyright/i)
  expect(text).toBeInTheDocument()
})
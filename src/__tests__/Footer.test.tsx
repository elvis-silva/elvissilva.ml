import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

test('show footer', () => {
  render(<Footer />)
  let title = screen.getByText(/footer/i)
  expect(title).toBeInTheDocument()
})
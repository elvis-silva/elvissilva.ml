import { render, screen } from '@testing-library/react'
import About from '../components/About'

test('show about', () => {
  render(<About />)
  let title = screen.getByText(/sobre mim/i)
  expect(title).toBeInTheDocument()
})

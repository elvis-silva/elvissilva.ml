import { render, screen } from '@testing-library/react'
import Gallery from '../components/Gallery'

test('show gallery', () => {
  render(<Gallery />)
  let title = screen.getByText(/galeria/i)
  expect(title).toBeInTheDocument()
})
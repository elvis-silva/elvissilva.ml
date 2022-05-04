import { render, screen } from '@testing-library/react'
import Navigation from '../components/Navigation'

test('show logo in the document', () => {
  render(<Navigation />)
  let logo = screen.getByAltText(/logo/i)
  expect(logo).toBeInTheDocument()
})
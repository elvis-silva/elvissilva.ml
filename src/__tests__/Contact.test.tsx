import { render, screen } from '@testing-library/react'
import Contact from '../components/Contact'

test('show Contato', () => {
  render(<Contact />)
  let title = screen.getByText(/contato/i)
  expect(title).toBeInTheDocument()
})
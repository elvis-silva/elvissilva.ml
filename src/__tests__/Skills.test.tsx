import { render, screen } from '@testing-library/react'
import Skills from '../components/Skills'

test('show skill component in document', () => {
  render(<Skills />)
  let skill = screen.getByTestId(/skill/i)
  expect(skill).toBeInTheDocument()
})
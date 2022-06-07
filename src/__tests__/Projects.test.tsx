import { render, screen } from '@testing-library/react'
import Projects from '../components/Projects'

test('show project component in document', () => {
  render(<Projects />)
  let project = screen.getByTestId(/project/i)
  expect(project).toBeInTheDocument()
})
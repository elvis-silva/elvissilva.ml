import { render, screen } from '@testing-library/react'
import Skills from '../components/Skills'

test('show skills component in document', () => {
  render(<Skills />)
  let skill = screen.getByTestId(/skill/i)
  expect(skill).toBeInTheDocument()
})

test('show container in document', () => {
  render(<Skills />)
  let container = screen.getByTestId(/container/i)
  expect(container).toBeInTheDocument()
})

test('show title in document', () => {
  render(<Skills />)
  let title = screen.getByTestId(/title/i)
  expect(title).toBeInTheDocument()
})

test('show texts in document', () => {
  render(<Skills />)
  let text = screen.getByTestId(/text/i)
  expect(text).toBeInTheDocument()
})

// test('show sphere container in document', () => {
//   render(<Skills />)
//   let sphereContainer = screen.getByTestId(/sphere-container/i)
//   expect(sphereContainer).toBeInTheDocument()
// })

// test('show sphere skills in document', () => {
//   render(<Skills />)
//   let sphereSkills = screen.getByTestId(/sphere-skills/i)
//   expect(sphereSkills).toBeInTheDocument()
// })
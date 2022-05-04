import { render, screen } from '@testing-library/react'
import Features from '../components/Features'

test('show feature in the document', () => {
  render(<Features/>)
  let feature = screen.getByTestId('features')
  expect(feature).toBeInTheDocument()
})
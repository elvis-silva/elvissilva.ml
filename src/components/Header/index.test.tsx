import { render, screen } from "@testing-library/react"
import Header from "./index"

test('show elvis silva header in the document', () => {
  render(<Header />)
  let header = screen.getByTestId('header')
  expect(header).toBeInTheDocument()
})
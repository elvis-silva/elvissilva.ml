import { screen, render } from "@testing-library/react"
import Home from '../components/Home'

test('show home component', () => {
  render(<Home />)
  let home = screen.getByTestId('home')
  expect(home).toBeInTheDocument()
})
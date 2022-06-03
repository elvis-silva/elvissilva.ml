import { render, screen } from '@testing-library/react'
import Contact from '../components/Contact'

test('show Contato', () => {
  render(<Contact />)
  let title = screen.getByTestId(/contact/i)
  expect(title).toBeInTheDocument()
})

test('show left container on document', () => {
  render(<Contact />)
  let leftContainer = screen.getByTestId(/left-container/i)
  expect(leftContainer).toBeInTheDocument()
})

test('show title in document', ()=> {
  render(<Contact />)
  let title = screen.getByTestId(/title/i)
  expect(title).toBeInTheDocument()
})

test('show form in document', ()=> {
  render(<Contact />)
  let form = screen.getByTestId(/form/i)
  expect(form).toBeInTheDocument()
})

test('show person info in document', ()=> {
  render(<Contact />)
  let personInfo = screen.getByTestId(/person-info/i)
  expect(personInfo).toBeInTheDocument()
})

test('show input name in document', ()=> {
  render(<Contact />)
  let inputName = screen.getByTestId(/input-name/i)
  expect(inputName).toBeInTheDocument()
})

test('show input email in document', ()=> {
  render(<Contact />)
  let inputEmail = screen.getByTestId(/input-email/i)
  expect(inputEmail).toBeInTheDocument()
})

test('show input message in document', ()=> {
  render(<Contact />)
  let inputMessage = screen.getByTestId(/input-message/i)
  expect(inputMessage).toBeInTheDocument()
})

test('show text message in document', ()=> {
  render(<Contact />)
  let textMessage = screen.getByTestId(/text-message/i)
  expect(textMessage).toBeInTheDocument()
})

test('show submit row in document', ()=> {
  render(<Contact />)
  let submitRow = screen.getByTestId(/submit-row/i)
  expect(submitRow).toBeInTheDocument()
})

test('show submit button in document', ()=> {
  render(<Contact />)
  let submitButton = screen.getByTestId(/submit-button/i)
  expect(submitButton).toBeInTheDocument()
})
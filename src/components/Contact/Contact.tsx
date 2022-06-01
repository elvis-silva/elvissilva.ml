import { ContactBody, Form, Input, LeftContainer, Message, PersonInfo, SubmitButton, SubmitRow } from './style'
import { StyledHeading } from '../About/style'

const Contact = () => {
  return (
    <ContactBody data-testid='contact'>
      <LeftContainer>
        <StyledHeading>Contato</StyledHeading>
        <Form 
          method='POST'
          action='send'
          encType='multipart/form-data'
          onSubmit={() => console.log('submit')}
        >
          <PersonInfo>
            <Input 
              name='name'
              placeholder='Seu nome'
              onChange={() => console.log('change name')}
              required
            />
            <Input 
              name='email'
              placeholder='seu@email.com'
              onChange={() => console.log('change email')}
              required
            />
          </PersonInfo>
          <Input 
            name='subject'
            placeholder='Assunto'
            onChange={() => console.log('change subject')}
            required
          />
          <Message 
            name='message'
            placeholder='Digite sua mensagem aqui'
            onChange={() => console.log('change message')}
            required
          />
        </Form>
        <SubmitRow>
          <SubmitButton onClick={() => console.log('submit')} type='submit' value='Enviar'>Enviar</SubmitButton>
        </SubmitRow>
      </LeftContainer>
    </ContactBody>
  )
}

export default Contact
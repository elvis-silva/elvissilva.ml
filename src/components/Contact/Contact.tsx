import { StyledHeading } from '../About/style'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { 
  ContactBody, 
  Form, 
  Icon, 
  IconContainer, 
  IconText, 
  Input, 
  LeftContainer, 
  Message, 
  PersonInfo, 
  RightContainer, 
  SubmitButton, 
  SubmitRow 
} from './style'

const Contact = () => {
  return (
    <ContactBody data-testid='contact'>
      <LeftContainer data-testid='left-container'>
        <StyledHeading data-testid='title'>Contato</StyledHeading>
        <Form data-testid='form'
          method='POST'
          action='send'
          encType='multipart/form-data'
          onSubmit={() => console.log('submit')}
        >
          <PersonInfo data-testid='person-info'>
            <Input data-testid='input-name'
              name='name'
              placeholder='Seu nome'
              onChange={() => console.log('change name')}
              required
            />
            <Input data-testid='input-email'
              name='email'
              placeholder='seu@email.com'
              onChange={() => console.log('change email')}
              required
            />
          </PersonInfo>
          <Input data-testid='input-message'
            name='subject'
            placeholder='Assunto'
            onChange={() => console.log('change subject')}
            required
          />
          <Message data-testid='text-message'
            name='message'
            placeholder='Digite sua mensagem aqui'
            onChange={() => console.log('change message')}
            required
          />
        </Form>
        <SubmitRow data-testid='submit-row'>
          <SubmitButton data-testid='submit-button' onClick={() => console.log('submit')} type='submit' value='Enviar'>Enviar</SubmitButton>
        </SubmitRow>
      </LeftContainer>
      <RightContainer data-testid='right-container'>
        <IconContainer data-testid='icon-container-linkedin'>
          <Icon data-testid='linkedin-icon'>
            <AiFillLinkedin size={'3rem'}/>
          </Icon>
          <IconText data-testid='linkedin-icon-text'>Linkedin</IconText>
        </IconContainer>
        <IconContainer data-testid='icon-container-github'>
          <Icon data-testid='github-icon'>
            <AiFillGithub size={'3rem'}/>
          </Icon>
          <IconText>Github</IconText>
        </IconContainer>
        <IconContainer data-testid='icon-container-email'>
          <Icon data-testid='email-icon'>
            <AiOutlineMail size={'3rem'}/>
          </Icon>
          <IconText>E-Mail</IconText>
        </IconContainer>
      </RightContainer>
    </ContactBody>
  )
}

export default Contact
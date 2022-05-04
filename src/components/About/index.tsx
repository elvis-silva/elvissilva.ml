import { Container } from "./style"

interface IProps {
  firstName?: string,
  lastName?: string
}

const About = (props:IProps) => {

  let {firstName, lastName} = props

  return (
    <div data-testid='about'>
      <Container>
        <h1>Sobre Mim</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
      </Container>
    </div>
  )
}

export default About

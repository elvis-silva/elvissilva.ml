import photo from '../../assets/images/me.jpg'
import { AboutBody, AboutContainer, StyledHeading, Photo, TextSection } from "./style"

const About = () => {

  return (
    <div data-testid='about'>
      <AboutBody>
        <AboutContainer>
          <StyledHeading>Sobre mim</StyledHeading>
          <TextSection>
            Sou um desenvolvedor de software e estudante apaixonado pela arte da programação residente no Brasil.
            <br/>
            <br/>
            Atualmente, estou trabalhando por conta própria criando pequenos sites e refatorando códigos desde 2017. Sou apaixonado por resolver problemas técnicos, pesquisar e ajudar no desenvolvimento de novos softwares e tecnologias. 
            <br/>
            <br/>
            Procuro sempre me desafiar a melhorar cada vez mais, sendo proativo, diligente, responsável e comprometido em encontrar a solução mais econômica e eficiente pra qualquer problema.
          </TextSection>
        </AboutContainer>
        <AboutContainer>
          <Photo src={photo} alt='Elvis Silva'/>
        </AboutContainer>
      </AboutBody>
    </div>
  )
}

export default About

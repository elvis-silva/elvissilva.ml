import { StyledHeading } from "../About/style"
import RotatingSphere from "../RotatingSphere"
import { SkillsBody, SkillsContainer, Text, Link, SphereContainer } from "./style"

const Skills = () => {
  return (
    <SkillsBody data-testid='skills' id='skills'>
      <SkillsContainer data-testid='container'>
        <StyledHeading data-testid='title'>Skills</StyledHeading>
        <Text data-testid='text'>
          Sei programar em Java, Typescript, Javascript, HTML5, CSS3, ReactJS, controle de versão com Git e Github, gerenciamento de Banco de Dados com MySQL. 
          <br />
          <br />
          Possuo conhecimento em Estruturas de Dados, Algoritmos e Princípios POO. Também posso configurar e gerenciar um sistema operacional Windows ou Linux. Tenho mais de 10 anos de experiência com Linux nas mais diversas versões.
          <br />
          <br />
          Também fiz e certifiquei vários bootcamps na plataforma da Digital Innovation One Inc. que podem ser verificados no meu&nbsp;<Link target="_blank" rel="noreferrer noopener"  color="#65d865" href='https://www.linkedin.com/in/elvis-silva-dev'>Linkedin</Link>
          </Text>
        </SkillsContainer>
        <SphereContainer>
          <RotatingSphere />
        </SphereContainer>
    </SkillsBody>
  )
}

export default Skills
import { StyledHeading } from "../About/style"
import { SkillsBody, SkillsContainer, Text } from "./style"

const Skills = () => {
  return (
    <SkillsBody data-testid='skills'>
      <SkillsContainer>
        <StyledHeading>Skills</StyledHeading>
        <Text>
          Sou programador há 5 anos e sei programar em Java, Typescript, Javascript, HTML5, CSS3, ReactJS, controle de versão com Git e Github, gerenciamento de Banco de Dados com MySQL. 
          <br />
          <br />
          Possuo conhecimento em Estruturas de Dados, Algoritmos e Princípios OOP. Também posso configurar e gerenciar um sistema operacional Windows ou Linux. Tenho mais de 10 anos de experiência com Linux nas mais diversas versões.
          <br />
          <br />
          Também fiz e certifiquei vários bootcamps na plataforma da Digital Innovation One Inc. que podem ser verificados no meu&nbsp;<a color="#65d865" href='https://www.linkedin.com/in/elvis-silva-dev'>Linkedin</a>
          </Text>
        </SkillsContainer>
    </SkillsBody>
  )
}

export default Skills
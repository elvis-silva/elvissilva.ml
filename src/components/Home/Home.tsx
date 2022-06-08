import { useState, useEffect, useRef } from 'react';
import { CustomLetter } from '../Letter/style'
import { HomeBody, HomeContainer, TypeWriter, StyledText } from './style'

const Home = () => {

  const letters: JSX.Element[] = []

  const name: string = 'Elvis_Silva \n'
  for (const element of name) {
    if(element === '\n') {
      letters.push(
        <br 
          key={Math.random().toString()}
          style={{ backgroundColor: "transparent"}}
        />
      )
    } else if (element === ' ') {
      letters.push(
        <StyledText
          key={Math.random().toString()}
        >
          &nbsp;
        </StyledText>
      )
    } else {
      letters.push(
        <CustomLetter key={Math.random().toString()}>{element}</CustomLetter>
      )
    }
  }

  const typewritterStrings: string[] = [
    "Freelancer",
    "Programador",
    "Desenvolvedor",
  ]

  const [text, setText] = useState(typewritterStrings[0])
  const [direction, setDirection] = useState('forward')
  const index = useRef(0)

  const timeInterval: number = 3900

  useEffect(() => {
    const interval = setInterval(() => {
      if (index.current >= typewritterStrings.length) {
        index.current = 0;
      }

      if (direction === "backward") {
        setText(typewritterStrings[index.current]);
      }

      if (direction === "forward") {
        setDirection("backward");
        index.current += 1;
      } else if (direction === "backward") {
        setDirection("forward");
      }
    }, timeInterval);
    return () => {
      clearInterval(interval);
    }
  }, [direction])

  return (
    <div data-testid="home">
      <HomeBody>
        <HomeContainer>
          <StyledText>Olá, 👋 sou</StyledText>
          <StyledText>{letters}</StyledText>
          <TypeWriter
            key={Math.random().toString()}
            typing_direction={direction}
          >
            {text}
          </TypeWriter>
        </HomeContainer>
      </HomeBody>
    </div>
  )
}

export default Home
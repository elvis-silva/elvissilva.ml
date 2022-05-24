import { useState, useEffect, useRef } from 'react';
import { CustomLetter } from '../Letter/style'
import { HomeBody, HomeContainer, TypeWriter } from './style'

const Home = () => {

  const letters: JSX.Element[] = []
  letters.push(
    <span
      key={Math.random().toString()}
      style={{ fontSize: 60, color: "white" }}
    >
      Sou{' '}
    </span>
  )

  const name: string = 'Elvis_Silva \n'
  for (let i = 0; i < name.length; i++) {
    if(name[i] === '\n') {
      letters.push(
        <br 
          key={Math.random().toString()}
          style={{ backgroundColor: "transparent"}}
        />
      )
    } else if (name[i] === ' ') {
      letters.push(
        <span
          key={Math.random().toString()}
          style={{ backgroundColor: "transparent"}}
        >
          &nbsp;
        </span>
      )
    } else {
      letters.push(
        <CustomLetter key={Math.random().toString()}>{name[i]}</CustomLetter>
      )
    }
  }

  const typewritterStrings: string[] = [
    "Freelancer",
    "Programador",
    "Desenvolvedor de Software",
    "Desenvolvedor de Websites",
    "Desenvolvedor de Apps",
  ]

  const [text, setText] = useState(typewritterStrings[0])
  const [direction, setDirection] = useState('forward')
  const index = useRef(0)

  const timeInterval: number = 3900;
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
    };
  }, [direction]);

  return (
    <div data-testid="home">
      <HomeBody>
        <HomeContainer>
          <span style={{ fontSize: 20, color: "white" }}>Olá, 👋</span>
          <div>{letters}</div>
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
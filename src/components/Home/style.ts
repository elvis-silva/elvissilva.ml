import styled from "styled-components";

export const HomeBody = styled.div`

  display: flex;
  flex-direction: row;
  padding: 0 3.5rem 0 3.5rem;
  background-color: #2b2b2b;
  min-height: 100%;
  padding-bottom: 4rem;
  position: relative;

  &:before {
    content: "<Home>";
    color: #65d865;
    font-size: 1.8rem;
    position: absolute;

    @media screen and (max-width: 768px) {
      margin-left: 0.5em;
    }
  }

  &:after {
    content: "</Home>";
    color: #65d865;
    font-size: 1.8rem;
    position: absolute;
    bottom: 0px;
    left: 2em;

    @media screen and (max-width: 768px) {
      left: 0.5em;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    padding-bottom: 4rem;
  }

`

export const HomeContainer = styled.div<{ typing_direction?: string }>`

  padding-top: 4em;
  padding-left: 7em;
  display: flex;
  flex-direction: column;
  min-width: 50%;

  &:before {
    content: "<div>";
    color: #65d865;
    font-size: 1.8rem;
    margin-left: -2em;
    margin-bottom: 1em;
  
    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: 2em;
    }
  }

  &:after {
    content: "</div>";
    color: #65d865;
    font-size: 1.8rem;
    align-self: flex-start;
    margin-left: -2em;
    margin-top: 1em;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: -2em;
    }
  }

  @media screen and (max-width: 768px) {
    padding-top: 4em;
    align-items: center;
    justify-content: center;
    padding-left: 0;
  }

`

export const TypeWriter = styled.div<{ typing_direction?: string }>`

  font-size: 2.8em;
  color: #65d865;
  max-width: fit-content;
  overflow: hidden;
  border-right: 0.15em solid #65d865;
  white-space: nowrap;
  letter-spacing: 0.05em;

  ${({ typing_direction }) => 
    typing_direction === 'forward' && `
    
      animation: typing 4s steps(60, end), blink-caret 0.75s;
    
    `
  }

  ${({ typing_direction }) => 
    typing_direction === 'backward' && `
    
      animation: deleting 4s steps(60, end), blink-caret 0.75s;
    
    `
  }

  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes deleting {
    from { width: 100%; }
    to { width: 0; }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #65d865; }
  }

  @media screen and (max-width: 768px) {
    font-size: 2em;
  }

`
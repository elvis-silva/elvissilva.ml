import styled from 'styled-components'

export const ContactBody = styled.div`

  display: flex;
  flex-direction: row;
  padding: 0 3.5em 0 3.5em;
  min-height: 100%;
  padding-bottom: 3rem;
  position: relative;

  &:before {
    content: '<Contact>';
    color: #65d865;
    font-size: 1.8rem;
    left: 2em;
    position: absolute;

    @media screen and (max-width: 768px) {
      left: 0.5em;
    }
  }

  &:after {
    content: '</Contact>';
    color: #65d865;
    font-size: 1.8rem;
    left: 2em;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 768px) {
      left: 0.5em;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0 0 3rem 0;
    align-items: center;
  }

`

export const LeftContainer = styled.div`

  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 4em 0 0 7em;

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
    margin-bottom: 0.5em;

    @media screen and (max-width: 768px) {
      align-self: flex-start;
      margin-left: -2em;
    }
  }

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
    width: fit-content;
  }

`

export const RightContainer = styled.div`

  display: flex;
  flex-direction: column;
  width: 30%;
  padding-top: 4em;
  align-items: center;
  justify-content: center;
  gap: 2em;

  @media screen and (max-width: 768px) {
    width: auto;
  }

`

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  padding-top: 2em;

`

export const PersonInfo = styled.div`

  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5em;
  margin-bottom: 0.7em;
  padding-bottom: 0.5em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

`

export const Input = styled.input`

  display: inline-block;
  width:100%;
  padding: 1em 1.4em;
  border: 0.05em solid #65d865;
  border-radius: 0.5em;
  box-sizing: border-box;
  font-size: 0.8em;
  outline: none;
  transition: all 0.2s ease-in-out;
  color: #65d865;
  background-color: transparent;

  &:focus {
    border: 0.2em solid #65d865;
  }

`

export const Message = styled.textarea`

  margin: 1em 0;
  padding: 0.5em 0.7em;
  background-color: transparent;
  color: #65d865;
  border: 0.05em solid #65d865;
  border-radius: 0.5em;
  box-sizing: border-box;
  font-size: 1.5em;
  outline: none;
  transition: all 0.2s ease-in-out;
  resize: none;
  width: 100%;
  height: 7em;

  &:focus {
    border: 0.2em solid #65d865;
  }

`

export const SubmitRow = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

`

export const SubmitButton = styled.button`

  background-color: #65d865;
  color: #2b2b2b;
  border-radius: 0.5em;
  box-sizing: border-box;
  font-size: 1.3em;
  font-weight: bold;
  outline: none;
  transition: all 0.5s ease-in-out;
  display: block;
  align-self: flex-end;
  height: 3.8em;
  width: 10em;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    align-self: center;
    width: 100%;
  }

`

export const Container = styled.div`

  margin: 15px;
  border: 1px solid #65d865;
  text-align: center;
  padding: 2rem;

  & h1 {  

    font-size: 2rem;
    margin-bottom: 1rem;

  }

  & p {

    font-size: 1rem;
    margin-bottom: 1rem;

  }
  
`
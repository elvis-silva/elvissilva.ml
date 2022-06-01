import styled from 'styled-components'

export const AboutBody = styled.div`

  display: flex;
  flex-direction: row;
  padding: 0 3.5rem 0 3.5rem;
  background-color: #2b2b2b;
  min-height: 100%;
  height: fit-content;
  padding-bottom: 4rem;
  position: relative;

  &:before {
    content: '<About>';
    color: #65d865;
    font-size: 1.8rem;
    margin-left: 0em;
    position: absolute;

    @media screen and (max-width: 768px) {
      margin-top: -0.5em;
      margin-left: 0;
      left: 0.5em;
    }
  }

  &:after {
    content: '</About>';
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
    padding: 0 1rem 0 1rem;
    padding-bottom: 6rem;
  }

`

export const AboutContainer = styled.div`

  padding-top: 3em;
  padding-left: 7rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;

  &:before {
    content: "<div>";
    color: #65d865;
    font-size: 1.8rem;
    margin-left: -2em;
    margin-bottom: 1em;
    padding-top: 0.5em;
  
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
    padding-top: 1em;
    padding-left: 0;
    align-self: center;
    width: auto;
  }

`

export const StyledHeading = styled.h1`

  display: flex;
  font-size: 4em;
  align-items: center;
  color: #65d865;

  @media screen and (max-width: 768px) {
    font-size: 2.5em;
    align-self: center;
  }

`

export const TextSection = styled.div`

  font-size: 1.3em;
  padding-top: 1.3em;
  line-height: 1.4em;
  color: #65d865;

`

export const PhotoContainer = styled.div`

  padding-top: 3em;
  padding-left: 3.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;

@media screen and (max-width: 768px) {
  padding-top: 1em;
  padding-left: 0;
  align-self: center;
  width: auto;
}

`

export const Photo = styled.img`

  justify-content: center;
  align-items: center;
  height: 25rem;
  width: auto;
  border-radius: 50%;
  transition: 0.3s ease-in;
  align-self: center;
  margin-top: 6.6em;

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
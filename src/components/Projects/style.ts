import styled from "styled-components";

export const ProjectsBody = styled.div`

  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: -4em;
  }
`

export const VideoHolder = styled.div`

  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: fit-content;
    opacity: 30%;
  }

`
import styled from 'styled-components'

export const NavBar = styled.nav`

  position: fixed;  
  width: 100%;
  top: 0;
  left: 0;
  background-color: #2b2b2b;

`

export const Logo = styled.img`

  width: 10rem;
  margin-left: 0.5rem;
  cursor: pointer;

`

export const Content = styled.div`

  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;

  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  & li {
    float: left;
  }

  & li a {
    display: block;
    color: #65d865;
    text-align: center;
    padding: 16px;
    text-decoration: none;
  }

  & li a:hover {
    background-color: #333;
  }

`

export const HamburgerButton = styled.button`

  display: block;
  

`

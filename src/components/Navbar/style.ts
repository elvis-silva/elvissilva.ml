import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import Logo from '../../assets/images/logo.png'

export const Nav = styled.nav`

  background-color: #2b2b2b;
  opacity: 85%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 999;
  font-size: 1.2rem;

  @media screen and (max-width: 960px) {
    transition: 1.5s all ease;
  }

`

export const NavContainer = styled.div`

  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  padding: 0 3.5rem 0 3.5rem;
  z-index: 1;

`

export const NavLogo = styled(LinkRouter)<{ width?: any, height?: any }>`

  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  height: ${({ height }) => (height ? height : '2.5rem')};
  width: ${({ width }) => (width ? width : '5rem')};
  align-self: center;
  cursor: pointer;

`

export const NavMenu = styled.ul`

  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

`

export const NavItem = styled.li`

  height: 3.6em;

`

export const NavLink = styled(LinkScroll)`

  color: #65d865;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    border-bottom: 0.16em solid #65d865;
  }

  &:active {
    border-bottom: 0.16em solid #65d865;
    font-weight: bold;
  }

`
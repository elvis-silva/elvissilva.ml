import { useCallback } from "react"
import { Nav, NavContainer, NavMenu, NavItem, NavLogo, NavLink } from "./style"

interface NavbarProps {
  toggle: () => void
}

const Navbar = (props: NavbarProps) => {

  const toTop = useCallback(async () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <Nav data-testid='navbar'>
      <NavContainer data-testid='container'>
        <NavLogo data-testid='logo' to='/' onClick={toTop}/>
        <NavMenu data-testid='nav-menu'>
          <NavItem data-testid='menu-inicio'>
            <NavLink data-testid='link-inicio' to='inicio' spy={true} smooth={true} offset={-80}>Início</NavLink>
          </NavItem>
          <NavItem data-testid='menu-sobre'>
            <NavLink data-testid='link-sobre' to='sobre' spy={true} smooth={true} offset={-80}>Sobre</NavLink>
          </NavItem>
          <NavItem data-testid='menu-skills'>
            <NavLink data-testid='link-skills' to='skills' spy={true} smooth={true} offset={-80}>Skills</NavLink>
          </NavItem>
          <NavItem data-testid='menu-projetos'>
            <NavLink data-testid='link-projetos' to='projetos' spy={true} smooth={true} offset={-80}>Projetos</NavLink>
          </NavItem>
          <NavItem data-testid='menu-contato'>
            <NavLink data-testid='link-contato' to='contato' spy={true} smooth={true} offset={-80}>Contato</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
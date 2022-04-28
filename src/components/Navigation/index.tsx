import { NavBar, Logo } from "./style"
import logo from '../../logo.svg'

const Navigation = () => {

  return (
    <div data-testid='navigation'>
      <NavBar>
        <Logo src={logo} alt='logo'/>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/servicos'>Serviços</a>
          </li>
          <li>
            <a href='/galeria'>Galeria</a>
          </li>
          <li>
            <a href='/sobre'>Sobre</a>
          </li>
          <li>
            <a href='/contato'>Contato</a>
          </li>
        </ul>
      </NavBar>
    </div>
  )
}

export default Navigation

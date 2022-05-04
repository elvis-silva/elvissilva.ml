import { Container } from './style'

const Footer = () => {
  return (
    <footer data-testid="footer">
      <Container>
        <div className="content has-text-centered">
          <h1>Footer</h1>
          <p>
            <a href="#">Link 1</a>
          </p>
          <p>
            <a href="#">Link 2</a>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
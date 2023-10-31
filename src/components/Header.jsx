import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><img src="./inputmouse_103579.svg" alt="img-mouse" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav">
          <Nav>
            <Nav.Link href="#home">HOME</Nav.Link>
            <NavDropdown title="EMPRESA" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sobre nós</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Nossos Valores
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Vagas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Trabalhe conosco
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">CLIENTES</Nav.Link>
            <Nav.Link href="#link">CONTATO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
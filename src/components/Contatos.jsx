import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./css/Header.css";

const Contatos = () => {
  return (
    <Navbar className="contatos">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Brand className="nomes" href="#home">(11) 1234-1234</Navbar.Brand>
        <Navbar.Brand className="nomes" href="#home">(11) 1234-1234</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Contatos;
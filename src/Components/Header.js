import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function Header() {
  return (
    <>
     <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png" width={70} height={60}></img>
          <Navbar.Brand>TULANG BAWANG</Navbar.Brand>
        </Navbar.Brand>
        </Container>
      </Navbar>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Beranda</Nav.Link>
            <Nav.Link as={Link} to="/Profil">Profil</Nav.Link>
            <Nav.Link href="#artikel">Artikel</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
}

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="react-puppy-bowl" /> */}
        {/* <Navbar.Collapse id="react-puppy-bowl"> */}
          {/* <Nav className="me-auto"> */}
            <Nav.Link as={Link} to="/"></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} id='all-players' to="allplayers">All Players </NavDropdown.Item><br/>
            <NavDropdown.Item as={Link} id='new-players' to="newplayers">Add New Players</NavDropdown.Item>
            </NavDropdown>
          {/* </Nav> */}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
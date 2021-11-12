//import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import initialozeAuthentication from '../../Login/Firebase/firebaseInt';
import { HashLink } from 'react-router-hash-link';


initialozeAuthentication();

const Header = () => {
  const {user, logOut} = useAuth();
  console.log(user);
    return (
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="/home#home">Genius (GcM)</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link href="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#exparts">Exparts</Nav.Link>

      {user?.email ?
        <Button onClick={logOut} variant="light">LogOut</Button>:
        <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
      }
     
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  //<br />

    );
};

export default Header;
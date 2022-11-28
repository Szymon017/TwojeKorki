import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navbar1() {
  const logout = () => {
    const token = localStorage.getItem('token');

    if (token) {
      localStorage.removeItem('token');
      window.location.assign('/');
    } else {
      console.log('Error');
    }
  };

  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(token);
    }
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">TwojeKorki</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {user ? <CustomLink to="/annoucements/add">Dodaj ogłoszenie</CustomLink> : ''}
            {user ? <CustomLink to="/annoucements">Ogłoszenia</CustomLink> : ''}
          </Nav>
          <Nav>
            {user ? <CustomLink to="favourites">Ulubione</CustomLink> : ''}
            {user ? <CustomLink to="/userProfile">Mój profil</CustomLink> : ''}
            {user ? <CustomLink to="logout" onClick={logout}>Wyloguj się</CustomLink> : <CustomLink to="login">Zaloguj się</CustomLink>}

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link className="navlink" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

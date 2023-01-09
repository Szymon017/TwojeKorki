import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getCurrentUser } from '../service/userDataService';


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
      setUser(getCurrentUser());
    }
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">TwojeKorki</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
             {user ? <CustomLink  to="/annoucements/add">Dodaj ogłoszenie</CustomLink> : ''}
              {user ? <CustomLink to="/annoucements">Ogłoszenia</CustomLink> : ''}
              {user ? (user.role === "admin" || user.role ==="mod") && <CustomLink to="/adminPanel"> Panel zarządzania </CustomLink>:""}
              </Nav>
            <Nav>
              {/*user ? <CustomLink to="/friends">Znajomi <i class="bi bi-people-fill"/> </CustomLink> : ""*/}
              {user ? <CustomLink to="/messages"> Wiadomości <i class="bi bi-chat-dots-fill"/></CustomLink> : ""}
              {user ? <CustomLink to="/favourites">Ulubione <i class="bi bi-heart-fill"/> </CustomLink> : ""}
              {user ? <CustomLink to="/userProfile">Mój profil <i class="bi bi-person-circle"/> </CustomLink>:''}
              {user ? <CustomLink to="/logout" onClick={logout}>Wyloguj się <i class="bi bi-power"/> </CustomLink> : <CustomLink to="login">Zaloguj się</CustomLink> }
              
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

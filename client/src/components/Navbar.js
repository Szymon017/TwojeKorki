import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Navbar() {

  const logout = () => {
    const token = localStorage.getItem("token");

    if(token){
      localStorage.removeItem("token");
      window.location.assign('/');

    }else{
      console.log("Error");
    }
  }


  const [user, setUser] = useState();

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
          setUser(token);
      }
  }, [])

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        TwojeKorki
      </Link>
      <ul>
        {user ? <CustomLink to="/annoucements/add">Dodaj ogłoszenie</CustomLink> : ''}
        {user ? <CustomLink to="/annoucements">Ogłoszenia</CustomLink> : ''}
        {user ? <CustomLink to="/userProfile">Mój profil</CustomLink>:''}
        {user ? <CustomLink to="logout" onClick={logout}>Wyloguj się</CustomLink> : <CustomLink to="login">Zaloguj się</CustomLink> }
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

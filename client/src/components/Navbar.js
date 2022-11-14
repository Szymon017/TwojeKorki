import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        TwojeKorki
      </Link>
      <ul>
        <CustomLink to="/annoucements/add">Dodaj ogłoszenie</CustomLink>
        {/*<CustomLink to="">Ogłoszenia</CustomLink>*/}
        <CustomLink to="/userProfile">Mój profil</CustomLink>
        <CustomLink to="logout">Wyloguj się</CustomLink>
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

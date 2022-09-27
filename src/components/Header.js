import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export default function Header({ link, linkText, email, loggedIn, onLogout }) {
  return (
    <header className="header">
      <img src={logo} alt="Место" className="header__logo" />
      {loggedIn && <p className="header__link">{email}</p>}
      <Link to={link} onClick={onLogout} className="header__link">
        {linkText}
      </Link>
    </header>
  );
}

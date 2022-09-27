import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export default function Header({ link, linkText, email, loggedIn }) {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Место" className="header__logo" />
      </Link>
      {loggedIn && <p className="header__link">{email}</p>}
      <Link to={link} className="header__link">
        {linkText}
      </Link>
    </header>
  );
}

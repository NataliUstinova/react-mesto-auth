import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header({ email, loggedIn, onLogout }) {
  const location = useLocation();

  return (
    <header className="header">
      <img src={logo} alt="Место" className="header__logo" />
      {loggedIn && <p className="header__link">{email}</p>}
      <p className="header__link">{email}</p>
      {loggedIn && (
        <p className="header__link" onClick={onLogout}>
          Выйти
        </p>
      )}
      {location.pathname === "/sign-in" && (
        <Link className="header__link" to="/sign-up">
          Регистрация
        </Link>
      )}
      {location.pathname === "/sign-up" && (
        <Link className="header__link" to="/sign-in">
          Войти
        </Link>
      )}
    </header>
  );
}

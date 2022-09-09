import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

const SignUp = () => {
  return (
    <Auth title="Регистрация" buttonText="Зарегистрироваться">
      <div className="auth__text-container">
        <p className="auth__text">Уже зарегистрированы?</p>
        <Link to={"/login"} className="auth__text auth__link">
          Войти
        </Link>
      </div>
    </Auth>
  );
};

export default SignUp;

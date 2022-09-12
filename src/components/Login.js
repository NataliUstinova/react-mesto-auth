import React from "react";
import Auth from "./Auth";

const Login = () => {
  return (
    <Auth
      title="Вход"
      buttonText="Войти"
      autocomplete="current-password"
    ></Auth>
  );
};

export default Login;

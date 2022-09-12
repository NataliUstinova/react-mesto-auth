import React from "react";
import Auth from "./Auth";

const Login = () => {
  return (
    <Auth
      title="Войти"
      buttonText="Войти"
      autocomplete="current-password"
    ></Auth>
  );
};

export default Login;

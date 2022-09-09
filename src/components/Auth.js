import React from "react";
import useValidation from "../hooks/useValidation";
import { useEffect } from "react";

const Auth = ({ title, buttonText, children }) => {
  const { values, errors, isDisabled, handleInputChange, resetForm } =
    useValidation({});
  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <div className="auth__container">
      <h1 className="auth__title">{title}</h1>
      <form className="auth__form">
        <input
          id="sign-up-email"
          required
          minLength="2"
          maxLength="40"
          className={`popup__input auth__input ${
            errors.email && "popup__error_visible"
          }`}
          type="email"
          name="email"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleInputChange}
        />
        <span className={errors.email && "auth__input_type_error"}>
          {errors.email}
        </span>
        <input
          id="sign-up-password"
          required
          minLength="6"
          maxLength="200"
          className={`popup__input auth__input ${
            errors.password && "popup__error_visible"
          }`}
          type="text"
          name="password"
          value={values.password || ""}
          placeholder="Пароль"
          onChange={handleInputChange}
        />
        <span
          className={
            errors.password && "auth__input_type_error auth__input_type_error-2"
          }
        >
          {errors.password}
        </span>
        <button
          className={
            !isDisabled ? "auth__button auth__button_disabled" : "auth__button"
          }
          type="submit"
        >
          {buttonText}
        </button>
        {children}
      </form>
    </div>
  );
};

export default Auth;

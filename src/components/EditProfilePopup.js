import React, {useContext, useEffect} from 'react';

import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "./../contexts/CurrentUserContext"
import useValidation from "../hooks/useValidation";

export default function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoading, onClick}) {
  const {values, errors, isDisabled, handleInputChange, resetForm} = useValidation({});
  
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    values.name = currentUser.name;
    values.about = currentUser.about;
    resetForm()
  }, [isOpen, onClose, resetForm]);
  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({name: values.name, about: values.about});
  }
  
  return (
    <PopupWithForm
      onClick={onClick}
      isOpen={isOpen}
      name="popup_profile-info"
      title="Редактировать профиль"
      button={isLoading ? "Сохранение..." : "Сохранить"}
      onClose={onClose}
      isDisabled={!isDisabled}
      onSubmit={handleSubmit}>
      <input id="profile-name"
             required
             minLength="2"
             maxLength="40"
             className={`popup__input popup__input_value_name popup__text ${errors.name && 'popup__error_visible'}`}
             type="text"
             name="name"
             placeholder="Имя"
             defaultValue={currentUser.name}
             onChange={handleInputChange}/>
      <span className={errors.name ? "popup__input_type_error" : "profile-name-error"}>{errors.name}</span>
      <input id="profile-job"
             required
             minLength="2"
             maxLength="200"
             className={`popup__input popup__input_value_job popup__text ${errors.about && 'popup__error_visible'}`}
             type="text"
             name="about"
             defaultValue={currentUser.about}
             placeholder="Деятельность"
             onChange={handleInputChange}/>
      <span className={errors.about ? "popup__input_type_error popup__input_type_error-2 profile-job-error" : "profile-job-error"}>{errors.about}</span>
    </PopupWithForm>
  );
};

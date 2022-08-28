import React, {useContext, useEffect, useState} from 'react';

import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "./../contexts/CurrentUserContext"

export default function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoading, onClick}) {
  
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about);
  const [nameError, setNameError] = useState(false);
  const [aboutError, setAboutError] = useState(false);

  const buttonValidationClassName = (
    `${nameError && 'popup__save_disabled' || aboutError && 'popup__save_disabled'}`
  );
  
  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about)
  }, [currentUser])
  
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }
  
  useEffect( () => {
    if (isOpen && name.length < 2) {setNameError(true);} else {setNameError(false);}
  }, [name]);

  useEffect( () => {
    if (isOpen && about.length < 2) {setAboutError(true);} else {setAboutError(false);}
  }, [about]);
  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({name, about});
  }
  
  return (
    <PopupWithForm
      buttonValidationClassName={buttonValidationClassName}
      onClick={onClick}
      isOpen={isOpen}
      name="popup_profile-info"
      title="Редактировать профиль"
      button={isLoading ? "Сохранение..." : "Сохранить"}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input id="profile-name"
             required
             minLength="2"
             maxLength="40"
             className={`popup__input popup__input_value_name popup__text ${nameError && 'popup__error_visible'}`}
             type="text"
             name="name"
             placeholder="Имя"
             defaultValue={currentUser.name}
             onChange={handleNameChange}/>
      <span className="popup__input_type_error">{nameError ? 'Имя должно быть больше 2х символов' : null}</span>
      <input id="profile-job"
             required
             minLength="2"
             maxLength="200"
             className={`popup__input popup__input_value_job popup__text ${aboutError && 'popup__error_visible'}`}
             type="text"
             name="job"
             defaultValue={currentUser.about}
             placeholder="Деятельность"
             onChange={handleAboutChange}/>
      <span className="profile-job-error"></span>
      <span className="popup__input_type_error">{aboutError ? 'должно быть больше 2х символов' : null}</span>
    </PopupWithForm>
  );
};

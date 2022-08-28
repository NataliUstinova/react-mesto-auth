import React, {useContext, useEffect, useState} from 'react';

import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "./../contexts/CurrentUserContext"

export default function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoading, onClick}) {
  
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about);
  
  
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
  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({name, about})
  }
  
  return (
    <PopupWithForm
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
             className="popup__input popup__input_value_name popup__text"
             type="text"
             name="name"
             placeholder="Имя"
             defaultValue={currentUser.name}
             onChange={handleNameChange}/>
      <span className="profile-name-error"></span>
      <input id="profile-job"
             required
             minLength="2"
             maxLength="200"
             className="popup__input popup__input_value_job popup__text"
             type="text"
             name="job"
             defaultValue={currentUser.about}
             placeholder="Деятельность"
             onChange={handleAboutChange}/>
      <span className="profile-job-error"></span>
    </PopupWithForm>
  );
};

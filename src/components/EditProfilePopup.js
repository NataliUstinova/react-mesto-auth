<<<<<<< HEAD
import React, {useContext, useEffect, useState} from 'react';
=======
import React, {useContext, useState} from 'react';
>>>>>>> origin/main
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "./../contexts/CurrentUserContext"

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about);
  
<<<<<<< HEAD
  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about)
  }, [currentUser])
  
=======
>>>>>>> origin/main
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
      isOpen={isOpen}
      name="popup_profile-info"
      title="Редактировать профиль"
      button="Сохранить"
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
<<<<<<< HEAD
             defaultValue={currentUser.name}
=======
>>>>>>> origin/main
             onChange={handleNameChange}/>
      <span className="profile-name-error"></span>
      <input id="profile-job"
             required
             minLength="2"
             maxLength="200"
             className="popup__input popup__input_value_job popup__text"
             type="text"
             name="job"
<<<<<<< HEAD
             defaultValue={currentUser.about}
=======
>>>>>>> origin/main
             placeholder="Деятельность"
             onChange={handleAboutChange}/>
      <span className="profile-job-error"></span>
    </PopupWithForm>
  );
};

import React, {useState, useEffect} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    // document.querySelector('.popup_edit-avatar').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    // document.querySelector('.popup_add-pic').classList.add('popup_opened');
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    // document.querySelector('.popup_opened').classList.remove('popup_opened');
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    // document.querySelector('.popup_profile-info').classList.add('popup_opened');
  }
  
  return (
      <body className="page">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick}
      onEditAvatar={handleEditAvatarClick}
      onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm 
        isOpen={isEditProfilePopupOpen}
        name="popup_profile-info" 
        title="Редактировать профиль"
        button="Сохранить"
        onClose={closeAllPopups}>
        <input id="profile-name"
                 required
                 minLength="2"
                 maxLength="40"
                 className="popup__input popup__input_value_name popup__text"
                 type="text"
                 name="name"
                 placeholder="Имя"/>
          <span className="profile-name-error"></span>
          <input id="profile-job"
                 required
                 minLength="2"
                 maxLength="200"
                 className="popup__input popup__input_value_job popup__text"
                 type="text"
                 name="job"
                 placeholder="Деятельность"/>
          <span className="profile-job-error"></span>
      </PopupWithForm>

      <div className="popup popup_add-pic">
        <div className="popup__container">
          <h3 className="popup__heading">Новое место</h3>
          <form className="popup__form popup__form_add-pic" name="picture" noValidate>
            <input id="pic-title"
                   required
                   minLength="2"
                   maxLength="30"
                   className="popup__input popup__input_value_pic-title"
                   type="text"
                   name="name"
                   placeholder="Название"/>
              <span className="pic-title-error"></span>
              <input id="pic-link"
                     required
                     className="popup__input popup__input_value_pic-link"
                     type="url"
                     name="link"
                     placeholder="Ссылка на картинку"/>
                <span className="pic-link-error"></span>
                <button className="popup__save popup__save-add-pic" type="submit">Создать</button>
                <button onClick={closeAllPopups} className="popup__close popup__close-add-pic" type="button" aria-label="Закрыть"></button>
          </form>
        </div>
      </div>

      <div className="popup popup_edit-avatar">
        <div className="popup__container">
          <h3 className="popup__heading">Обновить аватар</h3>
          <form className="popup__form popup__form_edit-avatar" name="avatar" noValidate>
            <input id="avatarLink"
                   required
                   className="popup__input popup__input_value_avatar-link"
                   type="url"
                   name="avatarLink"
                   placeholder="Ссылка на аватар"/>
              <span className="avatarLink-error"></span>
              <button className="popup__save popup__save-edit-avatar" type="submit">Сохранить</button>
              <button onClick={closeAllPopups} className="popup__close popup__close-edit-avatar" type="button" aria-label="Закрыть"></button>
          </form>
        </div>
      </div>

      <div className="popup popup_delete-pic">
        <div className="popup__container">
          <h3 className="popup__heading">Вы уверены?</h3>
          <form className="popup__form popup__form_delete-pic" name="delete-pic" noValidate>
            <button className="popup__save popup__delete-pic" type="submit">Да</button>
            <button onClick={closeAllPopups} className="popup__close popup__close-delete-pic" type="button" aria-label="Закрыть"></button>
          </form>
        </div>
      </div>

      <ImagePopup />

      <template className="card card__template">
        <li className="card card__element">
          <button type="button" className="card__delete"></button>
          <img className="card__image" src="src/components/App#" alt="Фото"/>
          <div className="card__info">
            <h3 className="card__title"></h3>
            <div className="card__like-wrapper">
              <button className="card__like" type="button" aria-label="Нравится"></button>
              <p className="card__like-counter"></p>
            </div>
          </div>
        </li>
      </template>
      </body>
  );
}

export default App;

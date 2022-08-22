import React, {useState} from 'react';
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

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
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
      
      {/*Попап редактирования профиля*/}
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
      
      {/*Попап добавления карточки*/}
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name="popup_add-pic"
        title="Новое место"
        button="Добавить"
        onClose={closeAllPopups}>
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
      </PopupWithForm>
      
      {/*Попап изменения аватара*/}
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name="popup_edit-avatar"
        title="Обновить аватар"
        button="Сохранить"
        onClose={closeAllPopups}>
            <input id="avatarLink"
                   required
                   className="popup__input popup__input_value_avatar-link"
                   type="url"
                   name="avatarLink"
                   placeholder="Ссылка на аватар"/>
              <span className="avatarLink-error"></span>
      </PopupWithForm>

      {/*TODO Попап удаления карточки*/}
      <PopupWithForm
        // isOpen={isDeletePopupOpen}
        name="popup_delete-pic"
        title="Вы уверены?"
        button="Да"
        onClose={closeAllPopups} />  
      
      {/*TODO Попап открытия картинки*/}
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

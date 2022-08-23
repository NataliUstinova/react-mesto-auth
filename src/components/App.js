import {useState} from 'react';
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
  
  const [selectedCard, setSelectedCard] = useState({name: "", link: ""});
  
  function handleCardClick(cardData) {
    setSelectedCard(cardData);
  }
  
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
    setSelectedCard({name: "", link: ""})
  }
  
  return (
      <div className="page">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick}
      onEditAvatar={handleEditAvatarClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
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
      
      {/*Попап открытия картинки*/}
      <ImagePopup
                  onClose={closeAllPopups}
                  card={selectedCard}
                  />
      </div>
  );
}

export default App;

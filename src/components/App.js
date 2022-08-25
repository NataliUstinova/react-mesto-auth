import {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import {api} from "./../utils/Api"
import CurrentUserContext from "./../contexts/CurrentUserContext"
import EditProfilePopup from "./EditProfilePopup";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  
  const [selectedCard, setSelectedCard] = useState({name: "", link: ""});

  useEffect(() => {
    api.getUserInfoServer()
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err));
  }, []);
  
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

  function handleUpdateUser(input) {
    api.editProfile(input).then(input => {
      setCurrentUser(input);
      closeAllPopups();
    }).catch(err => console.log(err));
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
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
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      
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
    </CurrentUserContext.Provider>
  );
}

export default App;

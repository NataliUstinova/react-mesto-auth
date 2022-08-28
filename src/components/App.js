import {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import {api} from "../utils/Api"
import CurrentUserContext from "./../contexts/CurrentUserContext"
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
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
    api.editProfile(input)
      .then(input => {
      setCurrentUser(input);
      closeAllPopups();
    }).catch(err => console.log(err));
  }

  function handleUpdateAvatar(input) {
    api.changeUserAvatar(input)
      .then(input => {
        setCurrentUser(input);
        closeAllPopups();
      }).catch(err => console.log(err));
  }
  
  // Cards
  useEffect(() => {
    api.getInitialCards()
      .then(res => setCards(res))
      .catch(err => console.log(err));
  }, []);

  function handleAddPlace(newCard) {
    api.addUserCard(newCard)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      }).catch(err => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    }).catch((err) => console.log(err));
  }

  function handleCardDelete(deletedCard) {
    api.deleteCard(deletedCard._id).then(() => {
      const updatedCards = cards.filter((card) => card._id !== deletedCard._id);
      setCards(updatedCards);
    }).catch((err) => console.log(err));
  }
  
  return <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
    <Header />
    <Main 
    onEditProfile={handleEditProfileClick}
    onEditAvatar={handleEditAvatarClick}
    onAddPlace={handleAddPlaceClick}
    onCardClick={handleCardClick}
    cards={cards}
    onCardLike={handleCardLike}
    onCardDelete={handleCardDelete}
    />
    <Footer />
    
    {/*Попап редактирования профиля*/}
    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
    {/*Попап изменения аватара*/}
    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateAvatar}/>
    {/*Попап добавления карточки*/}
    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onCardSubmit={handleAddPlace}/>
      
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
}

export default App;

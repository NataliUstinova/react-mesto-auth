import {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';
import ImagePopup from "./ImagePopup";
import {api} from "../utils/Api"
import CurrentUserContext from "./../contexts/CurrentUserContext"
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";
import Popup from "./Popup";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({name: "", link: ""});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.getUserInfoServer()
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err));
  }, []);
  
  function handleCardClick(cardData) {
    setIsImagePopupOpen(true);
    setSelectedCard(cardData);
  }
  
  function handleEditProfileClick() {
    setIsLoading(false);
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsLoading(false);
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsLoading(false);
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardDeleteClick(card) {
    setIsLoading(false);
    setIsDeletePopupOpen(true);
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeletePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({name: "", link: ""});
  }
  
  function handleOverlayClick(e) {
    e.stopPropagation()
  }

  function handleUpdateUser(input) {
    setIsLoading(true);
    api.editProfile(input)
      .then(input => {
        setCurrentUser(input);
        closeAllPopups();
    })
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar(input) {
    setIsLoading(true);
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
    setIsLoading(true);
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
    setIsLoading(true);
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
    onCardBinClick={handleCardDeleteClick}
    />
    <Footer />
    
    {/*Попап редактирования профиля*/}
    <Popup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}><EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} isLoading={isLoading} onClick={handleOverlayClick}/></Popup>
    {/*Попап изменения аватара*/}
    <Popup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}><EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateAvatar} isLoading={isLoading} onClick={handleOverlayClick}/></Popup>
    {/*Попап добавления карточки*/}
    <Popup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}><AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onCardSubmit={handleAddPlace} isLoading={isLoading} onClick={handleOverlayClick}/></Popup>
    {/*Попап удаления карточки*/}
    <Popup isOpen={isDeletePopupOpen} onClose={closeAllPopups}><DeleteCardPopup isOpen={isDeletePopupOpen} isLoading={isLoading} card={selectedCard} onClose={closeAllPopups} onCardDelete={handleCardDelete} onClick={handleOverlayClick}/></Popup>
    {/*Попап открытия картинки*/}
    <Popup isOpen={isImagePopupOpen} onClose={closeAllPopups}><ImagePopup onClose={closeAllPopups} card={selectedCard} onClick={handleOverlayClick}/></Popup>
      
  </div>
  </CurrentUserContext.Provider>
}

export default App;

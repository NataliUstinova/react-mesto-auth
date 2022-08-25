import {useState, useEffect, useContext} from "react";
import avatar from "../images/avatar.jpg";
import {api} from "../utils/Api"
import Card from "./Card"
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Main({onEditAvatar, onAddPlace, onEditProfile, onCardClick}) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    api.getInitialCards()
      .then(res => setCards(res))
      .catch(err => console.log(err));
    }, []);

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
  
    return (
        <main>
        <section className="profile">
            <img src={currentUser.avatar || avatar} alt="Аватар" className="profile__avatar profile__avatar-input" />
            <button onClick={onEditAvatar} type="button" className="profile__avatar profile__edit-avatar"></button>
            <div className="profile__info">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button onClick={onEditProfile} className="profile__edit-button" type="button" aria-label="редактировать"></button>
                <p className="profile__job">{currentUser.about}</p>
            </div>
            <button onClick={onAddPlace} className="profile__add-button" type="button" aria-label="Добавить"></button>
        </section>
          
          <section className="cards">
            <ul className="cards__list">
              {cards.map((card) => (<Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>))}
            </ul>
          </section>
    </main>
    )
}
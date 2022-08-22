import React, {useState, useEffect} from "react";
import avatar from "../images/avatar.jpg";
import {api} from "../utils/Api"
import Card from "./Card"


export default function Main(props) {
  const [userName, setUserName] = useState('Natasha');
  const [userDescription, setUserDescription] = useState('MUA');
  const [userAvatar, setUserAvatar] = useState(avatar);
  
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
      api.getUserInfoServer()
        .then(res => {
          setUserDescription(res.about)
          setUserName(res.name)
          setUserAvatar(res.avatar)
        })
        .catch(err => console.log(err));
    }, []);

  useEffect(() => {
    api.getInitialCards()
      .then(res => setCards(res))
        .catch(err => console.log(err));
  }, []);
  
    return (
        <main>
        <section className="profile">
            <img src={userAvatar} alt="Аватар" className="profile__avatar profile__avatar-input" />
            <button onClick={props.onEditAvatar} type="button" className="profile__avatar profile__edit-avatar"></button>
            <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <button onClick={props.onEditProfile} className="profile__edit-button" type="button" aria-label="редактировать"></button>
                <p className="profile__job">{userDescription}</p>
            </div>
            <button onClick={props.onAddPlace} className="profile__add-button" type="button" aria-label="Добавить"></button>
        </section>
          
          <section className="cards">
            <ul className="cards__list">
              {cards.map((card) => (<Card key={card._id} card={card} onCardClick={props.onCardClick}/>))}
            </ul>
          </section>
    </main>
    )
}

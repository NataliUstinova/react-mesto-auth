import React, {useState, useEffect} from "react";
import avatar from "../images/avatar.jpg";
import {api} from "../utils/Api"

export default function Main({onEditProfile, 
                               onAddPlace, 
                               onEditAvatar,
                             }) {
  const [userName, setUserName] = useState('Natasha');
  const [userDescription, setUserDescription] = useState('MUA');
  const [userAvatar, setUserAvatar] = useState(avatar);

  useEffect(() => {
      api.getUserInfoServer()
        .then(res => {
          setUserDescription(res.about)
          setUserName(res.name)
          setUserAvatar(res.avatar)
        })
        .catch(err => console.log(err));
    }, [])
  
    return (
        <main>
        <section className="profile">
            <img src={userAvatar} alt="Аватар" className="profile__avatar profile__avatar-input" />
            <button onClick={onEditAvatar} type="button" className="profile__avatar profile__edit-avatar"></button>
            <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <button onClick={onEditProfile} className="profile__edit-button" type="button" aria-label="редактировать"></button>
                <p className="profile__job">{userDescription}</p>
            </div>
            <button onClick={onAddPlace} className="profile__add-button" type="button" aria-label="Добавить"></button>
        </section>

        <section className="cards">
            <ul className="cards__list">
            </ul>
        </section>
    </main>
    )
}

import avatar from "../images/avatar.jpg";

export default function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    return (
        <main>
        <section className="profile">
            <img src={avatar} alt="Аватар" className="profile__avatar profile__avatar-input"/>
            <button onClick={onEditAvatar} type="button" className="profile__avatar profile__edit-avatar"></button>
            <div className="profile__info">
                <h1 className="profile__name"></h1>
                <button onClick={onEditProfile} className="profile__edit-button" type="button" aria-label="редактировать"></button>
                <p className="profile__job"></p>
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

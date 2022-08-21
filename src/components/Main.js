import avatar from "../images/avatar.jpg";

export default function Main() {
    return (
        <main>
        <section className="profile">
            <img src={avatar} alt="Аватар" className="profile__avatar profile__avatar-input"/>
            <button type="button" className="profile__avatar profile__edit-avatar"></button>
            <div className="profile__info">
                <h1 className="profile__name"></h1>
                <button className="profile__edit-button" type="button" aria-label="редактировать"></button>
                <p className="profile__job"></p>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить"></button>
        </section>

        <section className="cards">
            <ul className="cards__list">
            </ul>
        </section>

    </main>
    )
}
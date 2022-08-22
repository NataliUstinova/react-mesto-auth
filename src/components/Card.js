export default function Card({cards}) {
  
  return (
    <section className="cards">
      <ul className="cards__list">
        {cards.map((card, i) => (
          <div key={card.id} className="card card__template">
            <li className="card card__element">
              <button type="button" className="card__delete"></button>
              <img className="card__image" src={card.link} alt={card.name}/>
              <div className="card__info">
                <h3 className="card__title">{card.name}</h3>
                <div className="card__like-wrapper">
                  <button className="card__like" type="button" aria-label="Нравится"></button>
                  <p className="card__like-counter">{card.likes.length}</p>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </section>
  )
}
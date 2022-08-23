export default function Card({card, onCardClick}) {
  
  function handleClick() {
    onCardClick({name: card.name, link: card.link});
  }
  
  return (
      <li className="card card__element">
        <button type="button" className="card__delete"></button>
        <img className="card__image" src={card.link} alt={card.name} onClick={handleClick}/>
        <div className="card__info">
          <h3 className="card__title">{card.name}</h3>
          <div className="card__like-wrapper">
            <button className="card__like" type="button" aria-label="Нравится"></button>
            <p className="card__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </li>
  )
}
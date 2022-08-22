export default function Card(props) {
  
  function handleClick() {
    props.onCardClick({name: props.card.name, link: props.card.link});
  }
  
  return (
      <li className="card card__element">
        <button type="button" className="card__delete"></button>
        <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
        <div className="card__info">
          <h3 className="card__title">{props.card.name}</h3>
          <div className="card__like-wrapper">
            <button className="card__like" type="button" aria-label="Нравится"></button>
            <p className="card__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </li>
  )
}
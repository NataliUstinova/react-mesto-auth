export default function ImagePopup(props) {
  return (
    <div className={`popup popup_show-pic ${props.card.link.length > 0 && "popup_opened"}`}>
      <div className="popup__fullscreen">
        <button onClick={props.onClose} className="popup__close popup__close-show" type="button" aria-label="Закрыть"></button>
        <img className="popup__full-image" src={props.card.link} alt={props.card.name}/>
        <p className="popup__description">{props.card.name}</p>
      </div>
    </div>
  )
}
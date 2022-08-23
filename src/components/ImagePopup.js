export default function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_show-pic ${card.link && "popup_opened"}`}>
      <div className="popup__fullscreen">
        <button onClick={onClose} className="popup__close popup__close-show" type="button" aria-label="Закрыть"></button>
        <img className="popup__full-image" src={card.link} alt={card.name}/>
        <p className="popup__description">{card.name}</p>
      </div>
    </div>
  )
}
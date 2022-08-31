import Popup from './Popup';

export default function ImagePopup({isOpen, card, onClose, onClick}) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
    <div className="popup_show-pic">
      <div className="popup__fullscreen" onClick={onClick}>
        <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть"></button>
        <img className="popup__full-image" src={card.link} alt={card.name}/>
        <p className="popup__description">{card.name}</p>
      </div>
    </div>
    </Popup>
  )
}
export default function ImagePopup() {
  return (
    <div className="popup popup_show-pic">
      <div className="popup__fullscreen">
        <button className="popup__close popup__close-show" type="button" aria-label="Закрыть"></button>
        <img className="popup__full-image" src="src/components/App#" alt="Фото"/>
        <p className="popup__description"></p>
      </div>
    </div>
  )
}
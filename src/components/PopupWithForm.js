import Popup from './Popup'

export default function PopupWithForm({name, isOpen, title, button, children, onClose, onSubmit, onClick, isDisabled}) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="popup__container" onClick={onClick}>
        <h3 className="popup__heading">{title}</h3>
        <form className={`popup__form ${name}`} name={name} noValidate onSubmit={onSubmit}>
          {children}
          <button className={`popup__save ${isDisabled && "popup__save_disabled"}`} type="submit">{button || 'Сохранить'}</button>
          <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть"></button>
        </form>
    </div>
    </Popup>
  )
}

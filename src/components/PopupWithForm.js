export default function PopupWithForm({name, isOpen, title, button, children, onClose}) {
  return (
    <div className={`popup ${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h3 className="popup__heading">{title}</h3>
        <form className={`popup__form ${name}`} name={name} noValidate>
          {children}
          <button className="popup__save" type="submit">{button || 'Сохранить'}</button>
          <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть"></button>
        </form>
      </div>
    </div>
  )
}

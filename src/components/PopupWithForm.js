export default function PopupWithForm({name, isOpen, title, button, children, onClose, onSubmit, onClick, buttonValidationClassName}) {
  return (
    <div className={`${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container" onClick={onClick}>
        <h3 className="popup__heading">{title}</h3>
        <form className={`popup__form ${name}`} name={name} noValidate onSubmit={onSubmit}>
          {children}
          <button className={`popup__save ${buttonValidationClassName}`} type="submit">{button || 'Сохранить'}</button>
          <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть"></button>
        </form>
      </div>
    </div>
  )
}

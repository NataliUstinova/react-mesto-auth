export default function PopupWithForm(props) {
  return (
    <div className={`popup ${props.name}`}>
      <div className="popup__container">
        <h3 className="popup__heading">{props.title}</h3>
        <form className={`popup__form ${props.name}`} name={props.name} noValidate>
          {props.children}
          <button className="popup__save" type="submit">{props.button}</button>
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
        </form>
      </div>
    </div>
  )
}

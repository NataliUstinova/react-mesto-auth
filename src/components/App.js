import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';

function App() {
  return (
      <body className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_profile-info">
        <div className="popup__container">
          <h3 className="popup__heading">Редактировать профиль</h3>
          <form className="popup__form popup__form_edit-profile" name="edit" noValidate>
            <input id="profile-name"
                   required
                   minLength="2"
                   maxLength="40"
                   className="popup__input popup__input_value_name popup__text"
                   type="text"
                   name="name"
                   placeholder="Имя"/>
              <span className="profile-name-error"></span>
              <input id="profile-job"
                     required
                     minLength="2"
                     maxLength="200"
                     className="popup__input popup__input_value_job popup__text"
                     type="text"
                     name="job"
                     placeholder="Деятельность"/>
                <span className="profile-job-error"></span>
                <button className="popup__save" type="submit">Сохранить</button>
                <button className="popup__close popup__close-edit" type="button" aria-label="Закрыть"></button>
          </form>
        </div>
      </div>

      <div className="popup popup_add-pic">
        <div className="popup__container">
          <h3 className="popup__heading">Новое место</h3>
          <form className="popup__form popup__form_add-pic" name="picture" noValidate>
            <input id="pic-title"
                   required
                   minLength="2"
                   maxLength="30"
                   className="popup__input popup__input_value_pic-title"
                   type="text"
                   name="name"
                   placeholder="Название"/>
              <span className="pic-title-error"></span>
              <input id="pic-link"
                     required
                     className="popup__input popup__input_value_pic-link"
                     type="url"
                     name="link"
                     placeholder="Ссылка на картинку"/>
                <span className="pic-link-error"></span>
                <button className="popup__save popup__save-add-pic" type="submit">Создать</button>
                <button className="popup__close popup__close-add-pic" type="button" aria-label="Закрыть"></button>
          </form>
        </div>
      </div>

      <div className="popup popup_edit-avatar">
        <div className="popup__container">
          <h3 className="popup__heading">Обновить аватар</h3>
          <form className="popup__form popup__form_edit-avatar" name="avatar" noValidate>
            <input id="avatarLink"
                   required
                   className="popup__input popup__input_value_avatar-link"
                   type="url"
                   name="avatarLink"
                   placeholder="Ссылка на аватар"/>
              <span className="avatarLink-error"></span>
              <button className="popup__save popup__save-edit-avatar" type="submit">Сохранить</button>
              <button className="popup__close popup__close-edit-avatar" type="button" aria-label="Закрыть"></button>
          </form>
        </div>
      </div>

      <div className="popup popup_delete-pic">
        <div className="popup__container">
          <h3 className="popup__heading">Вы уверены?</h3>
          <form className="popup__form popup__form_delete-pic" name="delete-pic" noValidate>
            <button className="popup__save popup__delete-pic" type="submit">Да</button>
            <button className="popup__close popup__close-delete-pic" type="button" aria-label="Закрыть"></button>
          </form>
        </div>
      </div>

      <div className="popup popup_show-pic">
        <div className="popup__fullscreen">
          <button className="popup__close popup__close-show" type="button" aria-label="Закрыть"></button>
          <img className="popup__full-image" src="src/components/App#" alt="Фото"/>
          <p className="popup__description"></p>
        </div>
      </div>

      <template className="card card__template">
        <li className="card card__element">
          <button type="button" className="card__delete"></button>
          <img className="card__image" src="src/components/App#" alt="Фото"/>
          <div className="card__info">
            <h3 className="card__title"></h3>
            <div className="card__like-wrapper">
              <button className="card__like" type="button" aria-label="Нравится"></button>
              <p className="card__like-counter"></p>
            </div>
          </div>
        </li>
      </template>
      </body>
  );
}

export default App;

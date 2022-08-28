import React, {useEffect, useState} from 'react';
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({isOpen, onClose, onCardSubmit, isLoading, onClick}) => {
  
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  
  function handleNameChange(e) {
    setName(e.target.value);
  }
  
  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onCardSubmit({name: name, link: link});
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);
  
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClick={onClick}
      name="popup_add-pic"
      title="Новое место"
      button={isLoading ? "Сохранение..." : "Добавить"}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input id="pic-title"
             required
             minLength="2"
             maxLength="30"
             className="popup__input popup__input_value_pic-title"
             type="text"
             name="name"
             value={name}
             placeholder="Название"
             onChange={handleNameChange}
      />
      <span className="pic-title-error"></span>
      <input id="pic-link"
             required
             className="popup__input popup__input_value_pic-link"
             type="url"
             name="link"
             value={link}
             placeholder="Ссылка на картинку"
      onChange={handleLinkChange}/>
      <span className="pic-link-error"></span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;

import React, {useEffect} from 'react';
import PopupWithForm from "./PopupWithForm";
import useValidation from "../hooks/useValidation"

const AddPlacePopup = ({isOpen, onClose, onCardSubmit, isLoading, onClick}) => {
  const {values, errors, isDisabled, handleInputChange, resetForm} = useValidation({});
  
  function handleSubmit(e) {
    e.preventDefault();
    onCardSubmit({name: values.name, link: values.link});
  }

  useEffect(() => {
    resetForm()
  }, [isOpen, onClose, resetForm]);
  
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClick={onClick}
      name="popup_add-pic"
      title="Новое место"
      button={isLoading ? "Сохранение..." : "Добавить"}
      onClose={onClose}
      isDisabled={!isDisabled}
      onSubmit={handleSubmit}>
      <input id="pic-title"
             required
             minLength="2"
             maxLength="30"
             className={errors.name ? `popup__input popup__input_value_pic popup__error_visible`:`popup__input`}
             type="text"
             name="name"
             value={values.name || ""}
             placeholder="Название"
             onChange={handleInputChange}
      />
      <span className={errors.name ? "popup__input_type_error pic-title-error" : "pic-title-error"}>{errors.name}</span>
      <input id="pic-link"
             required
             className={errors.link ? `popup__input popup__input_value_pic-link popup__error_visible`:`popup__input popup__input_value_pic-link`} 
             type="url"
             name="link"
             value={values.link || ""}
             placeholder="Ссылка на картинку"
      onChange={handleInputChange}/>
      <span className={errors.link ? "popup__input_type_error popup__input_type_error-2" : "pic-title-error"}>{errors.link}</span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;

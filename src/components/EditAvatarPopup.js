import React, {useEffect, useRef} from 'react';
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({isOpen, onClose, onUpdateUser, isLoading, onClick}) => {
  
  const avatarRef = useRef('');
  
  useEffect(() => {
    avatarRef.current.value = ''
  }, [isOpen])
  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ 
      avatar: avatarRef.current.value
    });
  }
  
  
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClick={onClick}
      name="popup_edit-avatar"
      title="Обновить аватар"
      button={isLoading ? "Сохранение..." : "Сохранить"}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input id="avatarLink"
             required
             className="popup__input popup__input_value_avatar-link"
             type="url"
             name="avatarLink"
             ref={avatarRef}
             placeholder="Ссылка на аватар"/>
      <span className="avatarLink-error"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;

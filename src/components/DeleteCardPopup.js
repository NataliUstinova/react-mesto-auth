import React from 'react';
import PopupWithForm from "./PopupWithForm";

const DeleteCardPopup = ({isOpen, isLoading, card, onCardDelete, onClose}) => {
  
  function handleCardDelete(e) {
    e.preventDefault();
    onCardDelete(card.card);
    onClose();
  }
  
  return (
    <PopupWithForm
      isOpen={isOpen}
      isLoading={isLoading}
      onSubmit={handleCardDelete}
      name="popup_delete-pic"
      title="Вы уверены?"
      button={isLoading? "Удаление..." : "Да"}
    />
  );
};

export default DeleteCardPopup;

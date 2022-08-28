import React from 'react';
import PopupWithForm from "./PopupWithForm";

const DeleteCardPopup = ({isOpen, isLoading, card, onCardDelete, onClose, onClick}) => {
  
  function handleCardDelete(e) {
    e.preventDefault();
    onCardDelete(card.card);
    onClose();
  }
  
  return (
    <PopupWithForm
      onClick={onClick}
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

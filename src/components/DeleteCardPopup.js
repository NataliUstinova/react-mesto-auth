import React, {useEffect} from 'react';
import PopupWithForm from "./PopupWithForm";
import useValidation from "../hooks/useValidation";

const DeleteCardPopup = ({isOpen, isLoading, card, onCardDelete, onClose, onClick}) => {
  const {isDisabled, resetForm} = useValidation({})

  useEffect(() => {
    resetForm()
  }, [isOpen, onClose, resetForm]);
  
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
      isDisabled={isDisabled}
      onSubmit={handleCardDelete}
      name="popup_delete-pic"
      title="Вы уверены?"
      button={isLoading? "Удаление..." : "Да"}
    />
  );
};

export default DeleteCardPopup;

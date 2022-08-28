import React, {useEffect} from 'react';

const Popup = ({isOpen, onClose, children}) => {
  function closeByEsc(e) {
    if (e.key === 'Escape') {
      onClose();
    }
  }
  
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', closeByEsc);
    }
    return () => {
      document.removeEventListener('keydown', closeByEsc);
    }
  }, [isOpen])
  
  return (
    <div className={`popup ${isOpen && "popup_opened"}`} onClick={onClose}>
      {children}
    </div>
  );
};

export default Popup;

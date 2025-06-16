import React, { ReactNode } from 'react';
import styles from "./popUp.module.scss"

type PopUpProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: ReactNode;
  closePopUp?: () => void;
};


function PopUp({ isOpen, setIsOpen, children, closePopUp }: PopUpProps) {

  const ActionclosePopUp = () => {
    setIsOpen(false)
    if (closePopUp) {
      closePopUp()
    }
  }

  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            {/* Close button */}
            <button
              onClick={ActionclosePopUp}
              className={styles.closeButton}
            >
              &times;
            </button>
            <div className={styles.textBlock}>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;

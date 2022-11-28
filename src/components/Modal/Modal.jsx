import { useEffect } from 'react';
import Button from 'components/Button/Button';
import styles from './Modal.module.scss';

const Modal = ({ toggleModal, isOpen, children }) => {
 
  const onBackdropClick = ev => {
    if (ev.currentTarget === ev.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    const onKeydown = ev => {
      if (ev.code === 'Escape') {
        toggleModal();
      }
    };
    document.addEventListener('keydown', onKeydown);

    return () => {
      document.removeEventListener('keydown', onKeydown);
    };
  }, [toggleModal]);

  let flag = [styles.overlay, styles.isHidden];

  if (isOpen) {
    flag.splice(1, 1);
  }

  return (
    <>
      <div className={flag.join(' ')} onClick={onBackdropClick}>
        <div className={styles.modal}>
          <div className={styles.btnThumb}>
            <button
              type="button"
              className={styles.btnClose}
              onClick={toggleModal}
            ></button>
          </div>
          {children}
          <div className={styles.btn}>
            <Button type="button" text="Start losing weight" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

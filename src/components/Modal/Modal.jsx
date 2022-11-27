import { useEffect } from 'react';
import Button from 'components/Button/Button';
import styles from './Modal.module.scss';

const Modal = ({ toggleModal, isOpen }) => {
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
          <h2 className={styles.title}>
            Your recommended daily calorie intake is
          </h2>
          <div className={styles.thumb}>
            <p className={styles.number}>
              <span className={styles.text}>kcal</span>
            </p>
            <p className={styles.subtitle}>Foods you should not eat</p>
            <ol className={styles.list}>
              <li className={styles.item}></li>
            </ol>
          </div>
          <div className={styles.btn}>
            <Button type="button" text="Start losing weight" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

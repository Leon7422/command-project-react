import { useEffect, useState } from 'react';

import { ReactComponent as CloseSvg } from '../../images/close.svg';
import Button from 'components/Button/Button';

import styles from './Modal.module.scss';

const Modal = () => {
  let [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const onBackdropClick = ev => {
    if (ev.currentTarget === ev.target) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
  });

  const onKeydown = ev => {
    if (ev.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', onKeydown);
    };
  });

  return (
    <>
      {modal && (
        <div className={styles.overlay} onClick={onBackdropClick}>
          <div className={styles.modal}>
            <button
              type="button"
              className={styles.btnClose}
              onClick={closeModal}
            >
              <CloseSvg className={styles.img} />
            </button>
            <h2 className={styles.title}>
              Your recommended daily calorie intake is
            </h2>
            <p className={styles.number}>
              <span className={styles.text}>kcal</span>
            </p>
            <p className={styles.subtitle}>Foods you should not eat</p>
            <ol className={styles.list}>
              <li className={styles.item}></li>
            </ol>
            <div className={styles.btn}>
              <Button type="button" text="Start losing weight" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

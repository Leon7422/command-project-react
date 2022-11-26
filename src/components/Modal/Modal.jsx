import { useEffect } from 'react';

import Button from 'components/Button/Button';

import styles from './Modal.module.scss';

const Modal = ({toggleModal, isOpen, rate, products}) => {
  // console.log(rate);
  // console.log(products);
  const closeModal = () => {
    toggleModal();
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

  let flag = [styles.overlay, styles.isHidden];

  if (isOpen) {
    flag.splice(1, 1);
  } 

  return (
    <>
        <div className={flag.join(" ")} onClick={onBackdropClick}>
          <div className={styles.modal}>
            <div className={styles.btnThumb}>
            <button
              type="button"
              className={styles.btnClose}
              onClick={closeModal}
            >
            </button>
            </div>
            <h2 className={styles.title}>
              Your recommended daily calorie intake is
            </h2>
            <div className={styles.thumb}>
            <p className={styles.number}>
              {rate}
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

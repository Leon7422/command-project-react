import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import selectors from 'redux/selectors';
import operations from 'redux/operations';
import styles from './Modal.module.scss';

const Modal = ({ toggleModal, isOpen, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBackdropClick = ev => {
    if (ev.currentTarget === ev.target) {
      toggleModal();
    }
  };

  const userName = useSelector(selectors.getUserName);

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
  const userLogout = () => {
    dispatch(
      operations.logOut({
        username: { name: null, email: null, password: null },
      })
    );
    navigate('/login');
  };

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
            {children ? (
              <div className={`${styles.bar}`}>
                <p className={styles.paragraph}>{userName}</p>
                <button
                  type="button"
                  className={styles.button}
                  onClick={userLogout}
                >
                  Exit
                </button>
              </div>
            ) : (
              ''
            )}
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;

import { useDispatch } from 'react-redux';

import operations from 'redux/operations';
import Button from 'components/Button/Button';
import css from './DailyCaloriesForm.module.scss';

const DailyCaloriesForm = ({ openModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const userInfo = {
      height: Number(form.height.value),
      age: Number(form.age.value),
      weight: Number(form.currentWeight.value),
      desiredWeight: Number(form.desiredWeight.value),
      bloodType: Number(form.bloodType.value),
    }

    dispatch(operations.dailyRate(userInfo));
  }

  return (
    <section className={`${css['diary__section']}`}>
      <h1 className={`${css['diary__title']}`}>
        Calculate your daily calorie intake right now
      </h1>
      <form
        onSubmit={handleSubmit}
        name="diary__form"
        autoComplete="off"
        
      >
        <div className={`${css['diary__form']}`}>
        <label className={`${css['diary__label']}`}>
          Height *
          <input
            type="number"
            min="0"
            name='height'
            className={`${css['diary__input']}`}
          ></input>
        </label>
        <label className={`${css['diary__label']}`}>
          Age *
          <input
            type="number"
            min="0"
            name='age'
            className={`${css['diary__input']}`}
          ></input>
        </label>
        <label className={`${css['diary__label']}`}>
          Current weight *
          <input
            type="number"
            min="0"
            name='currentWeight'
            className={`${css['diary__input']}`}
          ></input>
        </label>
        <label className={`${css['diary__label']}`}>
          Desired weight *
          <input
            type="number"
            min="0"
            name='desiredWeight'
            className={`${css['diary__input']}`}
          ></input>
        </label>
        <p className={`${css['diary__label']}`}>Blood type *</p>
        <div className={`${css['diary__checkField']}`}>
          <label>
            <input
              type="radio"
              name="bloodType"
              value='1'
              className={`${css['diary__input--radio']}`}
            />{' '}
            1
          </label>
          <label>
            <input
              type="radio"
              name="bloodType"
              value='2'
              className={`${css['diary__input--radio']}`}
            />{' '}
            2
          </label>
          <label>
            <input
              type="radio"
              name="bloodType"
              value='3'
              className={`${css['diary__input--radio']}`}
            />{' '}
            3
          </label>
          <label>
            <input
              type="radio"
              name="bloodType"
              value='4'
              className={`${css['diary__input--radio']}`}
            />{' '}
            4
          </label>
        </div>
        </div>
        <div className={`${css['diary__button']}`}>
        <Button
          text={'Start losing weight'}
          type={'submit'}
          openModal={openModal}
        ></Button>
      </div>
      </form>
      
    </section>
  );
};

export default DailyCaloriesForm;

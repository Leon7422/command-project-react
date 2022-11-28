import Button from 'components/Button/Button';
import css from './DailyCaloriesForm.module.scss';

const DailyCaloriesForm = ({ handleSubmit }) => {
  return (
    <section className={`${css['diary__section']}`}>
      <h1 className={`${css['diary__title']}`}>
        Calculate your daily calorie intake right now
      </h1>
      <form onSubmit={handleSubmit} name="diary__form" autoComplete="off">
        <div className={`${css['diary__form']}`}>
          <label className={`${css['diary__label']}`}>
            Height *
            <input
              type="number"
              min="0"
              name="height"
              required
              className={`${css['diary__input']}`}
            ></input>
          </label>
          <label className={`${css['diary__label']}`}>
            Age *
            <input
              type="number"
              min="0"
              name="age"
              required
              className={`${css['diary__input']}`}
            ></input>
          </label>
          <label className={`${css['diary__label']}`}>
            Current weight *
            <input
              type="number"
              min="0"
              name="currentWeight"
              required
              className={`${css['diary__input']}`}
            ></input>
          </label>
          <label className={`${css['diary__label']}`}>
            Desired weight *
            <input
              type="number"
              min="0"
              name="desiredWeight"
              required
              className={`${css['diary__input']}`}
            ></input>
          </label>
          <p className={`${css['diary__label']}`}>Blood type *</p>
          <div className={`${css['diary__checkField']}`}>
            <label>
              <input
                type="radio"
                name="bloodType"
                value="1"
                required
                className={`${css['diary__input--radio']}`}
              />{' '}
              1
            </label>
            <label>
              <input
                type="radio"
                name="bloodType"
                value="2"
                required
                className={`${css['diary__input--radio']}`}
              />{' '}
              2
            </label>
            <label>
              <input
                type="radio"
                name="bloodType"
                value="3"
                required
                className={`${css['diary__input--radio']}`}
              />{' '}
              3
            </label>
            <label>
              <input
                type="radio"
                name="bloodType"
                value="4"
                required
                className={`${css['diary__input--radio']}`}
              />{' '}
              4
            </label>
          </div>
        </div>
        <div className={`${css['diary__button']}`}>
          <Button text={'Start losing weight'} type={'submit'}></Button>
        </div>
      </form>
    </section>
  );
};

export default DailyCaloriesForm;

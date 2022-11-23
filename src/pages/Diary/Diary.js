import UserBar from 'components/UserBar/UserBar';
import Summary from 'components/Summary/Summary';
import Button from 'components/Button/Button';
import css from './Diary.module.scss';

export default function Diary() {
  return ( <>
  <UserBar/>
    <section className={`${css['diary__section']}`}>
      <h1 className={`${css['diary__title']}`}>
        Calculate your daily calorie intake right now
      </h1>
      <form
        name="diary__form"
        autoComplete="off"
        className={`${css['diary__form']}`}
      >
        <label className={`${css['diary__label']}`}>
          Height *
          <input
            type="number"
            min="0"
            className={`${css['diary__input']}`}
          ></input>
        </label>
        <label className={`${css['diary__label']}`}>
          Age *
          <input
            type="number"
            min="0"
            className={`${css['diary__input']}`}
          ></input>
        </label>
        <label className={`${css['diary__label']}`}>
          Current weight *
          <input
            type="number"
            min="0"
            className={`${css['diary__input']}`}
          ></input>
        </label>
        <label className={`${css['diary__label']}`}>
          Desired weight *
          <input
            type="number"
            min="0"
            className={`${css['diary__input']}`}
          ></input>
        </label>
        <div>
          <p className={`${css['diary__label']}`}>Blood type *</p>
          <label>
            <input
              type="radio"
              name="blood-type"
              className={`${css['diary__input--radio']}`}
            />{' '}
            1
          </label>
          <label>
            <input
              type="radio"
              name="blood-type"
              className={`${css['diary__input--radio']}`}
            />{' '}
            2
          </label>
          <label>
            <input
              type="radio"
              name="blood-type"
              className={`${css['diary__input--radio']}`}
            />{' '}
            3
          </label>
          <label>
            <input
              type="radio"
              name="blood-type"
              className={`${css['diary__input--radio']}`}
            />{' '}
            4
          </label>
        </div>
      </form>
      <div className={`${css['diary__button']}`}>
        <Button text={'Start losing weight'} type={'submit'}></Button>
      </div>
      <Summary />
    </section>
    </>
  );
}
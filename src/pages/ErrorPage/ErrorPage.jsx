import scss from '../ErrorPage/ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={scss.wrapper}>
      <div>
        <div className={scss.starsec}></div>
        <div className={scss.starthird}></div>
        <div className={scss.starfourth}></div>
        <div className={scss.starfifth}></div>
      </div>
      <div className={scss.lamp__wrap}>
        <div className={scss.lamp}>
          <div className={scss.cable}></div>
          <div className={scss.cover}></div>
          <div className={scss.inCover}>
            <div className={scss.bulb}></div>
          </div>
          <div className={scss.light}></div>
        </div>
      </div>
      <section className={scss.error}>
        <div className={scss.error__content}>
          <div className={scss.error__message}>
            <h1 className={scss.message__title}>404</h1>
            <h2 className={scss.message__title}>Page not found</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;

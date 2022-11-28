import scss from '../ErrorPage/ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={scss.wrapper}>
      <div>
        <div class={scss.starsec}></div>
        <div class={scss.starthird}></div>
        <div class={scss.starfourth}></div>
        <div class={scss.starfifth}></div>
      </div>
      <div class={scss.lamp__wrap}>
        <div class={scss.lamp}>
          <div class={scss.cable}></div>
          <div class={scss.cover}></div>
          <div class={scss.inCover}>
            <div class={scss.bulb}></div>
          </div>
          <div class={scss.light}></div>
        </div>
      </div>
      <section class={scss.error}>
        <div class={scss.error__content}>
          <div class={scss.error__message}>
            <h1 class={scss.message__title}>404</h1>
            <h2 class={scss.message__title}>Page not found</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage;
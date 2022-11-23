import scss from '../DiaryProduct/DiaryProduct.module.scss';

const DiaryProduct = () => {
  return (
    <>
      <li className={`${scss.productsItem}`}>
        <p className={scss.title}>Eggplant</p>
        <div className={scss.wrapper}>
          <p className={scss.weight}>100 g</p>
          <p className={scss.kcal}>326 <span className={scss.kcalText}>kcal</span></p>
        </div>
        <button type="button" className={scss.deleteButton}></button>
      </li>
      <li className={`${scss.productsItem}`}>
        <p className={scss.title}>Eggplant</p>
        <div className={scss.wrapper}>
          <p className={scss.weight}>100 g</p>
          <p className={scss.kcal}>326 <span className={scss.kcalText}>kcal</span></p>
        </div>
        <button type="button" className={scss.deleteButton}></button>
      </li>
     <li className={`${scss.productsItem}`}>
        <p className={scss.title}>Eggplant</p>
        <div className={scss.wrapper}>
          <p className={scss.weight}>100 g</p>
          <p className={scss.kcal}>326 <span className={scss.kcalText}>kcal</span></p>
        </div>
        <button type="button" className={scss.deleteButton}></button>
      </li>
     <li className={`${scss.productsItem}`}>
        <p className={scss.title}>Eggplant</p>
        <div className={scss.wrapper}>
          <p className={scss.weight}>100 g</p>
          <p className={scss.kcal}>326 <span className={scss.kcalText}>kcal</span></p>
        </div>
        <button type="button" className={scss.deleteButton}></button>
      </li>
      <li className={`${scss.productsItem}`}>
        <p className={scss.title}>Eggplant</p>
        <div className={scss.wrapper}>
          <p className={scss.weight}>100 g</p>
          <p className={scss.kcal}>326 <span className={scss.kcalText}>kcal</span></p>
        </div>
        <button type="button" className={scss.deleteButton}></button>
      </li>
      <li className={`${scss.productsItem}`}>
        <p className={scss.title}>Eggplant</p>
        <div className={scss.wrapper}>
          <p className={scss.weight}>100 g</p>
          <p className={scss.kcal}>326 <span className={scss.kcalText}>kcal</span></p>
        </div>
        <button type="button" className={scss.deleteButton} onClick={() => {}}></button>
      </li>
    </>
  );
}

export default DiaryProduct;
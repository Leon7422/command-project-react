import scss from '../DiaryProduct/DiaryProduct.module.scss';

const DiaryProduct = () => {
  return (
    <>
      <li className={scss.productsItem}>
      <p className={scss.title}>Eggplant</p>
      <div className={scss.wrapper}>
        <p className={scss.weight}>100 g</p>
        <p className={scss.kcal}>326 kcal</p>
        <button type="button" className={scss.deleteButton}></button>
      </div>
    </li>
    <li className={scss.productsItem}>
      <p className={scss.title}>Eggplant</p>
      <div className={scss.wrapper}>
        <p className={scss.weight}>100 g</p>
        <p className={scss.kcal}>326 kcal</p>
          <button type="button" className={scss.deleteButton}>
        </button>
      </div>
    </li>
    </>
    
  );
}

export default DiaryProduct;
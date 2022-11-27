import scss from '../DiaryProduct/DiaryProduct.module.scss';
import { useContextInfo } from 'components/dateContext/dateContext';
import { useEffect } from 'react';
import operations from 'redux/operations';
import { useDispatch } from 'react-redux';

const DiaryProduct = () => {
  const { dateForApi, productListInfo, setProductListInfo } = useContextInfo();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentDateInfo({ date: dateForApi })).then(
      res => {
        setProductListInfo(res);
        console.log(res);
      }
    );
  }, [dateForApi, dispatch, setProductListInfo]);

  const deleteProduct = e => {
    console.log({
      dayId: productListInfo.payload.id,
      eatenProductId: e.target.id,
    });
    dispatch(
      operations.deleteProduct({
        dayId: productListInfo.payload.id,
        eatenProductId: e.target.id,
      })
    );
  };

  let eatenProducts = productListInfo?.payload?.eatenProducts || [];
  return eatenProducts.map(product => (
    <li key={product.id} className={`${scss.productsItem}`}>
      <p className={scss.title}>{product.title}</p>
      <div className={scss.wrapper}>
        <p className={scss.weight}>{product.weight} g</p>
        <p className={scss.kcal}>
          {Math.round(product.kcal)} <span className={scss.kcalText}>kcal</span>
        </p>
      </div>
      <button
        type="button"
        id={product.id}
        onClick={deleteProduct}
        className={scss.deleteButton}
      ></button>
    </li>
  ));
};

export default DiaryProduct;

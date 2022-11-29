import scss from '../DiaryProduct/DiaryProduct.module.scss';
import { useContextInfo } from 'components/dataContext/dataContext';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import selectors from 'redux/selectors';
import operations from 'redux/operations';
import { useDispatch } from 'react-redux';

const DiaryProduct = () => {
  const { dateForApi, productListInfo, setProductListInfo } = useContextInfo();
  const dispatch = useDispatch();
  const token = useSelector(selectors.getAccessToken);
  const newToken = useSelector(selectors.getRefreshToken);
  const isLoggedIn = useSelector(selectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(operations.fetchCurrentDateInfo({ date: dateForApi })).then(
      res => {
        setProductListInfo(res);
      }
    );
  }, [dateForApi, dispatch, newToken, setProductListInfo, token]);

  const deleteProduct = async e => {
    await dispatch(
      operations.deleteProduct({
        dayId: productListInfo.payload.id,
        eatenProductId: e.target.id,
      })
    );
    dispatch(operations.fetchCurrentDateInfo({ date: dateForApi })).then(
      res => {
        setProductListInfo(res);
      }
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

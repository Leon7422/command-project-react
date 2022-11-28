import scss from '../DiaryAddProductForm/DiaryAddProductForm.module.scss';
import operations from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useContextInfo } from 'components/dataContext/dataContext';
import SearchListArea from 'components/SearchListArea/SearchListArea';
// import debounce from 'lodash.debounce';

const DiaryAddProductForm = () => {
  const [productIdToAdd, setProductIdToAdd] = useState('');
  const [gramToAdd, setGramToAdd] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [showMealArea, setShowMealArea] = useState('');
  const [searhData, setSearhData] = useState(undefined);
  const { dateForApi, setProductListInfo } = useContextInfo();
  const dispatch = useDispatch();

  const findProduct = async e => {
    setSearchInputValue(e.target.value);
    const data = await dispatch(operations.productFinder(e.target.value));
    setSearhData(data.payload);
    setShowMealArea(data.payload);
    console.log(data);
    setProductIdToAdd('');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const delayedSearch = debounce(findProduct, 500);

  const addGramValue = e => {
    setGramToAdd(e.target.value);
  };

  const choseMeal = e => {
    setSearchInputValue(e.target.value);
    setShowMealArea('');
    setProductIdToAdd(e.target.id);
  };

  const addProduct = async e => {
    e.preventDefault();
    await dispatch(
      operations.productAddToList({
        date: dateForApi,
        productId: productIdToAdd,
        weight: gramToAdd,
      })
    );
    dispatch(operations.fetchCurrentDateInfo({ date: dateForApi })).then(
      res => {
        setProductListInfo(res);
      }
    );
    setSearchInputValue('');
    setGramToAdd('');
  };

  return (
    <form onSubmit={addProduct} className={scss.form}>
      <div className={scss.box}>
        <input
          type="text"
          onChange={findProduct}
          placeholder="Enter product name"
          className={scss.input}
          value={searchInputValue}
        />
        {showMealArea && (
          <SearchListArea products={searhData} addFunc={choseMeal} />
        )}
        <input
          onChange={addGramValue}
          value={gramToAdd}
          type="text"
          placeholder="Grams"
          className={`${scss.input} ${scss.grams}`}
        />
      </div>
      <button type="submit" className={scss.buttonAdd}>
        Add
      </button>
      <button type="submit" className={scss.buttonPlus}></button>
    </form>
  );
};

export default DiaryAddProductForm;

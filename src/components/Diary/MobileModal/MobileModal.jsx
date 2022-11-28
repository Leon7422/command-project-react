import scss from '../MobileModal/MobileModal.module.scss';
import operations from 'redux/operations';
import { useContextInfo } from 'components/dataContext/dataContext';
import { useState } from 'react';
import SearchListArea from 'components/SearchListArea/SearchListArea';
import { useDispatch } from 'react-redux';

const MobileModal = ({ closeModal }) => {
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
    closeModal(false);
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
          type="text"
          placeholder="Grams"
          className={`${scss.input} ${scss.grams}`}
        />
      </div>
      <button type="submit" className={scss.buttonAdd}>
        Add
      </button>
    </form>
  );
};

export default MobileModal;

import scss from '../DiaryAddProductForm/DiaryAddProductForm.module.scss';
import operations from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const DiaryAddProductForm = selectedDate => {
  const [productIdToAdd, setProductIdToAdd] = useState('');
  const [gramToAdd, setGramToAdd] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [showMealArea, setShowMealArea] = useState('');
  const [searhData, setSearhData] = useState(undefined);
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

  const addProduct = e => {
    e.preventDefault();
    console.log(productIdToAdd);
    console.log(gramToAdd);
    console.log(selectedDate);
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
          <div className={`${scss.searchArea}`}>
            {searhData.map(item => (
              <button
                onClick={choseMeal}
                className={`${scss.btnAdd}`}
                type="button"
                key={item._id}
                id={item._id}
                value={item.title.ru}
              >
                {item.title.ru}
              </button>
            ))}
          </div>
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
      <button type="submit" className={scss.buttonPlus}></button>
    </form>
  );
};

export default DiaryAddProductForm;

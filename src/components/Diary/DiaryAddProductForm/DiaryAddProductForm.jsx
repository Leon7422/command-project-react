import scss from '../DiaryAddProductForm/DiaryAddProductForm.module.scss';
import operations from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const DiaryAddProductForm = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searhData, setSearhData] = useState(undefined);
  const dispatch = useDispatch();

  const findProduct = async e => {
    setSearchInputValue(e.target.value);
    const data = await dispatch(operations.productFinder(e.target.value));
    setSearhData(data.payload);
    console.log(data);
  };

  const choseMeal = e => {
    setSearchInputValue(e.target.value);
  };

  return (
    <form onSubmit={null} className={scss.form}>
      <div className={scss.box}>
        <input
          type="text"
          onChange={findProduct}
          placeholder="Enter product name"
          className={scss.input}
          value={searchInputValue}
        />
        {searhData && (
          <div className={`${scss.searchArea}`}>
            {searhData.map(item => (
              <button
                onClick={choseMeal}
                className={`${scss.btnAdd}`}
                type="button"
                key={item._id}
                id={item._id}
                value={item.title.ua}
              >
                {item.title.ua}
              </button>
            ))}
          </div>
        )}
        <input
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

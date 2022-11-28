import scss from './SearchListArea.module.scss';

const SearchListArea = ({ products, addFunc }) => {
  return (
    <div className={`${scss.searchArea}`}>
      {products.map(item => (
        <button
          onClick={addFunc}
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
  );
};

export default SearchListArea;

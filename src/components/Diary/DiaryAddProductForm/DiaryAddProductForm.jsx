import scss from '../DiaryAddProductForm/DiaryAddProductForm.module.scss';

const DiaryAddProductForm = () => {
  
  return (
    <form onSubmit={null} className={scss.form}>
      <div className={scss.box}>
        <input type="text" placeholder='Enter product name' className={scss.input} />
        <input type="text" placeholder='Grams' className={`${scss.input} ${scss.grams}`} />
      </div>
      <button type='submit' className={scss.buttonAdd}>Add</button>
      <button type='submit' className={scss.buttonPlus}></button>
    </form>
  );
}

export default DiaryAddProductForm;
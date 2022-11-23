import scss from '../DiaryAddProductForm/DiaryAddProductForm.module.scss';

const DiaryAddProductForm = () => {
  
  return (
    <form onSubmit={null} className={scss.form}>
      <h2 className={scss.date}>20.06.2020</h2>
      <div className={scss.wrapper}>
        <div className={`${scss.field}`}>
          <label className={scss.label}>Enter product name</label>
          <input type="text" name="title" className={scss.input} onChange={null}/>
        </div>
        <div className={`${scss.field}`}>
          <label className={`${scss.label} ${scss.gram}`}>Gram</label>
          <input type="text" name="weight" className={`${scss.input} ${scss.gram}`} />
        </div>
        <button type='submit' className={scss.button}></button>
      </div>
    </form>
  );
}

export default DiaryAddProductForm;
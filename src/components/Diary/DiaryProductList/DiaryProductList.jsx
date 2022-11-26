import DiaryProduct from "components/Diary/DiaryProduct/DiaryProduct";
import scss from '../DiaryProductList/DiaryProductList.module.scss';

const DiaryProductList = () => {
  return (
    <div>
       <div className={scss.scroll}>
       <ul className={scss.list}>
      <DiaryProduct/>
        </ul>
      </div>
      <button type="button" onClick={() => {}} className={scss.buttonPlus}></button>
    </div>
   
  );
}

export default DiaryProductList;
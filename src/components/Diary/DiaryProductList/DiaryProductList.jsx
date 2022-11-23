import DiaryProduct from "components/Diary/DiaryProduct/DiaryProduct";
import scss from '../DiaryProductList/DiaryProductList.module.scss';

const DiaryProductList = () => {
  return (
    <div className={scss.scroll}>
       <ul className={scss.list}>
      <DiaryProduct/>
    </ul>
    </div>
  );
}

export default DiaryProductList;
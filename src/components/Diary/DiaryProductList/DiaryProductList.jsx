import DiaryProduct from "components/Diary/DiaryProduct/DiaryProduct";
import scss from '../DiaryProductList/DiaryProductList.module.scss';

const DiaryProductList = () => {
  return (
    <ul className={scss.list}>
      <DiaryProduct/>
    </ul>
  );
}

export default DiaryProductList;
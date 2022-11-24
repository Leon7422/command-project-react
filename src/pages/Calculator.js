import DiaryAddProductForm from "components/Diary/DiaryAddProductForm/DiaryAddProductForm";
import DiaryDateCalendar from "components/Diary/DiaryDateCalendar/DiaryDateCalendar";
import DiaryProductList from "components/Diary/DiaryProductList/DiaryProductList";


export default function Calculator() {
  return (
    <div>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductList/>
    </div>
  );
}

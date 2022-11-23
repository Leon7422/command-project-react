import scss from '../DiaryDateCalendar/DiaryDateCalendar.module.scss';

const DiaryDateCalendar = () => {
  return (
    <div className={scss.calendar}>
      <h2 className={scss.date}>23.11.2022</h2>
      <button type='button' className={scss.calendarBtn}></button>
    </div>
  );
}

export default DiaryDateCalendar;
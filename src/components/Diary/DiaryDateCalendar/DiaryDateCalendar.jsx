import { format, isValid, parse } from 'date-fns';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import '../DiaryDateCalendar/Calendar.css';
import scss from '../DiaryDateCalendar/DiaryDateCalendar.module.scss';
import { useDate } from 'components/dateContext/dateContext';

const DiaryDateCalendar = () => {
  const { selected, setSelected } = useDate();
  const [inputValue, setInputValue] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleButtonClick = () => {
    setIsCalendarOpen(true);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  const handleInputChange = e => {
    setInputValue(e.currentTarget.value);
    const date = parse(e.currentTarget.value, 'y-MM-dd', new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleDaySelect = date => {
    setSelected(date);
    if (date) {
      setInputValue(format(date, 'dd.MM.y'));
      closeCalendar();
    } else {
      setInputValue('');
    }
  };

  return (
    <>
      <div className={scss.calendar}>
        <input
          className={scss.dateInput}
          type="text"
          placeholder={format(new Date(), 'dd.MM.y')}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className={scss.calendarBtn}
          aria-label="Pick a date"
          onClick={handleButtonClick}
        ></button>
      </div>
      {isCalendarOpen && (
        <DayPicker
          styles={{
            months: {
              position: 'absolute',
              zIndex: '100',
              backgroundColor: 'white',
              borderRadius: '15px',
              boxShadow: '0px 0px 69px 1px rgba(0,0,0,0.69)',
            },
            caption: { color: '#fc842d' },
          }}
          initialFocus={isCalendarOpen}
          mode="single"
          required
          defaultMonth={selected}
          selected={selected}
          onSelect={handleDaySelect}
        />
      )}
    </>
  );
};

export default DiaryDateCalendar;

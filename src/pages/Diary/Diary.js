import { useState } from 'react';

// import UserBar from 'components/UserBar/UserBar';
import { AppBar } from 'components/AppBar/AppBar';
import Summary from 'components/Summary/Summary';
import DailyCaloriesForm from 'components/DailyCaloriesForm/DailyCaloriesForm';
import Modal from "components/Modal/Modal";

export default function Diary() {
  let [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  }

  return (
    <>
      {/* <UserBar /> */}
      <AppBar />
      <DailyCaloriesForm openModal={toggleModal}/>
      <Summary />
      <Modal toggleModal={toggleModal} isOpen={isModalOpened}/>
    </>
  );
}

import { useState } from 'react';

import Modal from "components/Modal/Modal";

export default function Home() {
  let [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  }

  return <div>Home
    <button type='button' onClick={toggleModal}>Open modal</button>
    <Modal toggleModal={toggleModal} isOpen={isModalOpened}/>
  </div>;
}

import { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const useDate = () => useContext(DateContext);

export const DateProvider = ({ children }) => {
  const [selected, setSelected] = useState(new Date());

  const dateForApi = `${selected.getFullYear()}-${
    selected.getMonth() + 1
  }-${selected.getDate()}`;

  return (
    <DateContext.Provider value={{ selected, setSelected, dateForApi }}>
      {children}
    </DateContext.Provider>
  );
};

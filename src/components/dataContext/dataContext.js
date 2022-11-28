import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const useContextInfo = () => useContext(Context);

export const DateProvider = ({ children }) => {
  const [selected, setSelected] = useState(new Date());
  const [productListInfo, setProductListInfo] = useState([]);

  const dateForApi = `${selected.getFullYear()}-${
    selected.getMonth() + 1
  }-${selected.getDate()}`;

  return (
    <Context.Provider
      value={{
        selected,
        setSelected,
        dateForApi,
        productListInfo,
        setProductListInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
};
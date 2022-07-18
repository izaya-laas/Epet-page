import { createContext, useState } from "react";

const darkContext = createContext();

const initialState = false;

const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(initialState);

  const handleTheme = () => {
    setDark(!dark);
  };

  const data = { dark, handleTheme };

  return <darkContext.Provider value={data}>{children}</darkContext.Provider>;
};

export { DarkProvider };
export default darkContext;

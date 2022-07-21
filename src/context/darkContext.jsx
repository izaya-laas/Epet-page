import { createContext, useState } from "react";

const darkContext = createContext();

const initialState = true;

const DarkProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(initialState);

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  const data = { isDark, handleTheme };

  return <darkContext.Provider value={data}>{children}</darkContext.Provider>;
};

export { DarkProvider };
export default darkContext;

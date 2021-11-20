import { createContext, useState } from "react";

const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [totalGifts, setTotalGifts] = useState(null);

  const value = {
    totalGifts,
    setTotalGifts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider, AppContext };

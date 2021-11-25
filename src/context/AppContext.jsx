import { createContext, useState, useEffect } from "react";

const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    endpoint: "trending",
    limit: 15,
    q: "",
  });

  const handlerSearch = ({ endpoint, q }) => {
    setState({ endpoint, q });
  };

  const value = {
    state,
    handlerSearch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider, AppContext };

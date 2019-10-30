import { useLocalStore } from "mobx-react-lite";
import React, { createContext, useContext } from "react";
import { createStore, TStore } from "../store";

const StoreContext = createContext<TStore | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const store = useContext(StoreContext);
  if (!store) throw Error("Store shouldn't be null");
  return store;
};

export default StoreContext;

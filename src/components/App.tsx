import React from "react";
import { StoreProvider } from "../contexts/StoreContext";
import CityList from "./CityList";
import Search from "./Search";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <h1>Cities</h1>
      <Search />
      <CityList />
    </StoreProvider>
  );
};

export default App;

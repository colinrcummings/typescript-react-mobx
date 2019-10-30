import React from "react";
import { StoreProvider } from "../contexts/StoreContext";
import CityList from "./CityList";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <h1>Cities</h1>
      <CityList />
    </StoreProvider>
  );
};

export default App;

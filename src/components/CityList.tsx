import { useObserver } from "mobx-react-lite";
import React from "react";
import { useStoreContext } from "../contexts/StoreContext";

export const CityList = () => {
  const { allCities } = useStoreContext();

  return useObserver(() => (
    <ul>
      {allCities.map(city => (
        <li key={city}>{city}</li>
      ))}
    </ul>
  ));
};

export default CityList;

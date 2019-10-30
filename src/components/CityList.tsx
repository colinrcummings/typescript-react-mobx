import { observer } from "mobx-react-lite";
import React from "react";
import { useStoreContext } from "../contexts/StoreContext";

const CityList = observer(() => {
  const { filteredCities } = useStoreContext();

  if (!filteredCities.length) {
    return <p>No cities match search</p>;
  }

  return (
    <ul>
      {filteredCities.map(city => (
        <li key={city}>{city}</li>
      ))}
    </ul>
  );
});

export default CityList;

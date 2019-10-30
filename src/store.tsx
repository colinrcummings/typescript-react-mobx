import { observable } from "mobx";

const cities = ["Amsterdam", "London", "Madrid"];

export const createStore = () => {
  const store = {
    query: observable.box(""),
    setQuery(query: string) {
      store.query.set(query.toLowerCase());
    },
    get filteredCities() {
      return cities.filter(city =>
        city.toLowerCase().includes(store.query.get())
      );
    }
  };

  return store;
};

export type TStore = ReturnType<typeof createStore>;

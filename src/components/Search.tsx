import { observer } from "mobx-react-lite";
import React from "react";
import { useStoreContext } from "../contexts/StoreContext";

const Search: React.FC = observer(() => {
  const { query, setQuery } = useStoreContext();

  return (
    <input
      placeholder="search..."
      value={query.get()}
      onChange={e => setQuery(e.target.value)}
    />
  );
});

export default Search;

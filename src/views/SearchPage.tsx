import { useState } from "react";
import SearchBar from "../components/Search/SearchBar";
import SearchResultsList from "../components/Search/SearchResultsList";

function SearchPage() {
  const [results, setResults] = useState([]);
  return (
    <div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
}

export default SearchPage;

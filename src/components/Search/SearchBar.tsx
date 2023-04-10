import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

interface Props {
  setResults: Function;
}

function SearchBar({ setResults }: Props) {
  const [input, setInput] = useState("");

  const fetchData = (value: string) => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user: any) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type=""
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

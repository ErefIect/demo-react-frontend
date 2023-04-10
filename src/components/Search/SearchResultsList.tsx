import SearchResult from "./SearchResult";
import "./SearchResultsList.css";

interface Props {
  results: any[];
}

function SearchResultsList({ results }: Props) {
  return (
    <div className="results-list">
      {
        results.map((result, id) => {
          return <SearchResult 
            name={result.name} 
            key={id} 
          />;
        })
      }
    </div>
  );
}

export default SearchResultsList;

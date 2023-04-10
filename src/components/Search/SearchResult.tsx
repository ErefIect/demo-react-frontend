import "./SearchResult.css";
interface Props {
  name: string;
}
function SearchResult({ name }: Props) {
  return (
    <div
      className="search-result"
      onClick={(e) => {
        alert("click the" + { name });
      }}
    >
      {name}
    </div>
  );
}

export default SearchResult;

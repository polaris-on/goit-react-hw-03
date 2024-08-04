import s from "./search-box.module.css";

const SearchBox = ({ handleSearch, searchValue }) => {
  return (
    <div className={s.searchBox}>
      <h2 className={s.subtitle}>SearchBox</h2>
      <input
        value={searchValue}
        className={s.searchInput}
        name="search"
        type="search"
        onChange={(event) => handleSearch(event.target)}
      />
    </div>
  );
};

export default SearchBox;

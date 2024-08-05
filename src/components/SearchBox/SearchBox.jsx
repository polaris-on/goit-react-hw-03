import s from "./search-box.module.css";

const SearchBox = ({ handleSearch, searchQuery }) => {
  return (
    <div className={s.searchBox}>
      <h2 className={s.subtitle}>SearchBox</h2>
      <input
        value={searchQuery}
        className={s.searchInput}
        name="search"
        type="search"
        onChange={(event) => handleSearch(event)}
      />
    </div>
  );
};

export default SearchBox;

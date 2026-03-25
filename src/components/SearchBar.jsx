import styles from "./SearchBar.module.css";
function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Search Note</label>
      <input
        className={styles.input}
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

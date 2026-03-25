function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <label>Search Note</label>
      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

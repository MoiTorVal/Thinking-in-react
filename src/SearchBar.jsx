function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <div>
        <label>
          <input type="checkbox" /> Only show products in stock
        </label>
      </div>
    </form>
  );
}

export default SearchBar;

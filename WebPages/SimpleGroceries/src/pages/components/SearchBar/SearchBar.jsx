import "./SearchBar.css";

export default () => {
  return (
    <div className="nav-list search">
      <i className="fas fa-search"></i>
      <input type="text" placeholder="search 'milk'" />
    </div>
  );
};

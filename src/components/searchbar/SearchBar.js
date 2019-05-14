import React from 'react';
import './Searchbar.scss';

function SearchBar() {
  return (
    <div className="Searchbar">
      <div className="divisions">
        <input type="text" placeholder="Player Name"></input>
        <select className="custom-select">
          <option>Attacking Midfield</option>
          <option>Central Midfield</option>
          <option>Centre-Back</option>
          <option>Centre-Forward</option>
          <option>Centre-Forward</option>
          <option>Defensive Midfield</option>
          <option>Keeper</option>
          <option>Left Midfield</option>
          <option>Left Wing</option>
          <option>Left-Back</option>
          <option>Right-Back</option>
        </select>
        <input type="text" placeholder="Age"></input>
      </div>
      <div className="divisions">
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;

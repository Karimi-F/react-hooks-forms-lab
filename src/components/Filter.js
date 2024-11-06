import React from "react";

function Filter({ search,onSearchChange,onCategoryChange }) {

  function handleInputChange(event){
    onSearchChange(event.target.value);
  }
  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search" 
      value={search}
      onChange={handleInputChange}
      placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items,search }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = 
    selectedCategory === "All" || item.category === selectedCategory;

    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
  
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
     
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

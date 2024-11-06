import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search,setSearch] = useState("");
  const [selectedCategory,setSelectedCategory] = useState("All")

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange (search) {
    setSearch (search);
  }

  function handleCategoryChange(selectedCategory){
    setSelectedCategory(selectedCategory);
  }

function handleItemFormSubmit(newItem){
  setItems((previousItems) =>[...previousItems,newItem]);
}

const filteredItems = items.filter((item) =>
item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter 
        search={search} 
        onSearchChange={handleSearchChange} 
        onCategoryChange={handleCategoryChange}/>
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
       <ShoppingList items={filteredItems} search={search} />
    </div>
  );
}

export default App;

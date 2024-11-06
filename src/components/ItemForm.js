import React from "react";
import { v4 as uuid } from "uuid";



function ItemForm({onItemFormSubmit}) {

  const [itemName,setItemName] = React.useState("");
  const [itemCategory, setItemCategory] = React.useState("Produce");
  // const [addItem,setAddItem] = React.useState(newItem)

function handleItemChange (event){
  setItemName(event.target.value);
}

function handleCategoryChange(event){
  setItemCategory(event.target.value);
}

console.log(onItemFormSubmit);

  function handleSubmit(event){
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
  
    onItemFormSubmit(newItem);
  
    setItemName("");
    setItemCategory("produce");
  }

 

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        value={itemName}
        onChange={handleItemChange}/>
      </label>

      <label>
        Category:
        <select 
        name="category" 
        value={itemCategory} 
        onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

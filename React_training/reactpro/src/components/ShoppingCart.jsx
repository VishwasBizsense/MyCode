import React, { useState } from 'react';

function ShoppingCart() {
  //------------------- Define state to hold the array of items--------------------------
  const [cartItems, setCartItems] = useState([]);
  const [itemName, setItemName] = useState('');

  //-------------- Function to add an item to the cart----------------------
  const addItemToCart = () => {
    if (itemName.trim() !== '') {
      setCartItems([...cartItems, { id: cartItems.length + 1, name: itemName }]);
      setItemName(''); // Clear the input field after adding the item
    }
  };

  // ----------------------Function to remove an item from the cart---------------
  const removeItemFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div>
      {/*--------------- Input field to add item ----------------*/}
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={addItemToCart}>Add Item</button>

      {/* ---------------------Display cart items --------------------*/}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => removeItemFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;

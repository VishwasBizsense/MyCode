import { useState } from "react";

export default function Shopping() {
  const [cartItem, setCartItem] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItemToCart = () => {
    // Check for empty string
    if (itemName.trim() !== "") {
      setCartItem([...cartItem, { name: itemName }]);
      setItemName("");
    }
  };
  const removeItemFromCart = (index) => {
    setCartItem(cartItem.toSpliced(index, 1));
    // setCartItem(cartItem.filter((item, idx) => idx !== index));
  };

  return (
    <div className="cartBox">
      <input
        type="text"
        placeholder="Add item names"
        value={itemName}
        onChange={(e) => {
          setItemName(e.target.value);
        }}
      />
      <button onClick={addItemToCart}>Add Item</button>

      <ul>
        {cartItem.map((item, index) => (
          <li key={index}>
            {item.name}
            <button
              onClick={() => {
                removeItemFromCart(index);
              }}
            >
              Nahi Chahiye
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

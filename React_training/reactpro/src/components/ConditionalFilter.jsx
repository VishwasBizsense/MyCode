import Fruit from "./IndiFruits/Fruit"
export default function ConditionalFilter() {
  const fruits = [
    { name: "Apple", price: 20, stock: "available" },
    { name: "Mango", price: 30, stock: "unavailable" },
    { name: "Banana", price: 50, stock: "available" },
    { name: "Coconut", price: 35, stock: "unavailable" },
  ];
  return (
    <div><h1>Only In Stock:</h1>
      <ul>
      {fruits.filter(fruit => fruit.stock === 'available').map(fruit => (
                      <Fruit key={fruit.name}
                      name={fruit.name}
                      price={fruit.price}
                      stock={fruit.stock}
              />
          ))}
      </ul>
    </div>
  );
}

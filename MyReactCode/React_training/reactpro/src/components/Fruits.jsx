import Fruit2 from "./IndiFruits/Fruit2";
export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 20, stock: "available" },
    { name: "Mango", price: 30, stock: "unavailable" },
    { name: "Banana", price: 50, stock: "available" },
    { name: "Coconut", price: 35, stock: "unavailable" },
  ];
  return (
    <div>
      <h1>List of Fruits</h1>
      <ul>
        {" "}
        {fruits.map((fruit) => (
          <Fruit2
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            stock={fruit.stock}
          />
        ))}
      </ul>
    </div>
  );
}

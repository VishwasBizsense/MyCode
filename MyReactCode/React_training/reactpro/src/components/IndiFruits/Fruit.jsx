export default function Fruit({name,price,stock}) {
  
  return (
    <li key={name}>
      {name} ${price} {stock}
    </li>
  );
}
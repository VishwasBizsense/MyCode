export default function Fruit2({ keys,name, price, stock }) {

  return (
    <>
      {stock == "available" ? (
        <li>
          {name} ${price} {stock}
        </li>
      ) : (
        ""
      )}
    </>
  );
}

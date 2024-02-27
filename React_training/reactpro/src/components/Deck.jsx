export default function Deck({ myDeck }) {
  return (
    <div>
      <ul>
        <h2>Bridge-Spam</h2>
        {
          myDeck.map((card) => (
            <li key = {card}>{ card } </li>
        ))}
      </ul>
    </div>
  );
}

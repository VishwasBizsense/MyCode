import { useState } from 'react';
import planetList from './data.jsx'; // Assuming you've exported the planet data as planetList

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    // Increment the index, wrapping around to 0 if it exceeds the length of the planetList array
    setIndex((index + 1) % planetList.length);
  }

  const planet = planetList[index];
  return (
    <>

      <h3>
        <i>{planet.name} </i> <br />
        Diameter: {planet.diameter}<br />
        Moons: {planet.moons}<br />
      </h3>
      <h3>  
        ({index + 1} of {planetList.length})
      </h3>
      <img 
        src={planet.imageUrl} 
        alt={planet.description}
      />
      <p>
        {planet.description}
      </p>
      <button onClick={handleClick}>
        Next
      </button>
    </>
  );
}

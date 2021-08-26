import React, { useEffect } from 'react';
import useGetDetails from '../service/useGetDetails';

const Card = (props) => {
  const { details, getDetails } = useGetDetails();

  useEffect(() => {
    getDetails(props.name)
  }, [])

  details && console.log(details)

  return (
    <div>
      <h5>{props.name}</h5>
      <img src={details.sprites.front_default} alt={props.name} />
      <button>Add to Pokedex</button>
      <button>Show Details</button>
    </div>
  );
};

export default Card;

import React, { useEffect } from 'react';
import useGetDetails from '../service/useGetDetails';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

const CardContainer = styled.div`
  border: 1px solid black;
  width: 40vh;
  height: 40vh;
  display: inline-grid;  
  align-content: end;
  justify-items: center;
`

const MainContainer = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: dense;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  
`

const Card = (props) => {

  const history = useHistory()

  const showDetails = () => {
    history.push("/pokemon/details")
  }

  const { details, getDetails } = useGetDetails();

  useEffect(() => {
    getDetails(props.name)
  }, [])

  details && console.log(details)

  return (
    <MainContainer>
    <CardContainer>
      <h5>{props.name}</h5>
      {/* <img src={details.sprites.front_default} alt={props.name} /> */}
      <button>Add to Pokedex</button>
      <button onClick={showDetails}>Show Details</button>
    </CardContainer>
    </MainContainer>
  );
};

export default Card;

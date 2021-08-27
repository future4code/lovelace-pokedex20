import React, { useEffect } from 'react';
import useGetDetails from '../service/useGetDetails';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  height: 25%;
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
    <CardContainer>
      <img src={details.sprites.front_default} alt={props.name} />
      <h4>{props.name}</h4>
      <ButtonsContainer>
        <button>Capture</button>
        <button onClick={showDetails}>Show Details</button>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default Card;

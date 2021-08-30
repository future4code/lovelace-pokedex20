import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import useGetDetails from '../../service/useGetDetails';
import Footer from '../../components/Footer';

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  height: 98vh;
`;

const HeaderContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 10px;
`;

const Photos = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
`;

const TypesMoves = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 100px;
`;

const Types = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const Moves = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

function DetailsPage() {
  const history = useHistory();
  const { name } = useParams();
  const { details, getDetails } = useGetDetails();

  console.log(details);

  useEffect(() => {
    getDetails(name);
  }, []);

  const goBack = () => {
    history.goBack();
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <h2>DetailsPage</h2>
        <button onClick={goBack}>Voltar</button>
      </HeaderContainer>
      <Container>
        <Photos>
          <img src={details && details.sprites && details.sprites.front_default} alt={details.name} />
          <img src={details && details.sprites && details.sprites.back_default} alt={details.name} />
        </Photos>
        <Stats>
          <h3>Stats</h3>
          <p>HP - {details && details.power && details.power.hp}</p>
          <p>Attack - {details && details.power && details.power.attack}</p>
          <p>Defense - {details && details.power && details.power.defense}</p>
          <p>Special defense - {details && details.power && details.power.specialDefense}</p>
          <p>Speed - {details && details.power && details.power.speed}</p>
        </Stats>
        <TypesMoves>
          <Types>
            <h3>Types</h3>
            <p>{details && details.types && details.types[0]}</p>
            <p>{details && details.types && details.types[1]}</p>
          </Types>
          <Moves>
            <h3>Moves</h3>
            <p>{details && details.moves && details.moves[0]}</p>
            <p>{details && details.moves && details.moves[1]}</p>
            <p>{details && details.moves && details.moves[2]}</p>
          </Moves>
        </TypesMoves>
      </Container>
      <Footer />
    </PageContainer>
  );
}

export default DetailsPage;

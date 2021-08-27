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
  padding: 5px 15px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid black;
`

const Photos = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border: 1px solid black;
`
const Stats = styled.div`
  display: grid;
  border: 1px solid black;
`
const Moves = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  border: 1px solid black;
`

function DetailsPage() {
  const history = useHistory();
  const { name } = useParams();
  const { details, getDetails } = useGetDetails();

  details && console.log(details);

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
          <p>HP {details.power.hp}</p>
          <p>attack {details.power.attack}</p>
          <p>defense {details.power.defense}</p>
          <p>special-defense {details.power.specialDefense}</p>
          <p>speed {details.power.speed}</p>
        </Stats>
        <Moves>
          <div>
            <h5>Type {details.type}</h5>
            <h5>Type {details.type}</h5>
          </div>
        </Moves>
      </Container>
      <Footer />
    </PageContainer>
  );
}

export default DetailsPage;

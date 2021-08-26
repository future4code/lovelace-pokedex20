import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';


const HeaderContainer = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
`

function DetailsPage () {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    
    return (

        <div>
            <HeaderContainer>
            
            <button onClick={goBack}>Voltar</button>
            <h2>DetailsPage</h2>
            <button>Adicionar/Remover</button>

            </HeaderContainer>
        </div>
    )
}

export default DetailsPage;
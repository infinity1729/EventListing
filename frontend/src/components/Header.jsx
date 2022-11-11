import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
        <Text>
            <p>GENERAL</p>
        </Text>
    </Container>      
  );
}

export default Header;

const Container = styled.div`
    background: #5340e3;
    display: flex;
    color: white;
    width: 100%;
    height: 15vh;
    padding: 10px;
`;

const Text = styled.div`
    display: flex;
    width: 30%;
    font-size: 50px;
    justify-content: center;
    align-items: center;

`;
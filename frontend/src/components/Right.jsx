import React from 'react';
import Events from './Events';
import Header from './Header';
import styled from 'styled-components';

function Right() {
  return (
    <Container>
        <Header />
        <Events />
    </Container>
  );
}

export default Right;

const Container = styled.div`
    width: 70%;
    height: 100vh;
    ${'' /* box-shadow: 5px 10px; */}
`;
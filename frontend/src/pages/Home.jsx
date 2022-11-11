import React from 'react';
import styled from 'styled-components';
import Right from '../components/Right';
// import LogoPage from '../components/LogoPage';
import Left from '../components/Left';

function Home() {
  return (
    <Container>
        <Left/>
        <Right />
    </Container>
  );
}

export default Home;

const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    width: 100%;
`;


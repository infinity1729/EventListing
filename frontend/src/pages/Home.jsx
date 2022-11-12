import React, {Component} from 'react';
import styled from 'styled-components';
import Right from '../components/Right';
import Left from '../components/Left';
import { ListProvider } from '../components/ElistContext';

function Home() {

  return (
    <ListProvider>

      <Container>
        <Left />
        <Right />
      </Container>

    </ListProvider>
  );
}

export default Home;

const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    width: 100%;
`;


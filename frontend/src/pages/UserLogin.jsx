import React, {Component} from 'react';
import styled from 'styled-components';
import Right from '../components/Right';
import Left from '../components/Left';
import { ListProvider } from '../components/ElistContext';
import Card from "../components/LoginPageCard/Card";

function UserLogin() {

  return (
    <>
    <Container>
        <Card />
    </Container>
    </>
  );
}

export default UserLogin;

const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;


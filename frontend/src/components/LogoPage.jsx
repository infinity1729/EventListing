import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

function LogoPage() {
  return (
    <Container>
        <Logo />
        <Text><p>EVENT LISTER</p></Text>
    </Container>
  );
}

export default LogoPage;

const Container = styled.div`
    display: flex;
    background: #19027d;
    color: white;
    width: 100%;
    height: 15vh;
    padding: 10px;
`;

const Text = styled.div`
    display: flex ;
    width: 100%;
    font-size: 2rem;
    justify-content: left;
    align-items: center;
`;

//#19027d
//#bcd2eb
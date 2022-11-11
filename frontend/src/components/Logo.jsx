import React from 'react';
import styled from 'styled-components';

function Logo() {
  return (
    <Container>
      <Image src="https://event.iitg.ac.in/icann2019/Proceedings_LaTeX/2019/IITG_White.png" />
    </Container>
  );
}

export default Logo;

const Container = styled.div`
    display: flex;
    height: 15vh;
    width: 50%;
    justify-content: center;
    align-items: center;
`;


const Image = styled.img`
    display: flex;
    width: 80%;
    height: 15vh;
`

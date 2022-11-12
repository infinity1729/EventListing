import React from 'react';
import LogoPage from './LogoPage';
import styled from 'styled-components';
import ClubList from './ClubList';

function Left() {
  return (
      <Container>
          <LogoPage />
          <ClubList />
      </Container>
  );
}

export default Left;

const Container = styled.div`
    width: 30%;
`;

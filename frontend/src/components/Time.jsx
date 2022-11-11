import React from 'react';
import styled from 'styled-components';

function Time() {
  return (
    <Container>
      <Text><p>10:00pm - 11:00am</p></Text>
    </Container>
  )
}

export default Time;

const Container = styled.div`
    width: 35%;
`;

const Text = styled.div`
    display: flex;
    font-size: 25px;
    align-items: center;
    justify-content: center;
`;
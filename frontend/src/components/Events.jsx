import React, {Component} from 'react';
import styled from 'styled-components';
import Card from './Card';
function Events(props){
  console.log(props.eventList);
  return (
    <Container>
        {props.eventList.map( (event) => {
            return (
                <Card 
                date = {event.start_date}
                title = {event.name}
                description = {event.description}
                />
            );
        })};    
    </Container>
  );
}

export default Events;

const Container = styled.div`
    
    ${'' /* width: 70%; */}
    ${'' /* height: 100vh; */}
`;



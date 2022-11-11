import React from 'react';
import styled from 'styled-components';
import Card from './Card';

function Events() {

    const eventList = [
        {
          id: 1,
          title: "Overnight Hackathon",
          description: "desc",
          type: "open",
          date: "10 Dec",
          imgref: "https://picsum.photos/200"
        },
      
        {
            id: 1,
            title: "Overnight Hackathon",
            description: "desc",
            type: "open",
            date: "10 Dec",
            imgref: "https://picsum.photos/200"
          },
      
          {
            id: 1,
            title: "Overnight Hackathon",
            description: "desc",
            type: "open",
            date: "10 Dec",
            imgref: "https://picsum.photos/200"
          },
      ];


    



  return (
    <Container>
        {eventList.map( (event) => {
            return (
                <Card 
                    date = {event.date}
                    title = {event.title}
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



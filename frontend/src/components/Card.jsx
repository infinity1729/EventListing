import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Time from './Time';





function Card(props) {
  return (
    <Cont>

    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
            <Container>
                <Date>{props.date}</Date>
                <Info>{props.title}</Info>
                <Time />
                <Button />
            </Container>
        </AccordionSummary>
        <AccordionDetails>
                Already Enrolled
        </AccordionDetails>
      </Accordion>

    </Cont>


    
  );
}

export default Card;

const Cont = styled.div`
    width: 96%;
    margin: 2%;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;


const Container = styled.div`
    display: flex;
    width: 100%;
    background: white;
    border-radius: 10px;    
`;

// const Card = styled.div`
//     display: flex;
//     width: 90%;
//     margin: 2%;
//     border: 1px solid black;
//     border-radius: 10px;
//     background: white;
// `;

const Date = styled.div`
    display: flex;
    width: 20%;
    background: #19027d;
    border-radius: 10px 10px 10px 10px;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    padding: 1rem;

`;

const Info = styled.div`
    display: flex;
    width:45%;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
`;

// const Tab = styled.div`

// `;

{/* <Accordian >
        <Container>
            <Date>{props.date}</Date>
            <Info>{props.title}</Info>
            <Button />
        </Container>
        <Container>
            Hello
        </Container>
    </Cont> */}
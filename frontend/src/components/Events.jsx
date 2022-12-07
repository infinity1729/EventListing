import React, {useContext} from 'react';
import styled from 'styled-components';
import ACard from './Card';
import { ElistContext } from './ElistContext';


function Events() {

    const [Elist, setElist] = useContext(ElistContext);



    const eventList = Elist;
    eventList.sort((a , b) => new Date(a.start_date) - new Date(b.start_date));
    

    function dateConverter(date) {
        let res = (date[8] + date[9]);
        res += " ";
        let mnth = (date[5] + date[6]);
        if(mnth === "01"){
            return [res,"Jan"]; 
        }
        if(mnth === "02"){
            return [res,"Feb"]; 
        }
        if(mnth === "03"){
            return [res,"Mar"]; 
        }
        if(mnth === "04"){
            return [res,"Apr"]; 
        }
        if(mnth === "05"){
            return [res,"May"]; 
        }
        if(mnth === "06"){
            return [res,"June"]; 
        }
        if(mnth === "07"){
            return [res,"July"]; 
        }
        if(mnth === "08"){
            return [res,"Aug"]; 
        }
        if(mnth === "09"){
            return [res,"Sept"]; 
        }
        if(mnth === "10"){
            return [res,"Oct"]; 
        }
        if(mnth === "11"){
            return [res,"Nov"]; 
        }
        if(mnth === "12"){
            return [res,"Dec"]; 
        }
    }


  return (
    <Container>
        {eventList.map( (event) => {
            return (
                <ACard 
                    date = {dateConverter(event.start_date) }
                    title = {event.name}
                    description = {event.description}
                    club={event.host}
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



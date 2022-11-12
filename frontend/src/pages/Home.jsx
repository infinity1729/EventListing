import React, {Component} from 'react';
import styled from 'styled-components';
import Right from '../components/Right';
// import LogoPage from '../components/LogoPage';
import Left from '../components/Left';

class Home extends Component{
  state = {
    viewCompleted: false,
    // activeItem: {
    //   uid:0,
    //   name: "",
    //   type:"",
    //   date:"",
    //   completed: false
    // },
    eventList: [
      {
        id: 1,
        name: "Overnight Hackathon",
        description: "desc",
        type: "open",
        start_date: "10 Dec",
        imgref: "https://picsum.photos/200"
      },
    
      {
          id: 1,
          name: "Overnight Hackathon",
          description: "desc",
          type: "open",
          start_date: "10 Dec",
          imgref: "https://picsum.photos/200"
        },
    
        {
          id: 1,
          name: "Hackathon",
          description: "desc",
          type: "open",
          start_date: "10 Dec",
          imgref: "https://picsum.photos/200"
        },
    ]
  };
  async  componentDidMount() {
      try {
        const res = await fetch('http://localhost:8000/api/events_api/');
        const eventList = await res.json();
        this.setState({
          eventList
        });   
      } catch (e) {
        console.log(e);
        
    }
    }
    render() {
      return (
        <Container>
            <Left/>
            <Right 
              eventList={this.state.eventList}
            />
        </Container>
      );            
    }
}

export default Home;

const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    width: 100%;
`;


import React from "react";
import styled from "styled-components";
import "./card.css";

function Card() {
  return (
    <>
      <Left>
        <div className="top_left">
          <img src="https://event.iitg.ac.in/icann2019/Proceedings_LaTeX/2019/IITG_White.png" width="30" height="30" alt="logo" />
          <p>Event Lister</p>
        </div>
        <h1>Hey There!</h1>
        <div className="welcome">
          <p>Welcome Back</p>
          <p>You are just one step away to  your feed.</p>
        </div>
        <p>Dont have an account ?</p>
        <Button>Sign Up</Button>
      </Left>
      <Right>
        <h1>Sign In</h1>
        <input type="email" placeholder="abc@gmail.com"></input>
        <input type="password" placeholder="password"></input>
        <Button>Sign In</Button>
      </Right>
    </>
  );
}

export default Card;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 2%;
  height: 50%;
  font-size: 13px;
  font-weight: lighter;  
  border-radius: 10px 0px 0px 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  background-color: rgb(110, 99, 255);
`


const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5% 15%;
    font-weight: 600;
    border-radius: 30px;
    border: 2px solid white;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-left: 0px;
    padding: 5%;
    border-radius: 0px 10px 10px 0px;
    height: 40%;
    gap:10px;
    box-shadow:5px 0px 10px lightgrey;
`
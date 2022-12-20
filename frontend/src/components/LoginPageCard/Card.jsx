import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <>
      <Left>
        <h1>Event Lister</h1>
        <p>Hey There!</p>
        <p>Welcome Back</p>
        <p>Dont have an account ?</p>
        <Button>Signup</Button>
      </Left>
      <Right>
        <h1>Sign In</h1>
        <input type="text" placeholder="abc@gmail.com"></input>
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
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    padding: 5%;
    border-radius: 10px 0 0 10px;
    height: 40%;
    box-shadow:-5px 0px 10px lightgrey;
`


const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8% 20%;
    border-radius: 30px;
    border: 2px solid black;
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
import React from 'react';
import styled from 'styled-components';

function Button() {
  return (
      <Holder>
        <LeftButton>Enroll</LeftButton>
      </Holder>
  );
}

export default Button;

const Holder = styled.div`
    display: flex;
    width: 20%;
    border-radius: 2px 10px 10px 2px;
    justify-content: center;
    align-items: center;
`;

const LeftButton = styled.div`
    display: flex;
    width: 50%;
    background: blue;
    border-radius: 1.5rem;
    appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  ${'' /* margin: 12px 0 0; */}
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 60%;
  justify-content: center;
  align-items: center;


`;

const RightButton = styled.div`
    display: flex;
    width: 50%;
    ${'' /* background: blue; */}
    margin: 10px 15px;
    border-radius: 1.5rem;
    appearance: button;
  backface-visibility: hidden;
  ${'' /* background-color: #405cf5; */}
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  ${'' /* margin: 12px 0 0; */}
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 50%;
    border: 1px solid gray;
    color: black;   
`;




// <!-- HTML !-->
// <button class="button-9" role="button">Button 9</button>

/* CSS */
// .button-9 {
//   appearance: button;
//   backface-visibility: hidden;
//   background-color: #405cf5;
//   border-radius: 6px;
//   border-width: 0;
//   box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
//   font-size: 100%;
//   height: 44px;
//   line-height: 1.15;
//   margin: 12px 0 0;
//   outline: none;
//   overflow: hidden;
//   padding: 0 25px;
//   position: relative;
//   text-align: center;
//   text-transform: none;
//   transform: translateZ(0);
//   transition: all .2s,box-shadow .08s ease-in;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: 100%;
// }

// .button-9:disabled {
//   cursor: default;
// }

// .button-9:focus {
//   box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
// }
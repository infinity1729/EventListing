import React from "react";
import styled from "styled-components";
import Button from "./Button";
import al from "./img/Image.png";

function ACard(props) {
  console.log(props);
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: 100,
          marginTop: 20,
          margin: 10,
        }}
      >
        <div
          style={{
            width: "30%",
            backgroundImage: `url(${al})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: 10,
            padding: 0,
          }}
        >
          <div style={{ marginTop: "8px", marginLeft: "8px" }}>
            <table
              style={{
                left: 10,
                backgroundColor: "transparent",
                border: "4px solid white",
                borderRadius: "10px",
                borderBlock: "4px solid white",
                margin: 0,
                padding: 0,
                minWidth: "40px",
              }}
            >
              <tr>
                <p
                  style={{
                    color: "white",
                    borderBottom: "4px solid white",
                    padding: 0,
                    fontSize: "10px",
                    textAlign: "center",
                  }}
                >
                  {props.date[1]}
                </p>
              </tr>
              <tr style={{ padding: "0px" }}>
                <p
                  style={{
                    color: "white",
                    font: "16px",
                    fontWeight: "bolder",
                    padding: 0,
                    textAlign: "center",
                    margin: "0px",
                  }}
                >
                  {props.date[0]}
                </p>
              </tr>
            </table>
          </div>
        </div>
        <div style={{ width: "60%", padding: "20px", flexDirection: "row" }}>
          <div style={{ position: "absolute", right: 0 }}>
            <Button />
          </div>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>{props.title}</p>

          <p style={{ fontSize: "18px", fontWeight: "bold", color: "grey" }}>
            {props.club}
          </p>
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "grey" }}>
            {props.description}
          </p>
          <p style={{ fontWeight: "bold", textAlign: "right" }}>
            Venue: {props.venue}
          </p>
        </div>
      </div>
    </>
  );
}

export default ACard;

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

const Description = styled.div`
  display: flex;
  width: 45%;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
`;

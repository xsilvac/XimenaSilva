import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: #bad7e9;
  border-radius: 24px;
  box-shadow: 10px 10px 20px 0px #6d6b6b;
  width: ${({ width }) => (width ? width : "368px")};
  height: ${({ height }) => (height ? height : "400px")};
  @media screen and (max-width: 1300px) {
    width: 300px;
    height: 342px;
  }
  @media screen and (max-width: 1100px) {
    width: 250px;
    height: 285px;
  }
  @media screen and (max-width: 950px) {
    width: 200px;
    height: 228px;
  }
  @media screen and (max-width: 600px) {
    width: 200px;
    height: 228px;
  }
  @media screen and (max-width: 400px) {
    width: 150px;
    height: 171px;
  }
`;

const Card = ({ width, height }) => {
  return (
    <CardContainer width={width} height={height}>
      Card
    </CardContainer>
  );
};

export default Card;

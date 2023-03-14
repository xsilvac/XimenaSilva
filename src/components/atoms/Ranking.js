import React from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ContainerRanking = styled.div`
  > svg {
    color: #2B3467;
    font-size: 150%;
    @media screen and (max-width: 400px) {
        font-size: 100%;
      }
  }
`;
const Ranking = ({ score }) => {
  return (
    <ContainerRanking>
      {[...new Array(5)].map((star, idx) => {
        return idx < score ? <AiFillStar /> : <AiOutlineStar />;
      })}
    </ContainerRanking>
  );
};

export default Ranking;

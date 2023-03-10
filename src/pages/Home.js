import React from "react";
import styled from "styled-components";
import Card from "../components/atoms/Card";
import Presentation from "../components/molecules/Presentation";

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8%;
  flex-wrap: wrap;
  gap: 3.5rem;
`;

const Home = () => {
  return (
    <>
    <Presentation/>
      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
    </>
  );
};

export default Home;

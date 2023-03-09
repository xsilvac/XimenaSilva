import React from "react";
import styled from "styled-components";
import Card from "../components/atoms/Card";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8%;
  flex-wrap: wrap;
  gap: 3.5rem;
}
`;

const Home = () => {
  return (
    <HomeContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </HomeContainer>
  );
};

export default Home;

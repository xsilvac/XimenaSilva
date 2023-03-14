import React from "react";
import styled from "styled-components";
import { Card, CardSmall } from "../components/atoms/Card";
import {
  CardsContainer,
  CardStyle,
  ContainerSection,
  TitleStyle,
} from "./Home";
import data from "../data/data.json";
import Ranking from "../components/atoms/Ranking";

const ContainerCardSmall = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1100px) {
    gap: 0.5rem;
  }
  @media screen and (max-width: 400px) {
    gap: 0.25rem;
  }
  > p {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    @media screen and (max-width: 1300px) {
      font-size: 25px;
    }
    @media screen and (max-width: 1100px) {
      font-size: 20px;
    }
    @media screen and (max-width: 405px) {
      font-size: 12px;
    }
  }
  > img {
    height: calc(50% - 2em);
    width: calc(65% - 2.5em);
  }
  > span {
    font-size: 15px;
    @media screen and (max-width: 1300px) {
      font-size: 13px;
    }
    @media screen and (max-width: 1100px) {
      font-size: 10px;
    }
    @media screen and (max-width: 405px) {
      font-size: 8px;
    }
  }
`;

const About = () => {
  return (
    <>
      <ContainerSection>
        <TitleStyle>Mis Habilidades</TitleStyle>
        <CardsContainer>
          {data.skillsSummary.map((el) => (
            <Card>
              <CardStyle>
                <div>
                  <p>{el.title}</p>
                  <img src={el.icon} />
                </div>
                <p>{el.summary}</p>
              </CardStyle>
            </Card>
          ))}
        </CardsContainer>
      </ContainerSection>
      <ContainerSection>
        <TitleStyle>Tecnologías que domino</TitleStyle>
        <CardsContainer>
          {data.tecnology.map((el) => (
            <CardSmall>
              <ContainerCardSmall>
                <p>{el.name}</p>
                <img src={el.url} />
                <Ranking score={el.score}/>
              </ContainerCardSmall>
            </CardSmall>
          ))}
        </CardsContainer>
      </ContainerSection>
    </>
  );
};

export default About;

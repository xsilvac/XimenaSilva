import React from "react";
import styled from "styled-components";
import Card from "../components/atoms/Card";
import Presentation from "../components/molecules/Presentation";
import data from "../data/data.json";
import Button from "../components/atoms/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ContainerHome = styled.section`
padding: 4em 0;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 0;
  }
`;

const TitleStyle = styled.p`
  font-weight: 700;
  font-size: 40px;
  color: #eb455f;
  padding: 0 0 0 2em;
  @media screen and (max-width: 600px) {
    padding: 1em 0;
    font-size: 30px;
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3% 8%;
  flex-wrap: wrap;
  gap: 3.5rem;
  color: black;
`;

const CardStyle = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  height: 100%;
  justify-content: center;
  @media screen and (max-width: 1100px) {
    gap: 0.5rem;
  }
  > div {
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
    @media screen and (max-width: 1000px) {
      gap: 0rem;
      flex-direction: column-reverse;
    }
    > p {
      font-size: 35px;
      font-weight: bold;
      @media screen and (max-width: 1300px) {
        font-size: 28px;
      }
      @media screen and (max-width: 1100px) {
        font-size: 25px;
      }
      @media screen and (max-width: 405px) {
        font-size: 18px;
      }
    }
    > img {
      width: 50px;
      height: 50px;
      @media screen and (max-width: 1100px) {
        width: 30px;
        height: 30px;
      }
      @media screen and (max-width: 405px) {
        width: 20px;
        height: 20px;
      }
    }
  }
  > p {
    font-size: 20px;
    @media screen and (max-width: 1300px) {
      font-size: 16px;
    }
    @media screen and (max-width: 1100px) {
      font-size: 12px;
    }
    @media screen and (max-width: 405px) {
      font-size: 9px;
    }
  }
`;

const ContainerButton = styled.div`
    display: flex;
    justify-content: center;  
    > button {
    @media screen and (max-width: 950px) {
      padding: 0.5em 1em;
      font-size: 1rem;
    }
    @media screen and (max-width: 545px) {
      padding: 0.5em 1em;
      font-size: 0.8rem;
      margin-top: 3em;
    }
    @media screen and (max-width: 250px) {
      padding: 0.5em 1em;
      font-size: 0.5rem;
      margin-top: 3em;
    }
  }
`;

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <Presentation />
      <ContainerHome>
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
      <ContainerButton>
      <Button
        background="#2B3467"
        border="3px solid #2B3467"
        color="#FFFFFF"
        font="28px"
        hover="#EB455F"
        hoverColor="#ffffff"
        onClick={() => navigate("/about-me")}
      >
        Ver más habilidades <AiOutlineArrowRight />
      </Button></ContainerButton>
    </ContainerHome>
    </>
  );
};

export default Home;

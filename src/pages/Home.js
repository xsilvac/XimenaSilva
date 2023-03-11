import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/atoms/Card";
import Presentation from "../components/molecules/Presentation";
import data from "../data/data.json";
import Button from "../components/atoms/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ContainerSection = styled.section`
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

const ProyectsStyle = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  justify-content: center;
  @media screen and (max-width: 1100px) {
    gap: 0.5rem;
  }
  @media screen and (max-width: 400px) {
    gap: 0.25rem;
  }
  > p {
    font-size: 30px;
    font-weight: bold;
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
    height: 150px;
    @media screen and (max-width: 1100px) {
      height: 80px;
    }
    @media screen and (max-width: 405px) {
      height: 50px;
    }
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
  const navigate = useNavigate();
  const [skills, setSkills] = useState(data.skillsSummary);
  const [project, setProject] = useState(data.projects);

  useEffect(() => {
    setSkills(skills.slice(0, 3));
    setProject(project.slice(0, 3));
  }, []);

  return (
    <>
      <Presentation />
      <ContainerSection>
        <TitleStyle>Mis Habilidades</TitleStyle>
        <CardsContainer>
          {skills.map((el) => (
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
          </Button>
        </ContainerButton>
      </ContainerSection>

      <ContainerSection>
        <TitleStyle>Mis Proyectos</TitleStyle>
        <CardsContainer>
          {project.map((el) => (
            <Card>
              <ProyectsStyle>
                <p>{el.project}</p>
                <img src={el.url} />
                <span>{el.description}</span>
              </ProyectsStyle>
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
            onClick={() => navigate("/proyects")}
          >
            Ver más proyectos <AiOutlineArrowRight />
          </Button>
        </ContainerButton>
      </ContainerSection>
    </>
  );
};

export default Home;

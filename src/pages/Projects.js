import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data.json";
import { TbWorld } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

const StyleProyect = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
  padding: 3% 0;
  @media screen and (max-width: 1200px) {
    padding: 5% 0;
  }
  @media screen and (max-width: 600px) {
    padding: 10% 0;
  }
  @media screen and (max-width: 400px) {
    padding: 15% 0;
  }
`;

const CardStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
  width: 70%;
  background: #bad7e9;
  border-radius: 24px 0;
  box-shadow: 10px 10px 20px 0px #6d6b6b;
  padding: 2%;
  @media screen and (max-width: 950px) {
    gap: 1.5em;
    width: 80%
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    width: 70%
    gap: 1em;
  }
  @media screen and (max-width: 400px) {
    width: 85%;
    gap: 0.5em;
  }
  > img {
    width: 450px;
    height: 240px;
    border-radius: 10px;
    border: 0.8px solid #e5d9d9;
    @media screen and (max-width: 1150px) {
      width: 320px;
      height: 180px;
    }
    @media screen and (max-width: 900px) {
      width: 280px;
      height: 180px;
    }
    @media screen and (max-width: 730px) {
      width: 220px;
      height: 150px;
    }
    @media screen and (max-width: 650px) {
      width: calc(100% - 2%);
      height: 180px;
    }
    @media screen and (max-width: 400px) {
      height: 120px;
    }
  }
`;
const ContainerInfo = styled.div`
  color: #1e1e1e;
  display flex;
  flex-direction: column;
  gap: 2em;
  @media screen and (max-width: 1150px) {
    gap: 1em;
  }
  @media screen and (max-width: 650px) {
    padding: 0 5%;
    align-items: center;
  }
  > div {
    display flex;
    gap: 2em;
    @media screen and (max-width: 260px) {
      flex-direction: column;
      gap: 0.5em;
    }
    > a {
    color: #1e1e1e;
    display: flex;
    align-items: center;
    gap: 0.5em;
    text-decoration: none;
    font-size: 16px;
    @media screen and (max-width: 400px) {
      font-size: 14px;
    }
    @media screen and (max-width: 310px) {
      font-size: 12px;
    }
    > svg {
      font-size: 22px;
      @media screen and (max-width: 400px) {
        font-size: 18px;
      }
      @media screen and (max-width: 310px) {
        font-size: 14px;
      }
    }
    }
  }
  > p {
    font-weight: 700;
    font-size: 30px;
    color: #eb455f;
    @media screen and (max-width: 1150px) {
      font-size: 20px;
    }
    @media screen and (max-width: 400px) {
      font-size: 17px;
    }
  }
  > span {
    text-align: justify;
    @media screen and (max-width: 400px) {
      font-size: 12px;
    }
  }
`;

const Projects = () => {
  return (
    <section>
      <StyleProyect>
        {data.projects.map((el, idx) => (
          <CardStyle>
            {/* <img src={photo} /> */}
            <img src={el.url} />
            <ContainerInfo>
              <p>
                {el.title} - {el.project}
              </p>
              <span>{el.description}</span>
              <div>
              <Link to={el.github}>
                <AiFillGithub/>  Ver código
              </Link>
              <Link to={el.web}>
                <TbWorld /> Ver página
              </Link></div>
            </ContainerInfo>
            {/* <p>{el.title}</p>
            <span>{el.description}</span>
            <p>{el.github}</p>
            <p>{el.web}</p>
            <p>{el.url}</p>
            <p>{el.project}</p> */}
          </CardStyle>
        ))}
      </StyleProyect>
    </section>
  );
};

export default Projects;

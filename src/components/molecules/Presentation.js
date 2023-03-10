import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { HiDownload } from "react-icons/hi";
import photo from "../../img/photo.png";

const ContainerPresentation = styled.article`
  background: #2b3467;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 650px) {
    flex-direction: column;
    height: 100vh;
  }
`;

const SectionPresentation = styled.section`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 650px) {
    width: 80%;
    align-items: center;
  }
`;

const HeaderText = styled.p`
  font-weight: 700;
  font-size: 55px;
  @media screen and (max-width: 1350px) {
    font-size: 40px;
  }
  @media screen and (max-width: 650px) {
    text-align: center;
  }
  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
  @media screen and (max-width: 200px) {
    font-size: 25px;
  }
`;

const HeaderSpan = styled.div`
  width: 80%;
  > p {
    font-weight: 500;
    font-size: 24px;
    text-align: justify;
    @media screen and (max-width: 1350px) {
      font-size: 18px;
    }
    @media screen and (max-width: 400px) {
      font-size: 15px;
    }
    @media screen and (max-width: 200px) {
      font-size: 13px;
    }
  }
`;

const SectionPhoto = styled.section`
  > div {
    background: #727aa5;
    width: 410px;
    height: 410px;
    border-radius: 100px;
    transform: rotate(45deg);
    @media screen and (max-width: 1350px) {
      width: 280px;
      height: 280px;
    }
    @media screen and (max-width: 990px) {
      width: 220px;
      height: 220px;
    }
    @media screen and (max-width: 650px) {
      width: 180px;
      height: 180px;
      margin: -30px 0 10px 0;
    }
    @media screen and (max-width: 400px) {
      width: 100px;
      height: 100px;
      margin: -30px 0 0 0;
    }
    > img {
      transform: rotate(-45deg);
      height: 88%;
      margin: 5%;
      @media screen and (max-width: 1350px) {
        height: 80%;
        margin: 7%;
      }
      @media screen and (max-width: 990px) {
        height: 70%;
        margin: 12%;
      }
    }
  }
`;

const ContainerButtoms = styled.section`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
  > button {
    display: flex;
    align-items:center;
    @media screen and (max-width: 1350px) {
        padding: 0.5em 1em;
        font-size: 1rem;
      }
    @media screen and (max-width: 800px) {
        padding: 0.5em 1em;
        font-size: 0.8rem;
      }
    @media screen and (max-width: 400px) {
        margin-bottom: 5px;
      }
  }
}


`;

const Presentation = () => {
  return (
    <ContainerPresentation>
      <SectionPresentation>
        <HeaderText>
          Hola, soy Ximena Silva <br /> Programadora Front-end
        </HeaderText>
        <HeaderSpan>
          <p>
            Este es mi portafolio diseñado en Figma, en él encontrarás los
            proyectos que he creado, mis habilidades y podrás conocer un poco
            más de mí.
            <br /> Si te gusta mi perfil, te invito a poderte en contacto
            conmigo. ¡Saludos ♥!
          </p>
        </HeaderSpan>
        <ContainerButtoms>
          <Button
            background="#EB455F"
            border="3px solid #EB455F"
            color="#FFFFFF"
            font="28px"
            hover="#BAD7E9"
          >
            Contactame
          </Button>
          <Button
            background="#fff0"
            border="3px solid #EB455F"
            color="#FFFFFF"
            font="28px"
            hover="#BAD7E9"
          >
            <HiDownload /> Descargar CV
          </Button>
        </ContainerButtoms>
      </SectionPresentation>

      <SectionPhoto>
        <div>
          <img src={photo} alt="Ximena Silva" />
        </div>
      </SectionPhoto>
    </ContainerPresentation>
  );
};

export default Presentation;

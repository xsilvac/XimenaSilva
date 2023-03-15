import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import ButtonBack from "../components/atoms/ButtonBack";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { errorToast, successToast } from "../components/atoms/Toast";

const ContainerContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20% 2% 20%;
  gap: 1em;
  text-align: center;
  @media screen and (max-width: 800px) {
    padding: 1% 10%;
  }
  @media screen and (max-width: 430px) {
    padding: 1% 3%;
  }
  > p {
    font-weight: 700;
    font-size: 40px;
    color: #eb455f;
    @media screen and (max-width: 600px) {
      font-size: 30px;
    }
  }
  > span {
    color: #1e1e1e;
    padding: 0 5%;
    text-align: justify;
    @media screen and (max-width: 600px) {
      padding: 1%;
    }
  }
`;

const ContainerForm = styled.form`
  background: rgba(114, 122, 165, 0.75);
  border-radius: 24px;
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 4%;
  gap: 2em;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 80%;
    padding: 6%;
  }
  @media screen and (max-width: 430px) {
    width: 90%;
    padding: 8%;
  }
  > p {
    padding: 0;
  }
  > span {
    text-align: -webkit-auto;
  }
  > span > label {
    color: #1e1e1e;
  }
  > span > div {
    margin-top: 2%;
  }
  > span > textarea {
    width: 100%;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #bad7e9;
    margin-top: 2%;
    background: #bad7e9;
  }
  > button {
    font-size: 20px;
  }
`;

const Contact = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      nombre: name,
      correo: email,
      mensaje: message,
    };

    emailjs
      .send(
        "service_m1jf9cf",
        "template_few4idk",
        templateParams,
        "7Bfc459Rrk4HdZiSP"
      )
      .then(
        (response) => {
          successToast("SUCCESS!", response.status, response.text);
        },
        (err) => {
          errorToast("FAILED...", err);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <ButtonBack onClick={goBack} />
      <ContainerContact>
        <p>¡Comunícate conmigo!</p>
        <span>
          Si te gusto mi perfil y quieres ponerte en contacto conmigo para
          hablar sobre una colaboración en algún proyecto o te gustaría conocer
          más de mí, puedes contactarme en el siguiente formulario o por mis
          redes sociales.
        </span>
        <ContainerForm onSubmit={(e) => sendEmail(e)}>
          <span>
            <label>Nombre</label>
            <Input
              placeholder="Nombre"
              background="#BAD7E9"
              border="#BAD7E9"
              onChange={(e) => setName(e.target.value)}
            />
          </span>

          <span>
            <label>Email</label>
            <Input
              placeholder="ejemplo@email.com"
              background="#BAD7E9"
              border="#BAD7E9"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          <span>
            <label>Mensaje</label>
            <textarea
              placeholder="Mensaje"
              onChange={(e) => setMessage(e.target.value)}
            />
          </span>
          <Button
            background="#EB455F"
            border="3px solid #EB455F"
            color="#FFFFFF"
            font="28px"
            hover="#2B3467"
            hoverColor="#ffffff"
            size="m"
          >
            Contactame
          </Button>
        </ContainerForm>
      </ContainerContact>
    </>
  );
};

export default Contact;

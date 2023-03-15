import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ContainerButton = styled.div`
  width: 100%;
  padding: 2% 0 0 10%;
`;
const StyleButton = styled.button`
  cursor: pointer;
  font-weight: 900;
  font-size: 1.3em;
  background: none;
  border: none;
  color: #eb455f;
  user-select: none;
  display: flex;
  align-items: center;
`;
const ButtonBack = ({ children, ...props }) => {
  return (
    <ContainerButton>
      <StyleButton {...props}>
        <AiOutlineArrowLeft /> Volver
      </StyleButton>
    </ContainerButton>
  );
};

export default ButtonBack;

import React from "react";
import styled from "styled-components";

const ContainerInput = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #9e9e9e;
  gap: 0.8em;
  margin: 5px;
`;
const InputStyled = styled.input`
  outline: none;
  border: none;
  font-size: 14px;
  color: #2b2a2a;
  input:disabled {
    background: red;
  }
`;

const Input = ({ type, icon, ...props }) => {
  return (
    <ContainerInput>
      {icon ? icon : ""}
      <InputStyled type={type ? type : "text"} {...props} />
    </ContainerInput>
  );
};

export default Input;

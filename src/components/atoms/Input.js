import React from "react";
import styled from "styled-components";

const ContainerInput = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 5px;
  border: ${({border}) => border ? `1px solid ${border}` : "1px solid #9e9e9e"};
  gap: 0.8em;
  background: ${({background}) => background ? background : "#ffffff"};
`;
const InputStyled = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 14px;
  color: #2b2a2a;
  background: ${({background}) => background ? background : "#ffffff"};
`;

const Input = ({ type, icon, background, border, ...props }) => {
  return (
    <ContainerInput background={background} border={border}>
      {icon ? icon : ""}
      <InputStyled background={background} type={type ? type : "text"} {...props} />
    </ContainerInput>
  );
};

export default Input;

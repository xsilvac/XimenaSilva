import React from "react";
import styled from "styled-components";

const ContainerButton = styled.button`
  padding: 0.5em 1em;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 700;
  font-size: ${({ font }) => (font ? font : "1rem")};
  background: ${({ background }) => (background ? background : "#fff")};
  border: ${({ border }) => (border ? border : "1px solid #dcdfe6")};
  color: ${({ color }) => (color ? color : "#566074")};
  user-select: none;
  &:active {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(0, 0, 0, 0.1) inset;
    color: black;
    transform: translate3d(0, 1px, 0);
  }
  &:hover {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(0, 0, 0, 0.1) inset;
    background: ${({ hover }) => (hover ? hover : "#f5f4f4")};
    border: ${({ hover }) => (hover ? `3px solid ${hover}` : "1px solid #dcdfe6")};
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : "#494646")};
    transform: translate3d(0, 1px, 0);
  }
  &[disabled="disabled"],
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &.btn-primary {
    color: #fff;
    background-image: linear-gradient(45deg, #0674db, #069cf9);
    border: none;
  }
  &.btn-success {
    color: #fff;
    background-image: linear-gradient(45deg, #2eaa31, #3ec234);
    border: none;
  }
  &.btn-danger {
    color: white;
    background-color: #e74c3c;
    border: none;
  }
  &.btn-warning {
    color: #383636;
    background-color: #eefc00;
    border: none;
  }
  &.btn-small {
    font-size: 13px;
    padding: 0.78em;
  }
  &.btn-xsmall {
    font-size: 12px;
    padding: 0.7em;
  }
  &.btn-mediun {
    font-size: 18px;
    padding: 0.4em;
  }
`;

const Button = ({
  text,
  variant,
  size,
  color,
  background,
  children,
  border,
  font,
  hover,
  hoverColor,
  ...props
}) => {
  let variantClass = "";
  if (variant === "primary") {
    variantClass = "btn-primary";
  } else if (variant === "secondary") {
    variantClass = "btn-secondary";
  } else if (variant === "success") {
    variantClass = "btn-success";
  } else if (variant === "danger") {
    variantClass = "btn-danger";
  } else if (variant === "warning") {
    variantClass = "btn-warning";
  } else {
    variantClass = "btn-default";
  }

  if (size === "s") {
    variantClass = variantClass + " btn-small";
  } else if (size === "xs") {
    variantClass = variantClass + " btn-xsmall";
  }else if (size === "m") {
    variantClass = variantClass + " btn-mediun";
  }

  return (
    <ContainerButton
      color={color}
      background={background}
      border={border}
      font={font}
      hover={hover}
      hoverColor={hoverColor}
      {...props}
      className={variantClass}
    >
      {text ? text : children}
    </ContainerButton>
  );
};

export default Button;

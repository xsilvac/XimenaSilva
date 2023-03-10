import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

const PrimaryNav = styled.nav`
  height: 106px;
  display: flex;
  background: #2B3467;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const MenuLink = styled(Link)`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 1.2rem;
  color: #ffffff;
  font-size: 18px;
  &.active {
    font-weight: 900;
    border-bottom: 3px solid white;
  }
`;
const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 860px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 100%);
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 860px) {
    display: none;
  }
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 50px;
  @media screen and (max-width: 860px) {
    font-size: 40px;
  }
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const Navbar = () => {
  return (
    <PrimaryNav>
      <Hamburger />
      <Name>Ximena Silva</Name>
      <Menu>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/about-me">Acerca de mí</MenuLink>
        <MenuLink to="/proyects">Proyectos</MenuLink>
        <MenuLink to="/contact">Contactame</MenuLink>
      </Menu>
    </PrimaryNav>
  );
};

export default Navbar;

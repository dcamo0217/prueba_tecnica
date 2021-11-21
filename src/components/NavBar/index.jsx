import React from "react";
import { Bar, Logo, Nav, Button } from "./styled";
import { ReactComponent as LogoSeguroMundial } from "./../../images/segurosmundial.svg";

const NavBar = () => {
  return (
    <Bar>
      <Logo>
        <LogoSeguroMundial />
      </Logo>
      <Nav>
        <Button>¡Por qué?</Button>
        <Button>Nuestros Planes</Button>
        <Button>¿Quién más info?</Button>
        <Button>Club</Button>
        <Button>Blog</Button>
        <Button primary>Contáctanos</Button>
      </Nav>
    </Bar>
  );
};

export default NavBar;

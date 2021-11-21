import React from "react";
import logo from "./../../images/logo.svg";
import { ReactComponent as DownArrow } from "./../../images/downarrow.svg";
import { NextButton } from "../common/StyledNavButtons/index";
import {
  Picture,
  Button,
  Container,
  TextArea,
  HomeContainer,
  H3,
} from "./styled";

const Home = () => {
  return (
    <Container>
      <HomeContainer>
        <div>
          <Picture src={logo} />
          <H3>¡Protege a los que más amas!</H3>
          <TextArea type="text" placeholder="Nombre de tu peludito"></TextArea>
          <div>
            <Button primary>CONOCE MÁS</Button>
          </div>
          <NextButton>
            <DownArrow />
          </NextButton>
        </div>
      </HomeContainer>
    </Container>
  );
};

export default Home;

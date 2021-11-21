import React from "react";
import { BackButton, DivArrow } from "../common/StyledNavButtons/index";
import {
  Background,
  Container,
  ContentContainer,
  PictureDiv,
  Picture,
  Slogan,
  InputDiv,
  Input,
  Label,
  TermsDiv,
  CheckboxLabel,
  TermsText,
  Button,
} from "./styled";

import logo from "../../images/logo.svg";
import { ReactComponent as UpArrow } from "./../../images/uparrow.svg";

const Form = () => {
  return (
    <Background>
      <Container>
        <ContentContainer>
          <PictureDiv>
            <Picture src={logo} />
            <Slogan>¡Protege a los que más amas!</Slogan>
          </PictureDiv>
          <InputDiv>
            <Input></Input>
            <Label>Nombre del peludito</Label>
          </InputDiv>
          <InputDiv>
            <Input></Input>
            <Label>Tipo</Label>
          </InputDiv>
          <InputDiv>
            <Input></Input>
            <Label>Género</Label>
          </InputDiv>
          <InputDiv>
            <Input></Input>
            <Label>Edad</Label>
          </InputDiv>
          <InputDiv>
            <Input></Input>
            <Label>Raza</Label>
          </InputDiv>
          <InputDiv>
            <Input></Input>
            <Label>Correo electrónico</Label>
          </InputDiv>
          <TermsDiv>
            <CheckboxLabel></CheckboxLabel>
            <TermsText>
              He leído y acepto la politica de datos, así como los términos y
              condiciones.
            </TermsText>
          </TermsDiv>
          <Button>COTIZAR</Button>
          <DivArrow>
            <BackButton>
              <UpArrow />
            </BackButton>
          </DivArrow>
        </ContentContainer>
      </Container>
    </Background>
  );
};

export default Form;

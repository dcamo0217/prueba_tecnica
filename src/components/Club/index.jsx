import React from "react";
import {
  NextButton,
  BackButton,
  DivArrow,
} from "../common/StyledNavButtons/index";
import {
  Background,
  Title,
  Page,
  Container,
  ImagesContainer,
  FontImage,
  ImageText,
  Text,
} from "./styled";
import { ReactComponent as DownArrow } from "./../../images/downarrow.svg";
import { ReactComponent as UpArrow } from "./../../images/uparrow.svg";
import beneficiosImage from "../../images/beneficios_peluditos.png";

const Club = () => {
  return (
    <Background>
      <Title>¿Un seguro que te abre las puertas a un CLUB?</Title>
      <Page>
        <Container>
          <ImagesContainer>
            <FontImage alt="" src={beneficiosImage} />
            <ImageText>Descuentos y promociones</ImageText>
            <ImageText primary>Precios Especiales</ImageText>
            <ImageText>Experiencias Únicas</ImageText>
          </ImagesContainer>
          <Text>
            Con Seguro Peludo tienes acceso a un Club de beneficios digitales en
            diferentes establecimientos del país; mejor dicho, beneficios que
            vas a poder convertir en experiencias únicas e inolvidables.
          </Text>
          <DivArrow>
            <BackButton>
              <UpArrow />
            </BackButton>
            <NextButton>
              <DownArrow />
            </NextButton>
          </DivArrow>
        </Container>
      </Page>
    </Background>
  );
};

export default Club;

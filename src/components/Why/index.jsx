import React from "react";
import {
  NextButton,
  BackButton,
  DivArrow,
} from "../common/StyledNavButtons/index";
import {
  Background,
  DivText,
  Text,
  Images,
  DivImage,
  TextImage,
  Button,
} from "./styled";
import { ReactComponent as DownArrow } from "./../../images/downarrow.svg";
import { ReactComponent as UpArrow } from "./../../images/uparrow.svg";
import veterinaria from "./../../images/veterinaria.png";
import gato from "./../../images/gato.png";
import cachorro from "./../../images/cachorro.png";

const Why = () => {
  return (
    <Background>
      <DivText>
        <Text primary>¿Por qué Seguro Peludo?</Text>
        <Text>
          Estar preparado es la mejor opción para proteger la vida de aquellos
          peluditos a los que tanto amamos
        </Text>
      </DivText>
      <DivImage>
        <Images>
          <img src={veterinaria} alt=""></img>
          <TextImage>Atención Veterinaria</TextImage>
        </Images>
        <Images>
          <img src={cachorro} alt=""></img>
          <TextImage>Servicios de Guardería</TextImage>
        </Images>
        <Images>
          <img src={gato} alt=""></img>
          <TextImage>Servicios Funerarios</TextImage>
        </Images>
      </DivImage>
      <Button>VEAMOS LOS PLANES</Button>
      <DivArrow>
        <BackButton>
          <UpArrow />
        </BackButton>
        <NextButton>
          <DownArrow />
        </NextButton>
      </DivArrow>
    </Background>
  );
};

export default Why;

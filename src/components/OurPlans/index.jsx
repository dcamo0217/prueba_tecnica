import React from "react";
import {
  NextButton,
  BackButton,
  DivArrow,
} from "../common/StyledNavButtons/index";
import {
  Background,
  Container,
  Title,
  Text,
  PricesDiv,
  PriceGrid,
  LeftColumn,
  CenterColumn,
  RightColumn,
  TitleGrid,
  TextGrid,
  DivTable,
  Table,
  Thread,
  HeaderCell,
  HeaderSpecialCell,
  TableBody,
  TableRow,
  TableCell,
  HeaderRow,
  Button,
} from "./styled";
import { ReactComponent as Check } from "../../images/checkicon.svg";
import { ReactComponent as DownArrow } from "./../../images/downarrow.svg";
import { ReactComponent as UpArrow } from "./../../images/uparrow.svg";

const OurPlans = () => {
  return (
    <Background>
      <Container>
        <Title>Nuestros Planes</Title>
        <Text>Planeados pensando en la tranquilidad de tu pedido</Text>
        <PricesDiv>
          <LeftColumn>
            <TitleGrid>Básico</TitleGrid>
            <PriceGrid>$20.000</PriceGrid>
            <TextGrid>Mensual</TextGrid>
          </LeftColumn>
          <CenterColumn>
            <TitleGrid>Estándar</TitleGrid>
            <PriceGrid>$28.000</PriceGrid>
            <TextGrid>Mensual</TextGrid>
          </CenterColumn>
          <RightColumn>
            <TitleGrid>Premium</TitleGrid>
            <PriceGrid>$36.000</PriceGrid>
            <TextGrid>Mensual</TextGrid>
          </RightColumn>
        </PricesDiv>
        <Title>Beneficios de Seguro Peludo</Title>
        <Text>
          Diseñamos nuestros planes para que sean simples y sencillos, de modo
          que puedas pasar menos tiempo eligiendo y más tiempo con tu peludito.
        </Text>
        <DivTable>
          <Table>
            <Thread>
              <HeaderRow>
                <HeaderCell></HeaderCell>
                <HeaderCell></HeaderCell>
                <HeaderSpecialCell primary>Popular</HeaderSpecialCell>
                <HeaderCell></HeaderCell>
              </HeaderRow>
              <HeaderRow>
                <HeaderCell></HeaderCell>
                <HeaderSpecialCell>Básico</HeaderSpecialCell>
                <HeaderSpecialCell>Estándar</HeaderSpecialCell>
                <HeaderSpecialCell>Premium</HeaderSpecialCell>
              </HeaderRow>
            </Thread>
            <TableBody>
              <TableRow>
                <TableCell>Gastos médicos por accidente</TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Servicio de eutanasia por enfermedad o accidente
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Asistencia funeraria, cremación por enfermedad o accidente
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Consulta médica veterinaria a domicilio o en clínica
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Guardería por accidente o enfermedad del asegurado
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Muerte accidental de la mascota</TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Responsabilidad civil extracontractual</TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Daños a Bienes de Terceros</TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lesiones o Muerte a Terceros</TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gastos Médicos de Urgencia</TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gastos de Defensa</TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
                <TableCell>
                  <Check />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DivTable>
        <Button>COTIZAR</Button>
        <DivArrow>
          <BackButton>
            <UpArrow />
          </BackButton>
          <NextButton>
            <DownArrow />
          </NextButton>
        </DivArrow>
      </Container>
    </Background>
  );
};

export default OurPlans;

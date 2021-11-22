import React from "react";
import {
  Background,
  Container,
  Row,
  RowFont,
  InfoDiv,
  Text,
  IconDiv,
  Icon,
} from "./styled";
import { ReactComponent as AmericanIcon } from "./../../images/american_express.svg";
import { ReactComponent as FacebookIcon } from "./../../images/facebook.svg";
import { ReactComponent as InstagramIcon } from "./../../images/instagram.svg";
import { ReactComponent as LinkedinIcon } from "./../../images/linkedin.svg";

import { ReactComponent as TwitterIcon } from "./../../images/twitter.svg";
import { ReactComponent as MastercarIcon } from "./../../images/mastercard.svg";
import { ReactComponent as VisaIcon } from "./../../images/visa.svg";
import { ReactComponent as YtIcon } from "./../../images/youtube.svg";
import { ReactComponent as Red5gIcon } from "./../../images/Red5g.svg";
const Social = () => {
  return (
    <Background id="why">
      <Container>
        <Row>
          <RowFont>
            <InfoDiv>
              <Text>Medios de Pago</Text>

              <IconDiv>
                <Icon>
                  <VisaIcon />
                </Icon>
                <Icon>
                  <MastercarIcon />
                </Icon>
                <Icon>
                  <AmericanIcon />
                </Icon>
              </IconDiv>
            </InfoDiv>
            <InfoDiv>
              <Text>Síguenos en redes sociales</Text>
              <IconDiv>
                <Icon href="https://www.facebook.com/SegurosMundial/">
                  <FacebookIcon />
                </Icon>
                <Icon href="https://www.instagram.com/segurosmundial/">
                  <InstagramIcon />
                </Icon>
                <Icon href="https://twitter.com/SegurosMundial">
                  <TwitterIcon />
                </Icon>
                <Icon href="https://www.linkedin.com/company/mundial-seguros-s-a-">
                  <LinkedinIcon />
                </Icon>
                <Icon href="https://www.youtube.com/c/SegurosMundialColombia">
                  <YtIcon />
                </Icon>
              </IconDiv>
            </InfoDiv>
          </RowFont>
        </Row>
        <Row>
          <RowFont>
            <InfoDiv>
              <Text>Powered by:</Text>
              <IconDiv>
                <Red5gIcon />
              </IconDiv>
            </InfoDiv>
            <InfoDiv>
              <Text>Ayuda</Text>
            </InfoDiv>
          </RowFont>
        </Row>
      </Container>
    </Background>
  );
};

export default Social;

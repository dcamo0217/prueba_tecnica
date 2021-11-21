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
import { ReactComponent as KushkiIcon } from "./../../images/kushki.svg";

const Social = () => {
  return (
    <Background>
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
                <Icon>
                  <FacebookIcon />
                </Icon>
                <Icon>
                  <InstagramIcon />
                </Icon>
                <Icon>
                  <TwitterIcon />
                </Icon>
                <Icon>
                  <LinkedinIcon />
                </Icon>
                <Icon>
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
              <IconDiv>
                <KushkiIcon />
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

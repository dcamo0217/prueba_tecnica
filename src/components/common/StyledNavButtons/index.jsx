import styled from "styled-components";

export const NextButton = styled.a`
  background-color: white;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  min-width: 48px;
  max-width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #34bacf;
    padding-top: 13px;
  }
`;

export const BackButton = styled.a`
  background-color: white;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  min-width: 48px;
  max-width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-right: 15px;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #34bacf;
    padding-top: 13px;
  }
`;

export const DivArrow = styled.div`
  display: flex;
  flex-direction: row;
  filter: drop-shadow(0px 3px 6px #00000029);
  width: 12%;
  align-items: flex-start;
  text-align: center;
  padding-bottom: 1.5rem;
  margin-top: 1rem;
  margin-right: auto;
  margin-left: auto;
`;

import styled from "styled-components";

export const NextButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0.5rem auto;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #34bacf;
    padding-top: 13px;
  }
`;

export const BackButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0.5rem auto;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #34bacf;
    padding-top: 13px;
  }
`;

export const DivArrow = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: center;
  filter: drop-shadow(0px 3px 6px #00000029);
  float: left;
  width: 12%;
  align-items: flex-start;
  text-align: center;
  margin: auto auto;
  padding-bottom: 1.5rem;
  margin-top: 1rem;
`;

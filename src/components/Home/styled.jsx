import styled from "styled-components";
import image from "./../../images/image.jpg";

export const Container = styled.div`
  background-image: linear-gradient(
      to top,
      #005684e0 0%,
      #006da88c 40%,
      #0083ca21 60%,
      #008ad400 100%
    ),
    url(${image});
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  overflow-x: hidden;
  width: 100%;
  min-height: 666px;
`;

export const HomeContainer = styled.div`
  display: block;
  flex-direction: row;
  justify-content: center;
  padding-right: center;
  width: 385px;
  height: 400px;
  margin-top: 14.5rem;
  margin-right: auto;
  margin-left: auto;
`;

export const Picture = styled.img`
  width: 350px;
  height: 154px;
  margin-top: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #fece47;
  font-size: 14px;
  padding: 14px 12px;
  border: #fff;
  border-radius: 8px;
  overflow: visible;
  cursor: pointer;
  color: #123446;
  margin-bottom: 1rem;
`;

export const TextArea = styled.input`
  box-shadow: none;
  padding: 16px 0px 0px;
  height: 38px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #fff;
  margin-bottom: 1rem;
  overflow: visible;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const H3 = styled.p`
  color: #fff;
  font-family: "Gotham_Rounded_Book";
  font-size: 13px;
  display: flex;
  justify-content: end;
`;

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

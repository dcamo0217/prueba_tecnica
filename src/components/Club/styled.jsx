import styled from "styled-components";
import background from "./../../images/background.png";

export const Background = styled.div`
  width: 100%;
  min-height: 580px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: center;
  @media (max-width: 758px) {
    height: 520px;
  }
`;

export const Title = styled.p`
  padding-right: 30px;
  padding-left: 30px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  padding-bottom: 1rem;
  line-height: 30px;
  margin-bottom: 40px;
  font-size: 36px;
  color: #34bacf;
  text-align: center;
  padding-top: 2rem;
  margin-top: 0px;
  display: block;
  box-sizing: border-box;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const Page = styled.div`
  background-image: linear-gradient(
      0deg,
      #fff 65%,
      #efefef 65%,
      #efefef 88%,
      #ffff 88%
    ),
    url(${background});
  flex: 0 1 auto;
  position: relative;
  outline: none;
  box-sizing: border-box;
  display: block;
  @media (max-width: 758px) {
    background: white;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 730px;
  width: 100%;
  height: 609.641px;
  flex: 1 0 auto;
  margin-right: auto;
  margin-left: auto;
  outline: none;
`;

export const ImagesContainer = styled.div`
  margin-top: 37px;
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  outline: none;
  box-sizing: border-box;
`;

export const FontImage = styled.img`
  width: 100%;
  outline: none;
  vertical-align: middle;
  border-style: none;
  box-sizing: border-box;
  text-align: center;
  @media (max-width: 758px) {
    display: none;
  }
`;

export const ImageText = styled.div`
  padding-right: 40px;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 0 0 33.333333%;
  position: relative;
  width: 100%;
  max-width: 188.328px;
  padding-left: ${(props) => (props.primary ? "40px" : "15px")};
  line-height: 30px;
  font-size: 20px;
  color: #34bacf;
  font-weight: 400;
  text-align: center;
  padding-top: 1.5rem;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  @media (max-width: 758px) {
    font-size: 15px;
    padding:right:5px;
    flex: 0 0 20%;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Text = styled.p`
  line-height: 30px;
  font-size: 20px;
  color: #8e8e8e;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  outline: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  box-sizing: border-box;
  @media (max-width: 758px) {
    font-size: 15px;
    width: 400px;
    margin-right: auto;
    margin-left: auto;
  }
`;

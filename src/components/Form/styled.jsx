import styled from "styled-components";
import background from "./../../images/background.png";

export const Background = styled.div`
  margin-top: -1px;
  background: #34bacf;
  display: block;
  flex: 0 1 auto;
  position: relative;
  background-image: linear-gradient(#005684e0 100%, #008ad400 100%),
    url(${background});
  min-height: 881px;
  content: "";
  position: relative;
  background-size: 150px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-right: 30px;
  padding-left: 30px;
  max-width: 960px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
`;

export const ContentContainer = styled.div`
  display: block;
  padding-top: 60px;
  width: 100%;
  max-width: 400px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
`;

export const PictureDiv = styled.div`
  margin-bottom: 24px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Picture = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
  vertical-align: middle;
  border-style: none;
  width: 350px;
  -webkit-user-drag: none;
`;

export const Slogan = styled.p`
  line-height: 30px;
  font-size: 13px;
  color: #fff;
  position: absolute;
  top: 79%;
  left: 44%;
  font-weight: 500;
  white-space: nowrap;
  margin-top: 0px;
  margin-bottom: 0px;
  box-sizing: border-box;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const InputDiv = styled.div`
  position: relative;
  margin-bottom: 9px;
  width: 100%;
  outline: none;
  box-sizing: border-box;
  display: block;
`;

export const Input = styled.input`
  box-shadow: none;
  font-size: 1rem;
  padding: 16px 16px 0px;
  display: block;
  width: 100%;
  height: 56px;
  background-color: transparent;
  line-height: 1.2;
  border-radius: 4px;
  border: 1px solid #fff;
  margin-bottom: 12px;
  color: #8e8e8e;
  background-color: #fff;
  width: 100%;
  overflow: visible;
  box-sizing: border-box;
  text-align: start;
  appearance: auto;
  cursor: text;
  outline: none;
`;

export const Label = styled.label`
  left: 13px;
  color: #34bacf;
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  top: 18px;
  margin-bottom: 0px;
  transform-origin: 0px;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding-right: 20px;
`;

export const Nav = styled.nav`
  margin-bottom: 12px;
  padding-left: 0;
`;

export const TermsDiv = styled.div`
  margin-bottom: 1rem;
  align-items: center;
  display: flex;
  outline: none;
  box-sizing: border-box;
`;

export const CheckboxLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  margin-bottom: 0px;
  height: max-content;
  width: 100%;
  max-width: 16px;
  margin-right: 1.5rem;
  margin-top: 0px;
  outline: none;
  box-sizing: border-box;
`;

export const TermsText = styled.label`
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0px;
  outline: none;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  height: 33px;
  background-color: #fece47;
  margin: 0px auto;
  font-size: 14px;
  border: #fff;
  border-radius: 8px;
  overflow: visible;
  cursor: pointer;
  color: #123446;
  flex-wrap: wrap;
`;

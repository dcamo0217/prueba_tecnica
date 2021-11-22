import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 329px;
  background-color: #094f71;
  display: flex;
  position: relative;
  outline: none;
  box-sizing: border-box;
`;

export const Container = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  max-width: 960px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  outline: none;
  box-sizing: border-box;
  display: block;
`;

export const Row = styled.div`
  border-bottom: 1px solid #c4c4c4;
  outline: none;
  box-sizing: border-box;
  display: block;
`;

export const RowFont = styled.div`
  width: 100%;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const InfoDiv = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  outline: none;
  box-sizing: border-box;
  display: block;
`;

export const Text = styled.p`
  padding-top: 30px;
  color: white;
  font-weight: 400;
  text-align: left;
  padding-bottom: 1rem;
  margin-top: 0px;
  margin-bottom: 0px;
  box-sizing: border-box;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const IconDiv = styled.div`
  padding-bottom: 1rem;
  display: block;
  justify-content: flex-start;
  outline: none;
  box-sizing: border-box;
  max-width: 560px;
  max-height: 121px;
`;

export const Icon = styled.a`
  border: none;
  background: transparent;
  cursor: pointer;
  padding-right: 0.6rem;
  svg {
    width: 27px;
    height: 24px;
    fill: white;
  }
`;

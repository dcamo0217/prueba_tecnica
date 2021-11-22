import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const Logo = styled.button`
  width: 110px;
  border: none;
  cursor: pointer;
  height: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
  margin-top: 12px;
  text-align: center;
  background-color: white;
  @media (max-width: 1025px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const Nav = styled.div`
  right: 0;
  position: absolute;
  margin: 10px;
  display: inline-block;
  margin-right: 1rem;
  background: transparent;
  @media (max-width: 1025px) {
    display: none;
  }
`;

export const Button = styled.button`
  color: #0077b9;
  cursor: pointer;
  font-family: "sofia_pro_bold";
  background: transparent;
  font-weight: 400;
  overflow: visible;
  font-size: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  border: ${(props) => (props.primary ? "2px solid #0077b9" : "none")};
  border-radius: ${(props) => (props.primary ? "30px" : "none")};
  padding: ${(props) => (props.primary ? "2px 20px 6px" : "none")};
  margin: ${(props) => (props.primary ? "0 15px 0 8px" : "none")};
`;

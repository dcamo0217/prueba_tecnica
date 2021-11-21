import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  background-size: cover;
  width: auto;
  height: 583px;
  margin-right: auto;
  margin-left: auto;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 175px;
  max-width: 720px;
  min-width: 420px;
  text-align: center;
  margin: 0px auto;
`;

export const Text = styled.p`
  display: flex;
  text-align: center;
  padding: 10px;
  margin: 0px auto;
  font-size: ${(props) => (props.primary ? "36px" : "20px")};
  color: ${(props) => (props.primary ? "#34bacf" : "#8e8e8e")};
`;

export const DivImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  width: 600px;
  height: 221px;
  min-width: 100px;
  margin-right: auto;
  margin-left: auto;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 180px;
  height: 220px;
  min-heght: max-content;
  border: 2px solid #34bacf;
  border-radius: 8px;
  background-color: #34bacf;
  margin: 0 15px;
`;

export const TextImage = styled.p`
  text-align: center;
  color: white;
  margin: 0px auto;
  padding-top: 0.5rem;
`;

export const Button = styled.button`
  width: 600px;
  height: 37px;
  background-color: #fece47;
  margin: 0px auto;
  font-size: 14px;
  padding: 8px 6px;
  border: #fff;
  border-radius: 8px;
  overflow: visible;
  cursor: pointer;
  color: #123446;
  flex-wrap: wrap;
  margin-top: 24px;
`;

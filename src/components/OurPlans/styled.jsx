import styled from "styled-components";
import background from "./../../images/background.png";

export const Background = styled.div`
  margin-top: -1px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #34bacf;
  display: block;
  flex: 0 1 auto;
  position: relative;
  background-image: linear-gradient(#005684e0 100%, #008ad400 100%),
    url(${background});
  min-height: 1600.5px;
  content: "";

  position: relative;
  background-size: 150px;
  z-index: 1;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-right: 30px;
  padding-left: 30px;
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  outline: none;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  padding-top: 50px;
  margin-bottom: 30px;
  font-size: 30px;
  color: white;
  z-index: 2;
  line-height: 1, 2;
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 60px;
  font-size: 18px;
  z-index: 2;
  color: white;
  line-height: 1, 2;
  text-align: center;
`;

export const PricesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 20px;
  z-index: 2;
  max-width: 752px;
  margin-right: auto;
  margin-left: auto;
`;

export const LeftColumn = styled.div`
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  background-color: #efefef;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  overflow: hidden;
  max-width: 220px;
`;

export const CenterColumn = styled.div`
  background-color: #efefef;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  overflow: hidden;
  max-width: 220px;
`;

export const RightColumn = styled.div`
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #efefef;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  overflow: hidden;
  max-width: 220px;
`;

export const TitleGrid = styled.p`
  font-size: 24px;
  background-color: #094f71;
  z-index: 2;
  color: white;
  text-align: center;
  line-height: 30px;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 220px;
`;

export const PriceGrid = styled.p`
  font-size: 24px;
  z-index: 2;
  color: #094f71;
  text-align: center;
  padding-top: 30px;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 220px;
`;

export const TextGrid = styled.p`
  font-size: 24px;
  z-index: 2;
  color: #094f71;
  text-align: center;
  padding-bottom: 30px;
  padding-top: 0.5rem;
  margin-top: 0px;
  margin-bottom: 0px;
  outline: none;
  width: 220px;
`;

export const DivTable = styled.div`
  display: block;
  margin: 0 auto;
  padding-top: 50px;
  padding-left: 0;
  padding-right: 0;
  z-index: 2;
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  outline: none;
  @media (max-width: 768px) {
    max-width: 400px;
  }
`;

export const Table = styled.table`
  width: 100%;
  outline: none;
  border-collapse: collapse;
  box-sizing: border-box;
  display: table;
  text-ident: initial;
  border-spacing: 2px;
  border-color: grey;
`;

export const Thread = styled.thead`
  outline: none;
  box-sizing: border-box;
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;

export const HeaderRow = styled.tr`
  outline: none;
  box-sizing: border-box;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

export const HeaderCell = styled.th`
  text-align: center;
  min-width: 80px;
  width: auto;
  height: 42px;
  font-weight: 400;
  outline: none;
  display: table-cell;
  vertical-align: inherit;
  box-sizing: border-box;
`;

export const HeaderSpecialCell = styled.th`
  text-align: center;
  min-width: 80px;
  width: auto;
  height: 42px;
  font-weight: 400;
  outline: none;
  display: table-cell;
  vertical-align: inherit;
  box-sizing: border-box;
  background-color: ${(props) => (props.primary ? "#efb718" : "#123346")};
  color: ${(props) => (props.primary ? "black" : "white")};
`;

export const TableBody = styled.tbody`
  outline: none;
  box-sizing: border-box;
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  background: #f8f9fa;
`;

export const TableRow = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  box-sizing: border-box;
  outline: none;
`;

export const TableCell = styled.td`
  border: 1px solid #d3d3d3;
  padding: 15px;
  text-align: center;
  height: 42px;
  outline: none;
  box-sizing: border-box;
  display: table-cell;
  vertical-align: inherit;
`;

export const Button = styled.button`
  width: 356px;
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
  margin-top: 50px;
`;

export const Image = styled.div`
  display: grid;
  width: 100%;
  max-width: 428px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

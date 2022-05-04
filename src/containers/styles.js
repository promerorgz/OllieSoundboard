import styled from "styled-components";

export const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8px;
  grid-auto-rows: minmax(100px, auto);
  padding: 8px;
  justify-items: center;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const GridWrapper = styled.div`
  margin-top: 40px;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

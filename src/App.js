import React from "react";
import Navbar from "./components/navbar";
import Board from "./components/Board";
import fingers from "./public/favicon.png";
import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  /* background-image: url(${fingers}); */
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  background: #121212;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Board />
    </AppContainer>
  );
}
export default App;

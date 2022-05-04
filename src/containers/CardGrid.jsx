import React from "react";
import { ResponsiveGrid, GridWrapper } from "./styles";

function CardGrid({ children }) {
  return (
    <GridWrapper>
      <ResponsiveGrid>{children}</ResponsiveGrid>
    </GridWrapper>
  );
}

export default CardGrid;

import React from "react";
import Grid from "@material-ui/core/Grid";

function CardGrid({ children }) {
  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <Grid container justify="flex-start">
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CardGrid;

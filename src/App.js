import React from "react";
import Navbar from "./components/navbar";
import Board from "./components/Board";
import { withStyles } from "@material-ui/core";
import fingers from "./public/favicon.png";

const styles = {
  app: {
    height: "100vh",
    backgroundImage: `url(${fingers})`,
    backgroundPosition: "right",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};
console.log({ fingers });
function App({ classes }) {
  return (
    <div className={classes.app}>
      <Navbar />
      <Board styles={styles} />
    </div>
  );
}
export default withStyles(styles)(App);

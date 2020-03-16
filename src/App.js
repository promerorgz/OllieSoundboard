import React from "react";
import Navbar from './components/navbar'
import Board from "./components/Board";
import { withStyles } from '@material-ui/core'

const styles = {
    app: {
        height: '100vh',
        background: '#333'
    }
}
function App({ classes }) {
    return (
        <div className={classes.app} >
            <Navbar />
            <Board />
        </div>
    );
}
export default withStyles(styles)(App);

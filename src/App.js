import React from "react";
import theme from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Navbar from './components/navbar'
import Board from "./components/Board";
import {withStyles} from '@material-ui/core'

const styles = _ => ({
    height: '100vh',
    background: '#333'
})
function App({ classes }) {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App" >
                <Navbar/>
                <Board />
            </div>
        </MuiThemeProvider>
    );
}
export default withStyles(styles)(App);

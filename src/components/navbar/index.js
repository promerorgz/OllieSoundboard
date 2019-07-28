import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import {styles} from './style';


function Navbar({classes}) {
    return (
        <div className={classes.root} >
            <AppBar position="static" color="default" className={classes.navbar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        Ollie Soundboard
                    </Typography>
                    {/* <IconButton color="inherit" onClick={console.log('clicked')}>
                        <AddCircleOutline/>
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </div>
    ); 
}

export default withStyles(styles)(Navbar)
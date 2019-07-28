import React from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText, Zoom, withStyles } from '@material-ui/core';
import menuItems from './menuItems';
import styles from './styles'

const CardMenu = ({ open, anchorEl, handleClose, classes }) => {
    return (

        <Menu
            open={open}
            anchorEl={anchorEl}
            TransitionComponent={Zoom}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            {menuItems.map(item => (
                <MenuItem className={classes.menuItem} key={item.value} onClick={handleClose}>
                    <ListItemIcon>
                        <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={item.value} />
                </MenuItem>
            ))}
        </Menu>
    )
}

export default withStyles(styles)(CardMenu)

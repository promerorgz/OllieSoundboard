import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { Typography, Grid, withStyles, IconButton } from '@material-ui/core';
import { MoreVert, PlayCircleOutline } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import CardMenu from './CardMenu';
import ButtonBase from '@material-ui/core/ButtonBase';



import styles from './styles'

const SoundCard = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [playable, setPlayable] = useState(false)
    const open = Boolean(anchorEl);

    const { classes, title, audio, img } = props;

    const handleClick = ({ currentTarget }) => {
        setAnchorEl(currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    
    const handlePlay = () => {
        const sound = new Audio(audio)
        sound.play()
    }
    
    return (
        <Grid container direction="row" className={classes.root}>
            <Card className={classes.card} onClick={handlePlay} onTouchTap={handlePlay}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Grid item xs>
                        <Typography className={classes.header} variant="h4" alignCenter>{title || 'Title'}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Avatar
                            className={classes.clientImg}
                            src={img}
                            color="primary"
                        >
                         {title ? title.charAt(0) : 'N/A'}                   
                        </Avatar>
                    </Grid>
                </Grid>
            </Card >
        </Grid >
    )
}

export default withStyles(styles)(SoundCard)

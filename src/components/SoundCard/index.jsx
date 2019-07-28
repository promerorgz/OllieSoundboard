import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography, withStyles, CardContent, CardMedia } from '@material-ui/core';
import { Howl } from 'howler';
import defaultImg from '../../assets/images/sound-wave-from-equalizer-flat-icon-vector-20402703.jpg';

import styles from './styles'

const SoundCard = (props) => {

    const { classes, title, audio, img } = props;
 
    const sound = new Howl({
        src: audio
    });

    const handlePlay = () => {
        sound.play()
    }
    
    return (
        <Card className={classes.card} onClick={handlePlay} onTouchStart={handlePlay} onTouchStartCapture={handlePlay}>
            <CardContent className={classes.content}>
                <Typography
                    className={classes.header}
                    component="h5"
                    variant="h5">
                    {title || 'Title'}
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.cover}
                image={img || defaultImg}
                title={title}
            />
        </Card >
    )
}

export default withStyles(styles)(SoundCard)

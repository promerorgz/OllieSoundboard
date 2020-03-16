import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography, withStyles, CardContent, CardMedia } from '@material-ui/core';
import { Howl } from 'howler';
import defaultImg from '../../static/images/soundWave.jpg';

import styles from './styles'

const SoundCard = (props) => {

    const { classes, title, audio, img } = props;

    const howl = process.browser && new Howl({
        src: [audio.default]
    });

    const handlePlay = () => process.browser && howl.play()

    return (
        <Card className={classes.card} onClick={handlePlay}>
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

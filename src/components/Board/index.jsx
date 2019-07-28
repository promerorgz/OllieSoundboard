import React from 'react';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList'
import soundData from '../../assets/audio';
import SoundCard from '../SoundCard';
import {withStyles, GridListTile} from '@material-ui/core'
import styles from './styles';

function Board({classes}) {
    return (
        <>
            <GridList cols={3} cellHeight={200} className={classes.gridList}>
                {soundData.map(tile => (
                <GridListTile key={tile.title} >
                    <SoundCard
                        title={tile.title}
                        audio={tile.audio}
                        img={tile.img}
                        />
                </GridListTile>

                ))}
            </GridList>
        </>
    )
}

export default withStyles(styles)(Board)

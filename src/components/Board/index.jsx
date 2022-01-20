import React from "react";
import soundData from "./soundData";
import SoundCard from "../SoundCard";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import CardGrid from "../../containers/CardGrid";

function Board({ classes, styles }) {
  const { height, ...boardStyles } = styles;
  return (
    <>
      <CardGrid className={classes.gridList} {...boardStyles}>
        {soundData.map((tile, index) => (
          <SoundCard
            key={index}
            title={tile.title}
            audio={tile.audio}
            img={tile.img}
          />
        ))}
      </CardGrid>
    </>
  );
}

export default withStyles(styles)(Board);

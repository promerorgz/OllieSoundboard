import React from "react";
import soundData from "./soundData";
import SoundCard from "../SoundCard";
import CardGrid from "../../containers/CardGrid";

function Board() {
  return (
    <>
      <CardGrid>
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

export default Board;

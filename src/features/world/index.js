import React from "react";
import Map from "../map/index";
import Player from "../player/index";
import { tiles } from "../../data/maps/1/index";

import store from "../../config/store";

const World = (props) => {
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles,
    },
  });
  return (
    <div
      style={{
        width: "800px",
        height: "480px",
        margin: "10px auto",
        position: "relative",
        backgroundColor: "green",
      }}
    >
      <Map />
      <Player />
    </div>
  );
};

export default World;

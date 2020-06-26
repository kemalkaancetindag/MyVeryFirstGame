import React from "react";
import player_walk from "./player_walk.png";
import {connect} from "react-redux"
import handleMovement from "./movement";

const Player = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${player_walk}')`,
        backgroundPosition: "0 0",
        width: "40px",
        height: "40px",
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.player,
  };
};

export default connect(mapStateToProps)(handleMovement(Player));

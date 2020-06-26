import React from "react";
import { connect } from "react-redux";
import { SPRITE_SIZE } from "../../config/constants";

import "./styles.css";

const getTileSprite = (type) => {
  switch (type) {
    case 0:
      return "grass";
    case 5:
      return "rock";
    case 6:
      return "tree";
    default:
      return null;
  }
};

const MapTile = (props) => {
  return (
    <div
      className={`tile ${getTileSprite(props.value)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
      }}
    />
  );
};

const MapRow = (props) => {
  return (
    <div className="row">
      {props.tiles.map((tile) => (
        <MapTile value={tile} />
      ))}
    </div>
  );
};

const Map = (props) => {
  return (
    <div style={{}}>
      {props.tiles.map((row) => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tiles: state.map.tiles,
  };
};

export default connect(mapStateToProps)(Map);

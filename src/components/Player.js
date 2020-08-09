import React, { Fragment } from "react";
import "../styles/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <Fragment>
      <div className="player">
        <div className="player_body">
          {/** Sidebar */}
          <Sidebar />
          {/**Body */}
          <Body spotify={spotify} />
        </div>
        <Footer spotify={spotify} />
        {/**Footer */}
      </div>
    </Fragment>
  );
}

export default Player;

import React from "react";
import "../styles/Body.css";
import Header from "./Header";
import { useStateContext } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateContext();

  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcCHtRqkUU7Kf`,
      })
      .then(() => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: `spotify:track:${id}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h1>Discover Weekly</h1>
          <p>{discover_weekly?.description}</p>
        </div>
        <br />
      </div>
      <hr style={{ border: "1px solid rgb(91, 87, 115)", width: "100%" }} />

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon
            className="body_shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;

import React, { useEffect } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/Login";
import { getTokenFromResponse } from "./spotify";
import Player from "./components/Player";
import { useStateContext } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateContext();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getPlaylist("37i9dQZEVXcCHtRqkUU7Kf").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getMyTopArtists().then((response) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        });
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;

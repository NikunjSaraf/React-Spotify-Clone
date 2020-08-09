import React from "react";
import "../styles/Header.css";
import { useStateContext } from "../DataLayer";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header({ spotify }) {
  const [{ user }] = useStateContext();

  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header_right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;

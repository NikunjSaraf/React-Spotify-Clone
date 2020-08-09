import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateContext } from "../DataLayer";

function Sidebar() {
  const [{ playlists }] = useStateContext();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Libary" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar_title">Your Playlist</strong>
      <hr />
      {playlists?.items?.map((playlists) => (
        <SidebarOption title={playlists.name} />
      ))}
    </div>
  );
}

export default Sidebar;

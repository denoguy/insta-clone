import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExploreIcon from "@material-ui/icons/Explore";
import TelegramIcon from "@material-ui/icons/Telegram";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <HomeIcon />
        <TelegramIcon />
        <ExploreIcon />
        <FavoriteIcon />
        <Avatar src="https://static.toiimg.com/photo/70703164.cms" />
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

function Post({ avatar, image, username, caption }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="" src={avatar} />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={image} alt="" />
      <div className="post__image-icon">
        <FavoriteBorderOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <SendOutlinedIcon />
      </div>
      <h4 className="post__text">
        <strong>{username}</strong>: {caption}
      </h4>
    </div>
  );
}

export default Post;

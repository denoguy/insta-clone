import React from "react";
import "./SingleStory.css";

function SingleStory({ image, username }) {
  return (
    <div className="singleStory">
      <img className="story__image" src={image} alt="" />
      <p className="username">{username}</p>
    </div>
  );
}

export default SingleStory;

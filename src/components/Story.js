import { Avatar } from "@material-ui/core";
import React from "react";
import SingleStory from "./SingleStory";
import "./Story.css";

function Story() {
  return (
    <div className="story">
      <div className="story__user">
        <SingleStory
          image="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/115773857_314343176370842_5859779086490875444_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=PXMdMKqNjLcAX84x_Io&oh=90c2e5494eab0888b50ae8ba97120002&oe=5FC6D554"
          username="dipin.khd"
        />
        <SingleStory
          image="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/122993362_368928107790682_248690545929471133_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=Ayea37KASZsAX_zjc9y&oh=8bc79d8532d6975bfb79743d3a7caa38&oe=5FC729DF"
          username="ntr_sammer"
        />
        <SingleStory
          image="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/33119537_945162538984670_5423740252495806464_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=CQAIv_f8yykAX9WOGfk&oh=66b8e529fd2e64f61b6e6f23b1dab167&oe=5FCA0395"
          username="loki_dangi"
        />
        <SingleStory
          image="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/118539148_851216021951541_7981449691606103470_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=V1VYPEdBSj8AX_8AEAa&oh=24bb64f167d271dae6dff4703b149a3a&oe=5FC7E1E8"
          username="dhuruva_karki"
        />
        <SingleStory
          image="https://scontent-sin6-1.cdninstagram.com/v/t51.2885-19/s150x150/93859083_670374810403324_399678133168504832_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_ohc=ScvEQNJVfHEAX_kOP1p&oh=7d053244cd925a8056afb58c3470989f&oe=5FCA3509"
          username="susma_writes"
        />
      </div>
    </div>
  );
}

export default Story;

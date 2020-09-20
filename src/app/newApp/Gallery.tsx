import React from "react";
import { Item } from "../types";
import playlist from "./playlist.png";
import { cn } from "../classNames";

const Gallery = ({ items }: { items: Item[] }) => (
  <div className={"gallery"}>
    {items.map((item) => (
      <Card item={item} key={item.id} />
    ))}
  </div>
);

const Card = ({ item }: { item: Item }) => (
  <div className="card">
    <img
      className={cn({ "playlist-image": !item.videoId })}
      width={!item.videoId  ? undefined : 170}
      height={96}
      src={
        item.videoId
          ? `https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`
          : playlist
      }
      alt=""
    />
    <div className="card-text">{item.title}</div>
  </div>
);
export default Gallery;

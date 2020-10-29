import React from "react";
import chevron from "../icons/right-chevron.svg";
import playSmall from "../icons/play-button-arrowhead.svg";
import playBig from "../icons/play-button.svg";
import "./Card.css";
import { GAP } from "../constants";
import { Item, RootState } from "../types";

interface Props {
  isOpen: boolean;
  item: Item;
  toggle: (id: string) => void;
  state: RootState;
}

const Card = ({ isOpen, item, toggle, state }: Props) => {
  return (
    <div
      className={"box"}
      style={{
        marginBottom: GAP,
      }}
    >
      {!isOpen && (
        <CardImage
          images={
            item.id == "Six"
              ? []
              : item.id == "Seven"
              ? [
                  "https://i.ytimg.com/vi/xJ5z8GF1uys/mqdefault.jpg",
                  "https://i.ytimg.com/vi/V4Iow4cWvP0/mqdefault.jpg",
                ]
              : item.id == "Ten"
              ? [
                  "https://i.ytimg.com/vi/xJ5z8GF1uys/mqdefault.jpg",
                  "https://i.ytimg.com/vi/NDJn0SQehb4/mqdefault.jpg",
                  "https://i.ytimg.com/vi/V4Iow4cWvP0/mqdefault.jpg",
                ]
              : [item.image]
          }
        />
      )}
      {!isOpen && (
        <div className="card-image-overlay overlay">
          <img src={playBig} className={"play white-svg"} />
        </div>
      )}

      <div
        className="gallery-chevron-container"
        onClick={() => toggle(item.id)}
      >
        <img
          src={chevron}
          className={
            "gallery-chevron white-svg " +
            (isOpen ? "gallery-chevron-open" : "")
          }
        />
      </div>
      <div className="box-title">{item.title}</div>
      {isOpen && <TrackList state={state} parentId={item.id} />}
    </div>
  );
};

const CardImage = ({ images }: any) => {
  if (images.length === 0) {
    return <div className={"empty-image"}>Empty</div>;
  } else if (images.length === 1) {
    return <img className={"image"} src={images[0]} alt="" />;
  } else if (images.length === 2) {
    return (
      <div className="image-container">
        <div className={"overlay two-image-container"}>
          <img src={images[0]} />
          <img src={images[1]} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="image-container">
        <div className={"overlay three-image-container"}>
          <img src={images[0]} />
          <div className={"column"}>
            <img src={images[1]} />
            <img src={images[2]} />
          </div>
        </div>
      </div>
    );
  }
};
interface TrackListProps {
  state: RootState;
    parentId: string;
}
const TrackList = ({ state, parentId }: TrackListProps) => (
  <div className="tracks-container">
    {state.items[parentId].children.map((id) => {
      const item = state.items[id];
      return <Track title={item.title} image={item.image} />;
    })}
  </div>
);

const Track = ({ title, image }: any) => (
  <div className="track">
    <img className="track-image" src={image} />
    <div className="track-image-overlay">
      <img className="white-svg" src={playSmall} />
    </div>
    <div className="track-text">{title}</div>
  </div>
);

export default Card;
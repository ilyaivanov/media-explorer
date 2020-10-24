import React from "react";
import { DragState, Item } from "./types";
import playlist from "./playlist.png";
import { cn } from "./classNames";
import { dispatch } from "./globalDispatch";
import * as actions from "./state/actions";
import "./Card.css";
import rightArrow from "./icons/right-arrow.png";
import playIcon from "./icons/play-button.png";
const Card = ({
  item,
  dragState,
  isMini,
}: {
  item: Item;
  isMini?: boolean;
  dragState?: DragState;
}) => {
  const isCurrentItemBeingDragged =
    dragState?.type === "item_being_dragged" && dragState.itemId === item.id;
  return (
    <div
      className={cn({
        card: true,
        "card-being-dragged": isCurrentItemBeingDragged,
        "mini-card": isMini,
      })}
      onMouseMove={() => {
        if (
          dragState &&
          dragState.type === "item_being_dragged" &&
          dragState.itemId !== item.id
        ) {
          dispatch(actions.replaceCard(item.id));
        }
      }}
      onMouseDown={(e) => {
        var rect = e.currentTarget.getBoundingClientRect();

        dispatch(
          actions.mouseDownOnItem(item.id, {
            x: e.clientX - rect.x,
            y: e.clientY - rect.y,
          })
        );
      }}
    >
      <img
        className={cn({ "playlist-image": !item.videoId })}
        width={!item.videoId ? undefined : 170}
        draggable={false}
        height={96}
        src={
          item.videoId
            ? `https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`
            : playlist
        }
        alt=""
      />

      <div className="card-text">{item.title}</div>
      {item.videoId ? (
        <img
          className="play-button"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={() => dispatch(actions.playItem(item))}
          src={playIcon}
          alt=""
        />
      ) : (
        <img
          className="select-button"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={() => {
            dispatch(actions.focusItem(item.id));
          }}
          width={24}
          height={24}
          src={rightArrow}
          alt=""
        />
      )}
    </div>
  );
};

export default Card;

import React from "react";
import { DragState, Item, RootState } from "./types";
import playlist from "./playlist.png";
import { cn } from "./classNames";
import { dispatch } from "./globalDispatch";
import * as actions from "./state/actions";
import "./Card.css";
import rightArrow from "./icons/right-arrow.png";
import playIcon from "./icons/play-button.png";
import Chevron from "./icons/Chevron";
interface Props {
  state: RootState;
  item: Item;
  isMini?: boolean;
  dragState?: DragState;
}
const Card = ({ state, item, dragState, isMini }: Props) => {
  if (item.isPreviewOpen) return <OpenCard state={state} item={item} />;
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
      {!item.videoId && (
        <div
          className="expand-button"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={() => {
            dispatch(actions.togglePlaylistPreview(item.id));
          }}
        >
          <Chevron />
        </div>
      )}
    </div>
  );
};

const OpenCard = ({ state, item }: { state: RootState; item: Item }) => {
  return (
    <div
      className={cn({
        card: true,
        "card-open": true,
      })}
    >
      <div className="card-text">{item.title}</div>
      <div className="preview-items">
        {item.children.map((id) => (
          <OpenCardRow item={state.items[id]} key={id} />
        ))}
      </div>
      <div
        className="expand-button rotated up"
        onMouseDown={(e) => e.stopPropagation()}
        onClick={() => {
          dispatch(actions.togglePlaylistPreview(item.id));
        }}
      >
        <Chevron />
      </div>
    </div>
  );
};

const OpenCardRow = ({ item }: { item: Item }) => {
  const title = item.title;
  const formatted = title.length >= 27 ? title.substr(0, 25) + "..." : title;
  const image = item.videoId
    ? `https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`
    : playlist;
  return (
    <div className="open-card-row">
      <img className="open-card-video-image" src={image} alt="" />
      {item.videoId && (
        <img
          className="open-card-play-button image-button"
          src={playIcon}
          onClick={() => dispatch(actions.playItem(item))}
          alt=""
        />
      )}
      <div className="open-card-text">{formatted}</div>
    </div>
  );
};

export default Card;

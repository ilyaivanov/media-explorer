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
import { loadPlaylistVideos } from "./api";
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
  const hasImage = item.itemType != "folder";
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
        className={cn({ "playlist-image": !hasImage })}
        width={hasImage ? undefined : 170}
        draggable={false}
        height={96}
        src={getImage(item)}
        alt=""
      />

      <div className="card-text">{item.title}</div>
      {item.itemId ? (
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
      {item.itemType != "video" && (
        <div
          className="expand-button"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={() => {
            console.log(item);
            if (item.itemId && item.children.length === 0) {
              loadPlaylistVideos(item.itemId).then((items) => {
                dispatch(actions.setNodeChildren(item.id, items));
              });
            }
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
  return (
    <div className="open-card-row">
      <img className="open-card-video-image" src={getImage(item)} alt="" />
      {item.itemId && (
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

const getImage = (item: Item) => {
  return item.image || playlist;
};
export default Card;

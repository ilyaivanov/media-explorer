import React, { useEffect, useState } from "react";
import { Item, RootAction } from "./types";
import * as actions from "./state/actions";
import "./Row.css";
import { Triangle } from "./Triangle";

export type DivMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
const Row = React.memo(
  ({ item, level, dispatch, listenToDragEvents }: Props) => {
    const [isBeingEdited, setIsBeingEdited] = React.useState(false);
    const distanceTraveled = React.useRef(0);
    const inputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (isBeingEdited && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isBeingEdited]);

    const [isMouseDown, setIsMouseDown] = useState(false);

    const onMouseMove = React.useCallback(
      (e: MouseEvent) => {
        if (distanceTraveled.current > 5) {
          dispatch(actions.startDraggingItem(item.id));
          dispatch(
            actions.updateMouseCoordinatesDuringDrag(e.clientX, e.clientY)
          );
          console.log("Staring to drag");
        } else {
          distanceTraveled.current += Math.sqrt(
            e.movementY * e.movementY + e.movementX * e.movementX
          );
        }
      },
      [dispatch, item]
    );
    const onMouseUp = React.useCallback(() => {
      distanceTraveled.current = 0;
      dispatch(actions.dropItem());
      setIsMouseDown(false);
    }, [dispatch]);

    const onMouseOverDuringDrag = (e: DivMouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.x;
      const y = e.clientY - rect.y;
      dispatch(
        actions.setDropPosition({
          rect: e.currentTarget.getBoundingClientRect(),
          dropDestination:
            y > 20 ? (x > 60 + level * 20 ? "inside" : "after") : "before",
          targetLevel: level,
          itemId: item.id,
        })
      );
    };

    useEffect(() => {
      if (isMouseDown) {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      } else {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
      }
      return () => {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
      };
    }, [isMouseDown, onMouseUp, onMouseMove]);
    return (
      <div
        className="row"
        key={item.id}
        style={{ paddingLeft: level * 20 }}
        onMouseMove={listenToDragEvents ? onMouseOverDuringDrag : undefined}
      >
        <div
          className="small-text red"
          onClick={() => dispatch(actions.removeItem(item))}
        >
          X
        </div>
        <div className="small-text" onClick={() => setIsBeingEdited(true)}>
          E
        </div>
        <Triangle
          className={
            "triangle " +
            (item.children.length === 0 ? "transparent " : "") +
            (item.isOpen ? "open " : "")
          }
          data-testid={"triangle-" + item.id}
          onClick={() => dispatch(actions.toggleIsItemOpen(item))}
        />
        <div className="circle" onMouseDown={() => setIsMouseDown(true)}>
          {item.videoId && (
            <>
              <img
                src={`https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`}
                alt="1"
              />
              <div className="playButtonContainer">
                <Triangle
                  onClick={() => dispatch(actions.playItem(item))}
                  className={"playButton"}
                  width={14}
                />
              </div>
            </>
          )}
        </div>
        {isBeingEdited ? (
          <input
            type="text"
            value={item.title}
            ref={inputRef}
            onBlur={() => setIsBeingEdited(false)}
            onChange={(e) =>
              dispatch(actions.renameItem(item.id, e.currentTarget.value))
            }
          />
        ) : (
          <span className="text">{item.title}</span>
        )}
      </div>
    );
  }
);

interface Props {
  item: Item;
  level: number;
  listenToDragEvents: boolean;
  dispatch: (action: RootAction) => void;
}

export default Row;

import React, { useEffect, useRef, useState } from "react";
import { Item } from "./nodeTreeReducer";
import { Triangle } from "./Triangle";

export type DivMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
export const Row = ({
  item,
  onPress,
  startMoving,
  onRemove,
  onRename,
  onMouseMove,
  onCirclePress,
  level = 0,
}: {
  item: Item;
  onPress: (item: Item) => void;
  onCirclePress: (item: Item) => void;
  onRemove: (item: Item) => void;
  onRename: (item: Item, newName: string) => void;
  startMoving: (item: Item, e: DivMouseEvent) => void;
  onMouseMove: (item: Item, e: DivMouseEvent, itemLevel: number) => void;
  level?: number;
}) => {
  const [isRenaming, setIsRenaming] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const renameItem = () => {};

  useEffect(() => {
    if (isRenaming && ref.current) {
      ref.current.focus();
    }
  }, [isRenaming]);

  const onUnfocus = () => {
    setIsRenaming(false);
  };

  return (
    <div
      className="row"
      style={{ paddingLeft: level * 20 }}
      onMouseMove={(e) => {
        onMouseMove(item, e, level);
      }}
    >
      <Triangle
        className={
          "triangle " +
          (item.children.length === 0 ? "transparent " : "") +
          (item.isOpen ? "open " : "")
        }
        data-testid={"triangle-" + item.id}
        onClick={() => onPress(item)}
      />
      <div className={`circle`} onClick={() => onCirclePress(item)}>
        {item.videoId && (
          <img
            src={`https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`}
            alt="1"
          />
        )}
      </div>
      <div className="text">
        {isRenaming ? (
          <input
            onBlur={onUnfocus}
            ref={ref}
            type="text"
            value={item.title}
            onChange={(e) => onRename(item, e.currentTarget.value)}
          />
        ) : (
          item.title
        )}
      </div>
      <div onMouseDown={() => setIsRenaming(true)} className="small-text">
        E
      </div>
      <div onMouseDown={() => onRemove(item)} className="small-text red-text">
        X
      </div>
      <div onMouseDown={(e) => startMoving(item, e)} className="small-text">
        M
      </div>
    </div>
  );
};

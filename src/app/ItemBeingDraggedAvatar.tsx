import React from "react";

interface Props {
  x: number;
  y: number;
  text: string;
  videoId: string;
}

export const ItemBeingDraggedAvatar = ({ x, y, text, videoId }: Props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: y - 15,
        left: x - 15,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "lightblue",
          width: 30,
          height: 30,
          borderRadius: 30,
        }}
      >
        {videoId && (
          <img
            style={{ width: 30, height: 30, borderRadius: 30 }}
            src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`}
            alt="1"
          />
        )}
      </div>
      <span style={{ fontSize: 12, marginLeft: 5, width: 300 }}>{text}</span>
    </div>
  );
};

import React from "react";
import { DropDestinationPlaceholder } from "./types";

interface Props {
  dropDestinationPlaceholder?: DropDestinationPlaceholder;
}

export const DropDestinationLine = ({ dropDestinationPlaceholder }: Props) => {
  if (!dropDestinationPlaceholder) return null;

  return (
    <div
      style={{
        position: "absolute",
        top:
          dropDestinationPlaceholder.rect.top -
          5 +
          (dropDestinationPlaceholder.dropDestination === "before" ? 0 : 50),
        left:
          40 +
          dropDestinationPlaceholder.rect.left +
          dropDestinationPlaceholder.targetLevel * 20 +
          (dropDestinationPlaceholder.dropDestination === "inside" ? 20 : 0),
        height: 2,
        backgroundColor: "lightblue",
        width:
          dropDestinationPlaceholder.rect.width -
          40 -
          dropDestinationPlaceholder.targetLevel * 20 -
          (dropDestinationPlaceholder.dropDestination === "inside" ? 20 : 0),
      }}
    />
  );
};

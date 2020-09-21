import React from "react";
import { DropDestinationPlaceholder } from "./types";
import * as cs from "./constants";
interface Props {
  dropDestinationPlaceholder?: DropDestinationPlaceholder;
}

export const DropDestinationLine = ({ dropDestinationPlaceholder }: Props) => {
  if (!dropDestinationPlaceholder) return null;
  const { rect, dropDestination, targetLevel } = dropDestinationPlaceholder;
  const desiredTargetLevel =
    dropDestination === "inside" ? targetLevel + 1 : targetLevel;
  const left =
    cs.chevronWidth + desiredTargetLevel * cs.levelOffsetForMenu + rect.left;
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        top:
          rect.top -
          cs.dropDestinationLineHeight / 2 +
          (dropDestination === "before" ? 0 : rect.height),
        left,
        height: cs.dropDestinationLineHeight,
        backgroundColor: "lightblue",
        width: rect.width - left - cs.chevronWidth,
      }}
    />
  );
};

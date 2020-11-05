import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { menuHeight, GAP, MIN_COLUMN_WIDTH } from "../constants";
import { Item, RootState } from "../types";

interface Props {
  state: RootState;
}
function Index({ state }: Props) {
  const items = state.items[state.itemFocused].children.map(
    (id) => state.items[id]
  );

  const getNumberOfColumns = () => {
    if (galleryRef.current) {
      console.log(
        galleryRef.current?.clientWidth,
        Math.floor(
          (galleryRef.current.clientWidth - GAP) / (MIN_COLUMN_WIDTH + GAP)
        )
      );
      return Math.floor(
        (galleryRef.current.clientWidth - GAP) / (MIN_COLUMN_WIDTH + GAP)
      );
    }
    return 0;
  };
  const [numberOfColumns, setNumberOfColumns] = useState(0);
  const [openCards, setOpenCards] = useState<any>({ Second: true });
  const galleryRef = useRef<HTMLDivElement>(null);
  const onResize = () => {
    const cols = getNumberOfColumns();
    if (cols !== numberOfColumns) setNumberOfColumns(cols);
  };
  const toggle = (cardId: string) => {
    setOpenCards({ ...openCards, [cardId]: !openCards[cardId] });
  };
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [numberOfColumns]);

  return (
    <div
      className="gallery"
      ref={galleryRef}
      style={{ paddingTop: GAP + menuHeight, paddingLeft: GAP }}
    >
      {createIntegers(numberOfColumns).map((columnIndex) => (
        <Column
          toggle={toggle}
          openCards={openCards}
          state={state}
          items={items.filter((_, i) => i % numberOfColumns == columnIndex)}
          key={columnIndex}
        />
      ))}
    </div>
  );
}

const Column = ({
  items,
  toggle,
  openCards,
  state,
}: {
  items: Item[];
  state: RootState;
  toggle: any;
  openCards: any;
}) => {
  return (
    <div className="column" style={{ marginRight: GAP }}>
      {items.map((i) => (
        <Card
          state={state}
          key={i.id}
          isOpen={openCards[i.id]}
          item={i}
          toggle={toggle}
        />
      ))}
    </div>
  );
};

//creates integers starting from 0 up to upTo (exclusive)
const createIntegers = (upTo: number) =>
  Array.from(new Array(upTo)).map((_, i) => i);

export default Index;

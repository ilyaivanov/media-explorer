import React, { Fragment } from "react";
import "./App.css";

const id = () => Math.random() + "";

const item = (title: string, children: Item[] = []): Item => ({
  id: title.split(" ").pop() || id(),
  title,
  children,
  isOpen: false,
});

interface Item {
  id: string;
  title: string;
  children: Item[];
  isOpen: boolean;
}

class App extends React.Component {
  state = {
    items: [
      item("Root 1", [
        item("Sub 1.1", [item("Sub 1.1.1"), item("Sub 1.1.2")]),
        item("Sub 1.2"),
      ]),
      item("Root 2"),
      item("Root 3"),
    ],
  };

  toggleOpenClosed = (itemToToggle: Item) => {
    const newItems = this.state.items.map((item) =>
      this.toggleItem(item, itemToToggle.id)
    );
    this.setState({ items: newItems });
  };

  toggleItem = (item: Item, id: string): Item => {
    if (item.id === id)
      return {
        ...item,
        isOpen: !item.isOpen,
      };
    else
      return {
        ...item,
        children: item.children.map((i) => this.toggleItem(i, id)),
      };
  };

  renderItem = (item: Item, level: number): JSX.Element => (
    <Fragment key={item.id}>
      <ItemView onPress={this.toggleOpenClosed} item={item} level={level} />
      {item.isOpen &&
        item.children.map((item) => this.renderItem(item, level + 1))}
    </Fragment>
  );

  render() {
    return (
      <div className="page">
        {this.state.items.map((item) => this.renderItem(item, 0))}
      </div>
    );
  }
}
export default App;

//UI primitives for the app

const ItemView = ({
  item,
  onPress,
  level = 0,
}: {
  item: Item;
  onPress: (item: Item) => void;
  level?: number;
}) => (
  <div className="row" style={{ paddingLeft: level * 20 }}>
    <Triangle
      className={
        "triangle " +
        (item.children.length === 0 ? "transparent " : "") +
        (item.isOpen ? "open " : "")
      }
      data-testid={"triangle-" + item.id}
      onClick={() => onPress(item)}
    />
    <div className={`circle`} />
    <div className="text">{item.title}</div>
  </div>
);

const Triangle = (props: any) => {
  const width = 20;
  const verticalPadding = 7;
  const horizontalPadding = 4;
  return (
    <svg
      height={width}
      width={width}
      viewBox={`0 0 ${width} ${width}`}
      {...props}
    >
      <polygon
        points={`
        ${verticalPadding},${horizontalPadding} 
        ${width - verticalPadding},${width / 2} 
        ${verticalPadding},${width - horizontalPadding}`}
      />
    </svg>
  );
};

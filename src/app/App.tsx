import React, { Fragment } from "react";
import "./App.css";
import {
  DragAction,
  dragReducer,
  initialDragState,
  move,
  startMoving,
  stopMoving,
  mouseMoveOtherItem,
  DropTarget,
} from "./dragReducer";
import {
  drop,
  getInitialState,
  Item,
  toggleVisibility,
  traverseOpenNodes,
} from "./nodeTreeReducer";

class App extends React.Component {
  state = {
    items: getInitialState(),
    dragState: initialDragState,
  };

  toggleOpenClosed = (itemToToggle: Item) =>
    this.setState({
      items: toggleVisibility(this.state.items, itemToToggle.id),
    });

  startMoving = (item: Item, e: DivMouseEvent) => {
    this.dispatchDragAction(startMoving(item.id, e));
    this.registerDragEvents();
  };

  componentWillUnmount() {
    this.unregisterDragEvents();
  }

  onStopMoving = () => {
    console.log("DROP");

    this.setState({
      items: drop(
        // @ts-ignore
        this.state.items,
        this.state.dragState.dropTargetMarkerPosition as DropTarget
      ),
    });
    this.dispatchDragAction(stopMoving());
    this.unregisterDragEvents();
  };

  onMouseMove = (e: MouseEvent) => this.dispatchDragAction(move(e));

  dispatchDragAction = (action: DragAction) => {
    const newState = dragReducer(this.state.dragState, action);
    this.setState({ dragState: newState });
  };

  onMouseMoveOverItem = (item: Item, e: DivMouseEvent, itemLevel: number) =>
    this.dispatchDragAction(mouseMoveOtherItem(item.id, e, itemLevel));

  registerDragEvents = () => {
    document.addEventListener("mouseup", this.onStopMoving);
    document.addEventListener("mousemove", this.onMouseMove);
  };
  unregisterDragEvents = () => {
    document.removeEventListener("mouseup", this.onStopMoving);
    document.removeEventListener("mousemove", this.onMouseMove);
  };

  renderItem = (item: Item, level: number): JSX.Element => (
    <ItemView
      key={item.id}
      startMoving={this.startMoving}
      onMouseMove={this.onMouseMoveOverItem}
      onPress={this.toggleOpenClosed}
      item={item}
      level={level}
    />
  );

  render() {
    return (
      <div
        className={
          "page " +
          (this.state.dragState.movingItemInfo ? "page-during-drag" : "")
        }
      >
        {traverseOpenNodes(this.state.items, this.renderItem)}
        {this.state.dragState.movingItemInfo && (
          <div
            className="circle"
            style={{
              position: "fixed",
              backgroundColor: "lightgray",
              pointerEvents: "none",
              top: this.state.dragState.movingItemInfo.y,
              left: this.state.dragState.movingItemInfo.x,
            }}
          />
        )}
        {this.state.dragState.dropTargetMarkerPosition && (
          <div
            style={{
              position: "fixed",
              pointerEvents: "none",
              top: this.state.dragState.dropTargetMarkerPosition.rect.y + 10,
              left: this.state.dragState.dropTargetMarkerPosition.rect.x + 300,
            }}
          >
            {this.state.dragState.dropTargetMarkerPosition.dropPlacement}
          </div>
        )}
      </div>
    );
  }
}
export default App;

//UI primitives for the app
type DivMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;
const ItemView = ({
  item,
  onPress,
  startMoving,
  onMouseMove,
  level = 0,
}: {
  item: Item;
  onPress: (item: Item) => void;
  startMoving: (item: Item, e: DivMouseEvent) => void;
  onMouseMove: (item: Item, e: DivMouseEvent, itemLevel: number) => void;
  level?: number;
}) => {
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
      <div className={`circle`} />
      <div className="text">{item.title}</div>
      <div onMouseDown={(e) => startMoving(item, e)} className="small-text">
        move
      </div>
    </div>
  );
};

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

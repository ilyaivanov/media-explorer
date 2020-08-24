import React, { Fragment } from "react";
import * as d3 from "d3";
import Tree from "./Tree";
import c from "./constants";
class Viewport extends React.Component {
  x = 0;
  y = 0;
  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    document.addEventListener("wheel", this.onWheel);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
    document.removeEventListener("wheel", this.onWheel);
  }
  state = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  };

  onWheel = (e) => {
    const ITEMS_COUNT = 6;
    const contentHeight =
      c.OUTER_NODE_RADIUS * 2 * ITEMS_COUNT +
      c.DISTANCE_BETWEEN_NODES * (ITEMS_COUNT + 1);
    this.y = Math.min(
      Math.max(0, this.y + e.deltaY),
      Math.max(0, contentHeight - this.state.windowHeight)
    );
    d3.select("svg#main")
      .transition()
      .attr(
        "viewBox",
        `${this.x} ${this.y} ${this.state.windowWidth} ${this.state.windowHeight}`
      );
  };

  onItemClick = (item, index) => {
    this.y = index * (c.OUTER_NODE_RADIUS * 2 + c.DISTANCE_BETWEEN_NODES);
    this.x =
      (item.level) *
      (c.OUTER_NODE_RADIUS);
    d3.select("svg#main")
      .transition()
      .attr(
        "viewBox",
        `${this.x} ${this.y} ${this.state.windowWidth} ${this.state.windowHeight}`
      );
  };

  onResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  render() {
    return (
      <Fragment>
        <svg
          id="main"
          width={this.state.windowWidth}
          height={this.state.windowHeight}
          viewBox={`${0} ${this.y} ${this.state.windowWidth} ${
            this.state.windowHeight
          }`}
        />
        <svg id="scrollbar-background"></svg>
        <Tree onItemClick={this.onItemClick} />
      </Fragment>
    );
  }
}
export default Viewport;

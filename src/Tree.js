import React from "react";
import "./App.css";
import * as d3 from "d3";
import c from "./constants";
class Tree extends React.Component {
  componentDidMount() {
    const node = (text, level) => ({
      id: Math.floor(Math.random() * 10000),
      level,
      text,
    });
    const nodes = [
      node("Label", 0),
      node("Label Child1", 1),
      node("Label Child2", 1),
      node("Label Child2.1", 2),
      node("Label", 0),
      node("Label", 0),
    ];
    const gs = d3
      .select("svg#main")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) =>
          `translate(${
            c.PAGE_MARGIN +
            (d.level + 1) *
              (c.OUTER_NODE_RADIUS +
                c.SMALL_CIRCLE_RADIUS +
                c.OUTER_CIRCLE_MARGIN)
          }, ${
            c.OUTER_NODE_RADIUS +
            c.PAGE_MARGIN +
            i * (c.OUTER_NODE_RADIUS * 2 + c.DISTANCE_BETWEEN_NODES)
          })`
      );
    gs.append("circle")
      .attr("fill", "#61DAFB")
      .attr("class", "node-circle")
      .attr("r", c.INNER_NODE_RADIUS);
    gs.append("circle")
      .attr("fill", "transparent")
      .attr("stroke", "#E1E4E8")
      .attr("stroke-width", 2)
      .attr("r", c.OUTER_NODE_RADIUS);
    gs.append("circle")
      .attr("fill", "#E1E4E8")
      .attr(
        "cx",
        -c.OUTER_NODE_RADIUS - c.SMALL_CIRCLE_RADIUS - c.OUTER_CIRCLE_MARGIN
      )
      .attr("r", c.SMALL_CIRCLE_RADIUS);
    gs.append("text")
      .attr("x", c.OUTER_NODE_RADIUS + c.OUTER_CIRCLE_MARGIN)
      .classed("node-text", true)
      .attr("font-size", c.LABEL_SIZE)
      .text((d) => d.text)
      .on("click", this.props.onItemClick);
  }
  render() {
    return null;
  }
}

export default Tree;

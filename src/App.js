import React, {useEffect} from 'react';
import './App.css';
import * as d3 from 'd3'

function App() {
    useEffect(() => {
        d3.select("svg")
            .selectAll("circle")
            .data([1])
            .enter()
            .append("circle")
            .attr("data-testid", "foo")
            .attr("fill", "bar")
            .attr("class", "node-circle")
            .attr("cx", 130)
            .attr("cy", 130)
            .attr("r", 50);
    }, [])
    return (
        <svg width={800} height={600}>
        </svg>
    );
}

export default App;

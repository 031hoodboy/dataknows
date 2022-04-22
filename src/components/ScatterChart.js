import React from "react";
import * as d3 from "d3";
import "./styles.css";

const margin = { top: 20, right: 20, bottom: 20, left: 30 };

const ScatterChart = () => {
  const data = [
    {
      country: "Brazil",
      score: 80,
    },
  ];

  React.useEffect(() => {
    if (data.length > 0) {
      const svg = d3.select("#svg-container");
      const width = +svg.attr("width");
      const height = +svg.attr("height");
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      const xScale = d3
        .scaleLinear()
        .domain([20, 90])
        .range([10, innerWidth])
        .nice();

      const yScale = d3.scalePoint();

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

      const yAxisG = g
        .append("g")
        .call(d3.axisLeft(yScale).tickSize(-innerWidth));
      yAxisG.selectAll(".domain").remove();
      g.selectAll(".line").remove();

      g.append("g")
        .call(d3.axisBottom(xScale).tickSize(-innerHeight))
        .attr("transform", `translate(0, ${innerHeight})`);

      const xValue = (d) => d.score;

      g.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => xScale(xValue(d)))
        .attr("r", 10);
      g.selectAll(".domain").remove();
    }
  }, [data]);

  return (
    <div id="chart">
      <svg id="svg-container" width="300" height="50" />
    </div>
  );
};

export default ScatterChart;

import React from "react";
import * as d3 from "d3";
import fetchData from "./data";
import "./styles.css";

const margin = { top: 20, right: 20, bottom: 20, left: 80 };

export default function BarChart() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const d = await fetchData();
      setData(d);
    }
    getData();
  }, []);

  React.useEffect(() => {
    if (data.length > 0) {
      const svg = d3.select("#svg-container");
      const width = +svg.attr("width");
      const height = +svg.attr("height");
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;

      const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.score)])
        .range([0, innerWidth]);

      const yScale = d3
        .scaleBand()
        .domain(data.map((d) => d.country))
        .range([0, innerHeight])
        .padding(0.5);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

      g.append("g").call(d3.axisLeft(yScale));
      g.append("g")
        .call(d3.axisBottom(xScale))
        .attr("transform", `translate(0, ${innerHeight})`);

      const xValue = (d) => d.score;
      const yValue = (d) => d.country;

      g.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", (d) => yScale(yValue(d)))
        .attr("width", (d) => xScale(xValue(d)))
        .attr("height", yScale.bandwidth());
    }
  }, [data]);

  return (
    <div id="chart">
      <svg id="svg-container" width="500" height="400" />
    </div>
  );
}

import React, { useState } from "react";
import * as d3 from "d3";

function rightRoundedRect({ x, y, width, height, radius }) {
  return `
    M${x},${y}
    h${width - radius}
    a${radius},${radius} 0 0 1 ${radius},${radius}
    v${height}
    h${-width}
    v${-height}
    a${radius},${radius} 0 0 1 ${radius},${-radius}
    z
    `;
}

const Rect = ({ data, x, y, height, top, bottom, minimumY }) => {
  const d = rightRoundedRect({
    x: 0,
    y: -1,
    width: 7,
    height: height - bottom - top - y(data.cash),
    radius: 4,
  });

  // We need a minimum value because a perfect chart would show super small parts and look ugly
  // So instead we show the bigger of the two values
  const minimumHeight = height - bottom - top - y(minimumY);
  const totalHeight = height - bottom - top - y(data.value);
  const cardHeight = height - bottom - top - y(data.card);
  const cashHeight = height - bottom - top - y(data.cash);

  const cashOnly = cardHeight <= minimumHeight;
  const cardOnly = cashHeight <= minimumHeight;

  const isBelowMinimum = totalHeight <= minimumHeight;
  const fillColor = () => {
    if (cashOnly && cardOnly) {
      return cashHeight > cardHeight ? "#83B7F5" : "#2B1E70";
    }
    if (cashOnly) {
      return "#83B7F5";
    }

    return "#2B1E70";
  };

  return (
    <g
      transform={`translate(${x(data.date)}, ${y(
        isBelowMinimum ? minimumY : data.value
      )})`}
    >
      <rect
        width={7}
        height={isBelowMinimum ? minimumHeight : totalHeight}
        fill={fillColor()}
        rx={4}
      />

      {!cashOnly && !cardOnly && <path d={d} fill={"#83B7F5"} />}

      {/* <rect
        width={7}
        height={height - bottom - top - y(data.cash)}
        fill={"#83B7F5"}
        rx={4}
        ry={12}
        transform={`translate(0, - ${y(data.cash)})`}
      /> */}
    </g>
  );
};

export const Bar = (props) => {
  const data = [...props.data];

  const x = d3
    .scaleBand()
    .range([0, props.width - props.left - props.right])
    .domain(data.map((d) => d.date))
    .padding(0.3);

  const maximumY = d3.max(data, (d) => d.value);
  const minimumY = maximumY * 0.05;
  const y = d3
    .scaleLinear()
    .range([props.height - props.top - props.bottom, 0])
    .domain([0, maximumY]);

  return (
    <>
      <svg width={props.width} height={props.height}>
        <g transform={`translate(${props.left}, ${props.top})`}>
          {data.map((d, i) => (
            <Rect
              data={d}
              x={x}
              y={y}
              minimumY={minimumY}
              top={props.top}
              bottom={props.bottom}
              height={props.height}
            />
          ))}
        </g>
      </svg>
    </>
  );
};

export default Bar;

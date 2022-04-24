import React from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Arc = ({ data, index, createArc, colors, format }) => (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
  </g>
);

const Pie = (props) => {
  const createPie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);

  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius)
    .cornerRadius(5);

  const colors = d3.scaleOrdinal([`#FFCC15`, `#85ACF3`]);
  const data = createPie(props.data);

  return (
    <PieWrapper>
      <ShopIcon src={require(`../assets/cart.png`)} />
      <svg width={props.width} height={props.height}>
        <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
          {data.map((d, i) => (
            <Arc
              key={i}
              index={i}
              data={d}
              createArc={createArc}
              colors={colors}
            />
          ))}
        </g>
      </svg>
    </PieWrapper>
  );
};

const PieWrapper = styled.div`
  display: flex;
`;

const ShopIcon = styled.img`
  width: 16px;
  height: 15px;
  position: absolute;

  margin: 17.5px 17px;
`;

export default Pie;

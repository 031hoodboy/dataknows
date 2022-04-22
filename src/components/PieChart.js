import React from "react";
import Pie from "./PieGraph";

function PieChart() {
  const data = [
    {
      value: 80,
    },
    {
      value: 20,
    },
  ];

  return (
    <Pie data={data} width={50} height={50} innerRadius={18} outerRadius={25} />
  );
}

export default PieChart;

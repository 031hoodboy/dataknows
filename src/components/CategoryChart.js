import React from "react";
import styled from "styled-components";
import CategoryDetail from "./CategoryDetail";

const CategoryChart = () => {
  const datas = [
    {
      id: 1,
      title: "교육",
      evaluate: "좋음",
      iconColor: "#ff994f",
      contnetsNum: 23,
      contnets: [
        {
          id: 1,
          title: "유치원",
          number: 12,
        },
        {
          id: 2,
          title: "어린이집",
          number: 12,
        },
        {
          id: 3,
          title: "초등학교",
          number: 12,
        },
        {
          id: 4,
          title: "중학교",
          number: 12,
        },
        {
          id: 5,
          title: "고등학교",
          number: 12,
        },
        {
          id: 6,
          title: "도서관",
          number: 12,
        },
        {
          id: 7,
          title: "학원가",
          number: 12,
        },
      ],
    },
    {
      id: 2,
      title: "교통",
      evaluate: "매우좋음",
      iconColor: "#397bb8",
      contnetsNum: 23,
      contnets: [
        {
          id: 1,
          title: "유치원",
          number: 12,
        },
        {
          id: 2,
          title: "어린이집",
          number: 12,
        },
        {
          id: 3,
          title: "초등학교",
          number: 12,
        },
        {
          id: 4,
          title: "중학교",
          number: 12,
        },
        {
          id: 5,
          title: "고등학교",
          number: 12,
        },
        {
          id: 6,
          title: "도서관",
          number: 12,
        },
        {
          id: 7,
          title: "학원가",
          number: 12,
        },
      ],
    },
    {
      id: 3,
      title: "생활",
      evaluate: "좋음",
      iconColor: "#39b88a",
      contnetsNum: 23,
      contnets: [
        {
          id: 1,
          title: "유치원",
          number: 12,
        },
        {
          id: 2,
          title: "어린이집",
          number: 12,
        },
        {
          id: 3,
          title: "초등학교",
          number: 12,
        },
        {
          id: 4,
          title: "중학교",
          number: 12,
        },
        {
          id: 5,
          title: "고등학교",
          number: 12,
        },
        {
          id: 6,
          title: "도서관",
          number: 12,
        },
        {
          id: 7,
          title: "학원가",
          number: 12,
        },
      ],
    },
  ];

  return (
    <>
      <BlockTitle>
        주변에 <Bold>교육이</Bold> 가장 많아요
      </BlockTitle>
      <Chart>
        {datas.map((data) => (
          <ChartContents
            key={data.id}
            style={{
              width: `${data.contnetsNum * 100}%`,
              backgroundColor: `${data.iconColor}`,
            }}
          />
        ))}
      </Chart>
      {datas.map((data) => (
        <CategoryDetail data={data} />
      ))}
    </>
  );
};

const BlockTitle = styled.div`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: #2a2f37;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const Chart = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 18px;
  gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`;

const ChartContents = styled.div`
  height: 24px;
`;

export default CategoryChart;

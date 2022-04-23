import React from "react";
import styled from "styled-components";
import ChartMessageIcon from "../assets/chatbox.png";

const Chart = () => {
  const data = 80;

  return (
    <ChartBackground>
      <ChartDotWrapper style={{ left: `calc(${data}% - 30px)` }}>
        <ChartMessage>매우좋음</ChartMessage>
        <ChartDot />
        <MyScore>{data}점</MyScore>
      </ChartDotWrapper>
      <ChartAverage />
    </ChartBackground>
  );
};

const ChartBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-90deg, #088cff 1.85%, #cbe7ff 100%);
  height: 8px;
  border-radius: 40px;
  position: relative;
  margin-top: 43px;
`;

const ChartAverage = styled.div`
  border-left: 1px solid #8b97aa;
  height: 11px;
`;

const ChartDotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-bottom: 15px;
`;

const ChartDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: #fff;
`;

const ChartMessage = styled.div`
  width: 44px;
  height: 27px;
  background-image: url(${ChartMessageIcon});
  background-position: center;
  background-size: cover;
  padding: 4px 8px;
  color: #fff;
  line-height: 20px;
  font-size: 12px;
  margin-bottom: 4px;
`;

const MyScore = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.4px;
  color: #333a46;
  margin-top: 4px;
`;

export default Chart;

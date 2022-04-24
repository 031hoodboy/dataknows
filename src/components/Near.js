import React from "react";
import styled, { css } from "styled-components";

const Near = () => {
  const datas = [
    {
      id: "1",
      icon: "happyicon",
      title: "라라어린이집",
      distance: "150m",
      stations: [],
    },
    {
      id: "2",
      icon: "subwayicon",
      title: "공덕역",
      distance: "200m",
      stations: ["line5", "line6", "airportstation", "gcl"],
    },
    {
      id: "3",
      icon: "subwayicon",
      title: "시청역",
      distance: "200m",
      stations: ["line5"],
    },
    {
      id: "4",
      icon: "subwayicon",
      title: "공덕역",
      distance: "200m",
      stations: ["line5", "line6", "airportstation", "gcl"],
    },
    {
      id: "5",
      icon: "shopicon",
      title: "롯데백화점 본점",
      distance: "500m",
      stations: [],
    },
    {
      id: "6",
      icon: "shopicon",
      title: "홈플러스신논현점",
      distance: "640m",
      stations: [],
    },
    {
      id: "7",
      icon: "happyicon",
      title: "푸른꿈나무유치원",
      distance: "150m",
      stations: [],
    },
  ];

  const selected = true;

  return (
    <NearWrapper>
      <BlockTitle>
        <Bold>1km 이내</Bold> 가까운 환경
      </BlockTitle>
      <NearNavigator>
        <NearNav selected={selected}>전체</NearNav>
        <NearNav>교통</NearNav>
        <NearNav>교육</NearNav>
        <NearNav>생활</NearNav>
      </NearNavigator>
      <NearList>
        {datas.map((data) => (
          <NearLeastItem>
            <JustifyWrapper>
              <DataIcon src={require(`../assets/${data.icon}.png`)} />
              <DataTitle>{data.title}</DataTitle>
              {data.stations.map((station) => (
                <IconWrapper>
                  <StationIcon src={require(`../assets/${station}.png`)} />
                </IconWrapper>
              ))}
            </JustifyWrapper>
            <JustifyWrapper>
              <DataDistance>{data.distance}</DataDistance>
            </JustifyWrapper>
          </NearLeastItem>
        ))}
      </NearList>
      <SeeMoreButton>
        더보기
        <BottomArrow src={require(`../assets/bottomarrow.png`)} />
      </SeeMoreButton>
    </NearWrapper>
  );
};

const JustifyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ResidenceScoreWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NearWrapper = styled(ResidenceScoreWrapper)`
  flex-direction: column;
  align-items: flex-start;
`;

const BlockTitle = styled.div`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: #2a2f37;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const NearNavigator = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #f2f3f5;
  border-radius: 100px;
  padding: 2px;
  margin-top: 24px;
  color: #8b97aa;
`;

const NearNav = styled.div`
  padding: 5px 21px;
  color: #8b97aa;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  ${(props) =>
    props.selected &&
    css`
      background-color: #fff;
      border-radius: 100px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      font-weight: 500;
      color: #333a46;
    `}
`;

const NearList = styled.div`
  width: calc(100% - 16px);
  margin-top: 30px;
  padding: 0 8px;
`;

const NearLeastItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.4px;
  color: #6d7787;
  margin-bottom: 20px;
`;

const DataIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const SeeMoreButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e9eaec;
  border-radius: 6px;
  padding: 9px 0px;
  margin-top: 10px;
`;

const BottomArrow = styled.img`
  width: 10px;
  height: 5px;
`;

const DataTitle = styled.div`
  margin-right: 2px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;
const StationIcon = styled.img`
  height: 16px;
  object-fit: contain;
`;

const DataDistance = styled.div`
  color: #000;
`;

export default Near;

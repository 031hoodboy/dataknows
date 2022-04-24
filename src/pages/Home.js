import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import SafeArea from "react-safe-area-component";
import Header from "../components/Header";
import Near from "../components/Near";
import CategoryDetail from "../components/CategoryChart";
import Chart from "../components/Chart";
import PieChart from "../components/PieChart";

const Home = () => {
  return (
    <PageBlock>
      <SafeArea />
      <Header />
      <ResidenceScoreWrapper>
        <ResidenceScoreBlock>
          <TitleWrapper>
            거주점수
            <Qmark src={require(`../assets/qmark.png`)} />
          </TitleWrapper>
          <ChartWrapper>
            <Chart />
            <ColumnWrapper>
              <ChartMin>
                동네 최저점 <br />
                <ColumnBold>20점</ColumnBold>
              </ChartMin>
              <ChartAvg>평균</ChartAvg>
              <ChartMax>
                최고점 <br /> <ColumnBold>90점</ColumnBold>
              </ChartMax>
            </ColumnWrapper>
          </ChartWrapper>
        </ResidenceScoreBlock>
      </ResidenceScoreWrapper>
      <ResidenceSettingWrapper>
        <ResidenceSettingBlock>
          <JustifyWrapper>
            <PieChart />
            <ContentWrapper>
              <ScoreName>Y.zyyyyy님의</ScoreName>
              <ScoreTitle>
                <YelloSpan>거주점수</YelloSpan> 맞춤설정
              </ScoreTitle>
            </ContentWrapper>
          </JustifyWrapper>
          <JustifyWrapper>
            <WhiteArrow src={require(`../assets/whitearrow.png`)} />
          </JustifyWrapper>
        </ResidenceSettingBlock>
      </ResidenceSettingWrapper>
      <Near />
      <Devider />
      <NearWrapper>
        <BlockTitle>
          주변에 <Bold>교육이</Bold> 가장 많아요
        </BlockTitle>
        <CategoryDetail />
      </NearWrapper>
      <Devider />
      <DataSourcesBlock>
        <SourcesTitle>데이터 출처보기</SourcesTitle>
        <Check src={require(`../assets/check.png`)} />
      </DataSourcesBlock>
      <Devider />
      <NearWrapper>
        <CorrectBlock>
          <CorrectJustifyWrapper>
            <CorrectContent>
              리치고는 빠르고 정확한 정보를 제공하기 위해 열심히 노력하고 있어요
            </CorrectContent>
            <CorrectButton>
              정정 및 요청문의
              <BlueArrow src={require(`../assets/bluearrow.png`)} />
            </CorrectButton>
          </CorrectJustifyWrapper>
          <CorrectJustifyWrapper>
            <MailBox src={require(`../assets/mailbox.png`)} />
          </CorrectJustifyWrapper>
        </CorrectBlock>
      </NearWrapper>
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
      <Devider />
    </PageBlock>
  );
};

const JustifyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PageBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Noto Sans KR;
`;

const ResidenceScoreWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResidenceScoreBlock = styled.div`
  width: 100%;
  margin-bottom: 4px;
  box-shadow: 0px 2px 12px rgba(42, 47, 55, 0.08);
  border-radius: 8px;
  padding: 16px 16px 21px 16px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4000000059604645px;
  text-align: center;
`;

const Qmark = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 5px;
  margin-bottom: 3px;
`;

// const Chart = styled.img`
//   width: 100%;
// `;

const ResidenceSettingWrapper = styled(ResidenceScoreWrapper)`
  background-color: #f6f7f8;
`;

const ResidenceSettingBlock = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #3b82f6 0%, #16abff 101.79%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 18px 14px 18px;
`;

const ContentWrapper = styled.div`
  color: #f6f7f7;
  letter-spacing: -0.4px;
  margin-left: 14px;
`;

const ScoreName = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

const ScoreTitle = styled.div`
  font-weight: 900;
  font-size: 16px;
  line-height: 28px;
`;

const YelloSpan = styled.span`
  color: #ffc49a;
`;

const WhiteArrow = styled.img`
  height: 12px;
  width: 6px;
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

const Devider = styled.div`
  width: 100%;
  height: 10px;
  background-color: #f6f7f8;
`;

const Chart3 = styled.img`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 17px;
`;

const DataSourcesBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const SourcesTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #2a2f37;
`;
const Check = styled.img`
  width: 10px;
  height: 5px;
  margin-left: 10px;
`;

const CorrectBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CorrectJustifyWrapper = styled(JustifyWrapper)`
  flex-direction: column;
  align-items: flex-start;
`;
const CorrectContent = styled.div`
  color: #333a46;
  max-width: 211px;
  line-break: strict;
  word-break: keep-all;
  font-size: 14px;
  line-height: 22px;
  color: #333a46;
`;

const CorrectButton = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  color: #3b82f6;
  margin-top: 6px;
`;

const MailBox = styled.img`
  width: 76px;
  height: 76px;
`;

const BlueArrow = styled.img`
  width: 4px;
  height: 8px;
  margin-left: 8px;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.6px;
  color: #6d7787;
  position: relative; ;
`;

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: inherit;
  margin-top: 2px;
`;

const ChartMin = styled.div`
  text-align: start;
  width: 50px;
`;

const ColumnBold = styled.span`
  font-family: Noto Sans KR;
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
`;

const ChartAvg = styled.div``;

const ChartMax = styled.div`
  width: 50px;
  text-align: end;
`;

export default Home;

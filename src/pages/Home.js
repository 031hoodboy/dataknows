import React from "react";
import styled from "styled-components";
import SafeArea from "react-safe-area-component";
import Header from "../components/Header";
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
          <Chart src={require(`../assets/chart.png`)} />
        </ResidenceScoreBlock>
      </ResidenceScoreWrapper>
      <ResidenceSettingWrapper>
        <ResidenceSettingBlock>
          <JustifyWrapper>
            <ScoreChart></ScoreChart>
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
      <NearWrapper>
        <BlockTitle>1km 이내 가까운 환경</BlockTitle>

        <NearNavigator>
          <NearNav>전체</NearNav>
          <NearNav>교통</NearNav>
          <NearNav>교육</NearNav>
          <NearNav>생활</NearNav>
        </NearNavigator>
        <SeeMoreButton>
          더보기
          <BottomArrow src={require(`../assets/bottomarrow.png`)} />
        </SeeMoreButton>
      </NearWrapper>
    </PageBlock>
  );
};

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

const Chart = styled.img`
  width: 100%;
`;

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

const JustifyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ScoreChart = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 100%;
  border: 6px solid #ffcc15;
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

const NearBlock = styled.div`
  width: 100%;
  background: #f2f2f2;
  border-radius: 8px;
`;

const BlockTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: #2a2f37;
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
  background-color: #fff;
  border-radius: 100px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333a46;
`;

const SeeMoreButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e9eaec;
  border-radius: 6px;
  padding: 9px 0px;
  margin-top: 30px;
`;

const BottomArrow = styled.img`
  width: 10px;
  height: 5px;
`;

export default Home;

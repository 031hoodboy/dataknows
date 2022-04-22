import React from "react";
import styled from "styled-components";
import SafeArea from "react-safe-area-component";
import Header from "../components/Header";
import Near from "../components/Near";
import Chart from "../components/Chart";

const Home = () => {
  const edus = [
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
  ];

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
          <Chart />
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
      <Near />
      <Devider />
      <NearWrapper>
        <BlockTitle>
          주변에 <Bold>교육이</Bold> 가장 많아요
        </BlockTitle>
        <Chart3 src={require(`../assets/chart3.png`)} />
        <CategoryBlock>
          <CategoryTitleWrapper>
            <JustifyWrapper>
              <EduIcon />
              <CategoryTitle>교육</CategoryTitle>
              <Evaluation>좋음</Evaluation>
            </JustifyWrapper>
            <JustifyWrapper>
              <CategoryNum>23개</CategoryNum>
              <CategoryArrow src={require(`../assets/upcheck.png`)} />
            </JustifyWrapper>
          </CategoryTitleWrapper>
          <CategoryDetailBlock>
            {edus.map((edu) => (
              <>
                {edu.id % 2 === 0 ? (
                  <LeftEduContents>
                    {edu.title} {edu.number}개
                  </LeftEduContents>
                ) : (
                  <RightEduContents>
                    {edu.title} {edu.number}개
                  </RightEduContents>
                )}
              </>
            ))}
          </CategoryDetailBlock>
          <CategoryTitleWrapper>
            <JustifyWrapper>
              <TansportationIcon />
              <CategoryTitle>교통</CategoryTitle>
              <Evaluation>매우좋음</Evaluation>
            </JustifyWrapper>
            <JustifyWrapper>
              <CategoryNum>23개</CategoryNum>
              <CategoryArrow src={require(`../assets/check.png`)} />
            </JustifyWrapper>
          </CategoryTitleWrapper>
          <CategoryTitleWrapper>
            <JustifyWrapper>
              <LifeIcon />
              <CategoryTitle>생활</CategoryTitle>
              <Evaluation>매우좋음</Evaluation>
            </JustifyWrapper>
            <JustifyWrapper>
              <CategoryNum>23개</CategoryNum>
              <CategoryArrow src={require(`../assets/check.png`)} />
            </JustifyWrapper>
          </CategoryTitleWrapper>
        </CategoryBlock>
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

const CategoryBlock = styled.div`
  width: calc(100% - 10px);
  margin: 0px 5px;
  display: flex;
  flex-direction: column;
`;

const CategoryTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin: 17px 0px;
`;

const EduIcon = styled.div`
  width: 16px;
  height: 16px;
  background: #ff994f;
  border-radius: 4px;
`;

const TansportationIcon = styled(EduIcon)`
  background: #397bb8;
`;
const LifeIcon = styled(EduIcon)`
  background: #39b88a;
`;
const CategoryTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  color: #2a2f37;
  margin-left: 6px;
`;

const Evaluation = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #8b97aa;
  margin-left: 4px;
`;

const CategoryNum = styled.div``;

const CategoryArrow = styled.img`
  width: 12px;
  height: 6px;
  margin-left: 12px;
`;

const CategoryDetailBlock = styled.div`
  width: (100% - 4px);
  margin: 0px 2px 17px 2px;
  padding: 16px 22px;
  background: #f7f8f9;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
`;

const LeftEduContents = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.4px;
  color: #6d7787;
  width: 75px;
`;

const RightEduContents = styled(LeftEduContents)`
  margin-right: 93px;
`;

export default Home;

import React from "react";
import styled, { css } from "styled-components";
import SafeArea from "react-safe-area-component";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();
  return (
    <PageBlock>
      <SafeArea />
      <HeaderWrapper>
        <Header>
          <HeaderJustifyWrapper>
            <Arrow src={require(`../assets/arrow.png`)} />
            <LocationWrapper>
              <LocationTopWarpper>
                <DongName>신대방동</DongName>
                <Evaluation>매우좋음</Evaluation>
              </LocationTopWarpper>
              <LocationBottompWarpper>
                <Apartment>보라매이편한세상</Apartment>
                <ApartmentButton
                  src={require(`../assets/fi_chevron-down.png`)}
                />
              </LocationBottompWarpper>
            </LocationWrapper>
          </HeaderJustifyWrapper>
          <HeaderJustifyWrapper>
            <Sharing src={require(`../assets/share.png`)} />
            <Star src={require(`../assets/star.png`)} />
          </HeaderJustifyWrapper>
        </Header>
        <Navigator>
          <Nav>가격</Nav>
          <Nav>분석</Nav>
          <Nav selected={pathname === "/"}>환경</Nav>
          <Nav>호재</Nav>
          <Nav>이야기</Nav>
          <Nav>기본</Nav>
        </Navigator>
      </HeaderWrapper>
      <ResidenceScoreWrapper>
        <ResidenceScoreBlock></ResidenceScoreBlock>
      </ResidenceScoreWrapper>
      <ResidenceSettingWrapper>
        <ResidenceSettingBlock></ResidenceSettingBlock>
      </ResidenceSettingWrapper>
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

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: calc(100% - 40px);
  padding: 10px 20px 15px;
  display: flex;
  justify-content: space-between;
`;

const HeaderJustifyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Arrow = styled.img`
  margin-right: 24px;
  height: 12px;
  width: 6px;
`;

const LocationWrapper = styled.div``;

const LocationTopWarpper = styled.div`
  display: flex;
  line-height: 20px;
  font-weight: 400;
  font-size: 14px;
`;

const DongName = styled.div`
  color: #333a46;
`;

const Evaluation = styled.div`
  color: #6d7787;
  margin-left: 6px;
`;

const LocationBottompWarpper = styled.div`
  display: flex;
  align-items: center;
`;

const Apartment = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
`;

const ApartmentButton = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  margin-left: 6px;
`;

const Sharing = styled.img`
  width: 35px;
  height: 35px;
`;

const Star = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 15px;
`;

const Navigator = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e9eaec;
  padding: 4px 20px 10px;
`;

const Nav = styled.div`
  height: 26px;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.6px;
  color: #8b97aa;
  ${(props) =>
    props.selected &&
    css`
      color: #000;
      font-weight: 500;
      border-bottom: 2px solid #000;
    `}
`;

const ResidenceScoreWrapper = styled.div`
  width: 100%;
  height: 188px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResidenceScoreBlock = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 44px);
  margin: 20px 20px 24px 20px;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(42, 47, 55, 0.08);
  border-radius: 8px;
`;

const ResidenceSettingWrapper = styled.div`
  width: 100%;
  height: 107px;
  background-color: #f2f2f2;
`;

const ResidenceSettingBlock = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 44px);
  margin: 20px 15px 20px;
  background: linear-gradient(90deg, #3b82f6 0%, #16abff 101.79%);
  border-radius: 8px;
`;

export default Home;

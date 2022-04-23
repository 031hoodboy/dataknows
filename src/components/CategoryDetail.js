import React, { useState } from "react";
import styled, { css } from "styled-components";

const CategoryDetail = () => {
  const datas = [
    {
      id: 1,
      title: "교육",
      evaluate: "좋음",
      iconColor: "#ff994f",
      contnetsNum: 2,
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
      contnetsNum: 3,
      contnets: [],
    },
    {
      id: 3,
      title: "생활",
      evaluate: "좋음",
      iconColor: "#39b88a",
      contnetsNum: 1,
      contnets: [],
    },
  ];

  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Chart>
        {datas.map((data) => (
          <ChartContents
            style={{
              width: `${data.contnetsNum * 100}%`,
              backgroundColor: `${data.iconColor}`,
            }}
          />
        ))}
      </Chart>
      {datas.map((data) => (
        <CategoryBlock>
          <CategoryTitleWrapper key={data.id}>
            <JustifyWrapper>
              <CategoryIcon style={{ background: `${data.iconColor}` }} />
              <CategoryTitle>{data.title}</CategoryTitle>
              <Evaluation>{data.evaluate}</Evaluation>
            </JustifyWrapper>
            <JustifyWrapper>
              <CategoryNum>{data.contnetsNum}개</CategoryNum>
              <CategoryArrow
                src={require(`../assets/check.png`)}
                open={open}
                onClick={onOpen}
              />
            </JustifyWrapper>
          </CategoryTitleWrapper>
          <CategoryDetailBlock open={open}>
            {data.contnets.map((contnet) => (
              <>
                {contnet.id % 2 === 0 ? (
                  <LeftEduContents>
                    {contnet.title} {contnet.number}개
                  </LeftEduContents>
                ) : (
                  <RightEduContents>
                    {contnet.title} {contnet.number}개
                  </RightEduContents>
                )}
              </>
            ))}
          </CategoryDetailBlock>
        </CategoryBlock>
      ))}
    </>
  );
};

const JustifyWrapper = styled.div`
  display: flex;
  align-items: center;
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

const CategoryBlock = styled.div`
  width: calc(100% - 10px);
  margin: 0px 5px;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.selected &&
    css`
      color: #000;
      font-weight: 500;
      padding-bottom: 10px;
      border-bottom: 2px solid #000;
    `}
`;

const CategoryTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin: 17px 0px;
`;

const CategoryIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
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
  ${(props) =>
    props.open &&
    css`
      transform: rotate(180deg);
    `}
`;

const CategoryDetailBlock = styled.div`
  width: (100% - 4px);
  margin: 0px 2px 17px 2px;
  padding: 16px 22px;
  background: #f7f8f9;
  border-radius: 12px;
  display: none;
  flex-wrap: wrap;
  ${(props) =>
    props.open &&
    css`
      display: flex;
    `}
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

export default CategoryDetail;

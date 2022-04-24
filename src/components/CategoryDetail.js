import React, { useState } from "react";
import styled, { css } from "styled-components";

const CategoryDetail = ({ data }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(!open);
  };

  return (
    <CategoryBlock key={data.id}>
      <CategoryTitleWrapper>
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
  );
};

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

const JustifyWrapper = styled.div`
  display: flex;
  align-items: center;
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

export default CategoryDetail;

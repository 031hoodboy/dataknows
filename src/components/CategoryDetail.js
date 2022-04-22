import React from "react";
import styled from "styled-components";

const CategoryDetail = () => {
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
  );
};

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

export default CategoryDetail;

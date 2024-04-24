import styled, { css } from "styled-components";

type ParagraphPropsType = {
  type: "for-card";
};

export const Paragraph = styled.p<ParagraphPropsType>`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  word-wrap: break-word;
  color: #abb3ba;

  ${(props) =>
    props.type === "for-card" &&
    css<ParagraphPropsType>`
      max-height: 40px;
      overflow: hidden;
    `}
`;

import styled from "styled-components";

type FlexWrapperProps = {
  gap?: string;
  justify?: string;
  align?: string;
  mt?: string;
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  justify-content: ${(props) => props.gap || "flex-start"};
  align-items: ${(props) => props.gap || "flex-start"};
  gap: ${(props) => props.gap || "0"};
  margin-top: ${(props) => props.mt || "0"};
`;

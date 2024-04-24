import React from "react";
import styled, { css } from "styled-components";
import { MyTheme } from "../styles/MyTheme.styled";

type CustomButtonPropsType = {
  children: React.ReactNode;
  btnType: "primary" | "outlined";
};

export const CustomButton = styled.button<CustomButtonPropsType>`
  border-radius: 5px;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  padding: 5px 20px;
  border: 2px solid transparent;
  transition: all 0.3s;
  ${(props) =>
    props.btnType === "primary" &&
    css<CustomButtonPropsType>`
      background: ${MyTheme.colors.primary};
      color: #ffffff;

      &:hover {
        background-color: ${MyTheme.colors.secondary};
      }
    `}

  ${(props) =>
    props.btnType === "outlined" &&
    css<CustomButtonPropsType>`
      background: transparent;
      color: ${MyTheme.colors.primary};
      border: 2px solid ${MyTheme.colors.primary};

      &:hover {
        color: ${MyTheme.colors.secondary};
        border: 2px solid ${MyTheme.colors.secondary};
      }
    `}
`;

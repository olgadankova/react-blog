import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  text: string;
}

export const Button = ({ text }: IProps) => {
  return <StyledButton>{text}</StyledButton>;
};

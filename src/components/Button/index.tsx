import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = React.DOMAttributes<HTMLDivElement>;

const focusCss = css<ButtonProps>`
  &:focus {
  }
`;

const ButtonStyle = styled.button`
  color: ${({ theme }) => theme.colors.primary};

  ${focusCss}
`;

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonStyle />;
};

export default Button;

import React, { FC, MouseEvent, useState } from "react";
import { ButtonContainer, ButtonText, ButtonIcon } from "./Button.styled";

interface IButton {
  text: string;
  onClick: (event: MouseEvent) => void;
  SVG?: FC;
  width?: number;
}

export const Button = ({ SVG, text, onClick, width }: IButton) => {
  const [pressed, setPressed] = useState(false);

  const onButtonClick = (event: MouseEvent) => {
    setPressed(true);
    onClick(event);
  };

  const SVGComponent = SVG ? (
    <ButtonIcon>
      <SVG />
    </ButtonIcon>
  ) : null;

  return (
    <ButtonContainer
      onClick={onButtonClick}
      width={width}
      pressed={pressed}
    >
      <ButtonText>{text}</ButtonText>
      {SVGComponent}
    </ButtonContainer>
  );
};

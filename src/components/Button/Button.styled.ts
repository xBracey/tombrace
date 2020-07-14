import styled, { css } from "styled-components";
import config from "../../config";

interface IButtonContainer {
  width?: number;
  pressed: boolean;
}

const ButtonColorLogic = css<IButtonContainer>`
  box-shadow: ${(props) =>
    props.pressed ? "none" : `inset 0px -4px 0px ${config.colors.DARK_BLUE}`};

  background-color: ${config.colors.DARK_BLUE};

  p {
    color: ${config.colors.WHITE};
  }

  path {
    fill: ${config.colors.WHITE};
  }
`;

export const ButtonContainer = styled.div<IButtonContainer>`
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 42px;
  border: 2px solid ${config.colors.DARK_BLUE};
  box-sizing: border-box;
  box-shadow: inset 0px -4px 0px ${config.colors.DARK_BLUE};
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  ${(props) => (props.width ? `width: ${props.width}px;` : "")}
  margin: 12px 0;
  ${ButtonColorLogic}
`;

export const ButtonIcon = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.p`
  flex: 1;
`;

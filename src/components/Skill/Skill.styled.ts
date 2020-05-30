import styled, { css } from "styled-components";
import config from "../../config";
import { mobileMixin } from "../../index.styled";

interface IBox {
    filled: boolean;
}

const borderRadius = "20px";

const CoreBox = css`
    width: 65px;
    height: 42px;
    border: 4px solid;
    margin: 2px;

    ${mobileMixin(`
        width: 44px;
        height: 28px;
    `)};
`;

export const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
`;

export const SkillBoxes = styled.div`
    display: flex;
`;

export const SkillHeader = styled.h2`
    font-size: 24px;
    margin: 10px;
`;

export const SkillLevel = styled.h2`
    font-size: 18px;
    margin: 6px;
`;

export const FirstBox = styled.div`
    ${CoreBox};
    background-color: ${config.colors.LIGHT_BLUE};
    border-color: ${config.colors.DARK_BLUE};
    border-top-left-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
`;

export const LastBox = styled.div`
    ${CoreBox};
    background-color: ${config.colors.WHITE};
    border-color: ${config.colors.BLACK};
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
`;

export const Box = styled.div<IBox>`
    ${CoreBox};
    background-color: ${props => (props.filled ? config.colors.LIGHT_BLUE : config.colors.WHITE)};
    border-color: ${props => (props.filled ? config.colors.DARK_BLUE : config.colors.BLACK)};
`;

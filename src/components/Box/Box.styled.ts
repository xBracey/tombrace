import styled from "styled-components";
import config from "../../config";
import { mobileMixin } from "../../index.styled";

interface IBoxContainer {
    width: string;
}

export const BoxContainer = styled.div<IBoxContainer>`
    padding: 25px;
    margin: 15px;
    background-color: ${config.colors.GREY};
    border-radius: 20px;
    width: ${props => props.width};
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${mobileMixin(`
        width: calc(100% - 80px);
    `)}
`;

import styled from "styled-components";

interface IPillContainer {
    backgroundcolor: string;
}

interface IPillText {
    color: string;
    textSize: string;
}

export const PillContainer = styled.a<IPillContainer>`
    background-color: ${props => props.backgroundcolor};
    height: 100px;
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    text-decoration: none;
    margin: 10px 10px;
`;

export const PillImage = styled.img`
    width: 60px;
`;

export const PillText = styled.p<IPillText>`
    color: ${props => props.color};
    font-size: ${props => props.textSize};
    flex: 1;
    text-align: center;
`;

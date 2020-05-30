import styled from "styled-components";
import config from "../../config";

export const CareerPillContainer = styled.div`
    background-color: ${config.colors.DARK_GREY};
    display: flex;
    border-radius: 20px;
    align-items: center;
    padding: 20px 0px;
    margin: 10px;
`;

export const Dot = styled.div`
    height: 12px;
    width: 12px;
    min-width: 12px;
    border-radius: 50%;
    background-color: ${config.colors.BLACK};
    margin: 25px;
`;

export const PillText = styled.p`
    font-size: 18px;
    color: ${config.colors.BLACK};
    margin: 0px;
    text-align: center;
`;

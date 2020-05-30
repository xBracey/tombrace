import styled from "styled-components";
import config from "../../config";
import { mobileMixin } from "../../index.styled";

export const QualificationContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px;

    ${mobileMixin(`
        flex-direction: column;
        margin: 20px 0px;
    `)}
`;

export const QualificationImage = styled.img`
    width: 100px;

    ${mobileMixin(`
        margin: 10px;
    `)}
`;

export const QualificationTextContainer = styled.div`
    flex: 1;
`;

export const QualificationText = styled.h3`
    font-size: 20px;
    text-align: center;
    margin: 2px;
`;

export const QualificationSubText = styled.h4`
    font-size: 18px;
    text-align: center;
    margin: 2px;
`;

export const QualificationSubSubText = styled.p`
    font-size: 16px;
    text-align: center;
    margin: 2px;
`;

import styled from "styled-components";
import Img from "gatsby-image";
import config from "../config";

export const Heading = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 36px;
    padding: 20px 0px;
    margin: 0px;
`;

export const SubHeading = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 26px;
    padding: 20px 0px;
    margin: 0px;
`;

export const Paragraph = styled.p`
    width: 100%;
    font-size: 18px;
    padding: 20px 0px;
    margin: 0px;
`;

export const HomeImage = styled(Img)`
    width: calc((100% / 5) * 2 - 50px);
    margin: 15px;
    border: 10px solid ${config.colors.GREY};
    border-radius: 10px;
`;

export const CareerLeft = styled.div`
    display: flex;
    width: calc((100% / 5) * 3);
    flex-direction: column;
`;

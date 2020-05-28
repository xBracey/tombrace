import styled from "styled-components";
import config from "../../config";

export const OuterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${config.colors.GREY};
`;

export const InnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
`;

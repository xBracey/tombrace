import styled from "styled-components";
import { Link } from "gatsby";
import config from "../../config";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
    background-color: ${config.colors.GREY};
`;

export const Menu = styled(Link)`
    width: 100px;
    text-align: center;
    margin: 0px 75px;
    font-size: 28px;
    text-decoration: none;
    font-weight: bold;
`;

export const Logo = styled(Link)`
    img {
        height: 100px;
        width: 100px;
    }
`;

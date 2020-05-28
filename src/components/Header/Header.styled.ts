import styled from "styled-components";
import { Link } from "gatsby";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;

export const Menu = styled(Link)`
    width: 100px;
    text-align: center;
    margin: 0px 100px;
    font-size: 24px;
    text-decoration: none;
    font-weight: bold;
`;

export const Logo = styled(Link)`
    img {
        height: 120px;
        width: 120px;
    }
`;

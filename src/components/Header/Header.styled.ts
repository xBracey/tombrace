import styled from "styled-components";
import { Link } from "gatsby";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Menu = styled.h3`
    width: 100px;
    text-align: center;
    margin: 100px;
`;

export const Logo = styled(Link)`
    img {
        height: 120px;
        width: 120px;
    }
`;

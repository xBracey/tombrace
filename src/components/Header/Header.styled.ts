import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";
import config from "../../config";
import { mobileMixin } from "../../index.styled";

interface IMenuContainer {
    menuOpen: boolean;
}

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
    background-color: ${config.colors.GREY};
    padding: 0px 50px;

    ${mobileMixin(`
        justify-content: space-between;
    `)};
`;

export const Menu = styled(Link)`
    width: 100px;
    text-align: center;
    margin: 0px 75px;
    font-size: 28px;
    text-decoration: none;
    font-weight: bold;

    ${mobileMixin(`
        width: 100%;
        margin: 25px 0px;
    `)};
`;

export const Logo = styled(Link)`
    img {
        height: 100px;
        width: 100px;
    }
`;

export const MenuImage = styled.img`
    width: 75px;
`;

export const MenuContainer = styled.div<IMenuContainer>`
    display: ${props => (props.menuOpen ? "flex" : "none")};
    z-index: 1;
    position: fixed;
    top: 160px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${config.colors.GREY};
    flex-direction: column;
`;

export const BlockScroll = createGlobalStyle`
  html, body {
    position: fixed;
    touch-action: none;
  }
`;

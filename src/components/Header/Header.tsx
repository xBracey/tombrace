import React, { useState } from "react";
import { HeaderContainer, Menu, Logo, MenuContainer, BlockScroll, MenuImage } from "./Header.styled";
import useIsDesktop from "../../lib/isDesktop";

const logoSrc = require("../../assets/logo.svg");
const Close = require("../../assets/close.svg");
const Hamburger = require("../../assets/menu.svg");

const HeaderDesktop = () => (
    <HeaderContainer>
        <Menu to={"/projects"}>Projects</Menu>
        <Logo to={"/"}>
            <img src={logoSrc} />
        </Logo>
        <Menu to={"/career"}>Career</Menu>
    </HeaderContainer>
);

const HeaderMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const onMenuClicked = () => {
        setMenuOpen(!menuOpen);
    };

    const MenuIcon = menuOpen ? Close : Hamburger;
    const BlockScrollComponent = menuOpen ? <BlockScroll /> : null;

    return (
        <>
            <HeaderContainer>
                <Logo to={"/"}>
                    <img src={logoSrc} />
                </Logo>
                <MenuImage src={MenuIcon} onClick={onMenuClicked} />
            </HeaderContainer>
            <MenuContainer menuOpen={menuOpen}>
                {BlockScrollComponent}
                <Menu to={"/projects"}>Projects</Menu>
                <Menu to={"/career"}>Career</Menu>
            </MenuContainer>
        </>
    );
};

export const Header = () => {
    const isDesktop = useIsDesktop();

    return isDesktop ? <HeaderDesktop /> : <HeaderMobile />;
};

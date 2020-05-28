import React from "react";
import { HeaderContainer, Menu, Logo } from "./Header.styled";
const logoSrc = require("../../assets/logo.svg");

export const Header = () => (
    <HeaderContainer>
        <Menu to={"/projects"}>Projects</Menu>
        <Logo to={"/"}>
            <img src={logoSrc} />
        </Logo>
        <Menu to={"/career"}>Career</Menu>
    </HeaderContainer>
);

import React from "react";
import { OuterContainer, InnerContainer } from "./Container.styled";

export const Container = ({ children }) => (
    <OuterContainer>
        <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
);

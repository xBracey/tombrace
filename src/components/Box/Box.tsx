import React from "react";
import { BoxContainer } from "./Box.styled";

interface IBoxProps {
    width: string;
}

export const Box = ({ width, children }) => <BoxContainer width={width}>{children}</BoxContainer>;

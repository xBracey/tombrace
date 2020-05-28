import React from "react";
import { PillContainer, PillImage, PillText } from "./Pill.styled";

interface IPillProps {
    image: any;
    backgroundcolor: string;
    color: string;
    text: string;
    textSize?: string;
    link: string;
}

export const Pill = ({ image, backgroundcolor, color, text, textSize = "24px", link }: IPillProps) => (
    <PillContainer backgroundcolor={backgroundcolor} href={link}>
        <PillImage src={image} />
        <PillText color={color} textSize={textSize}>
            {text}
        </PillText>
    </PillContainer>
);

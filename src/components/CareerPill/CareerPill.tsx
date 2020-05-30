import React from "react";
import { CareerPillContainer, Dot, PillText } from "./CareerPill.styled";

interface ICareerPillProps {
    text: string;
}

export const CareerPill = ({ text }: ICareerPillProps) => (
    <CareerPillContainer>
        <Dot />
        <PillText>{text}</PillText>
    </CareerPillContainer>
);

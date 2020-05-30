import React from "react";
import { QualificationContainer, QualificationImage, QualificationText, QualificationSubText, QualificationTextContainer, QualificationSubSubText } from "./Qualification.styled";

interface IQualificationProps {
    image: any;
    text: string;
    subtext: string;
    subsubtext?: string;
}

export const Qualification = ({ image, text, subtext, subsubtext }: IQualificationProps) => {
    const subsubTextComponent = !!subsubtext ? <QualificationSubSubText>{subsubtext}</QualificationSubSubText> : null;

    return (
        <QualificationContainer>
            <QualificationImage src={image} />
            <QualificationTextContainer>
                <QualificationText>{text}</QualificationText>
                <QualificationSubText>{subtext}</QualificationSubText>
                {subsubTextComponent}
            </QualificationTextContainer>
        </QualificationContainer>
    );
};

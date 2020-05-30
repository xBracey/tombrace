import React from "react";
import { SkillContainer, SkillHeader, FirstBox, Box, LastBox, SkillLevel, SkillBoxes } from "./Skill.styled";

interface ISkillProps {
    header: string;
    level: number;
}

export const Skill = ({ header, level }: ISkillProps) => {
    const boxComponent = [];
    let skillLevel = "Advanced";

    for (let index = 0; index < 2; index++) {
        boxComponent.push(<Box filled={level > index} />);
    }

    switch (level) {
        case 0:
            skillLevel = "Beginner";
            break;
        case 1:
            skillLevel = "Intermediate";
            break;
    }

    return (
        <SkillContainer>
            <SkillHeader>{header}</SkillHeader>
            <SkillBoxes>
                <FirstBox />
                {boxComponent}
                <LastBox />
            </SkillBoxes>
            <SkillLevel>{skillLevel}</SkillLevel>
        </SkillContainer>
    );
};

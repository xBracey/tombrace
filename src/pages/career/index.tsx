import React from "react";
import { Layout, Box, Skill } from "../../components";
import { Heading, Paragraph, CareerLeft } from "../index.styled";
import config from "../../config";

const CareerPage = ({ data, path }: any) => (
    <Layout title="Career">
        <Box width={"calc(100% - 80px)"}>
            <Heading>Career</Heading>
        </Box>
        <CareerLeft>
            <Box width={"calc(100% - 80px)"}>
                <Heading>Career</Heading>
            </Box>
            <Box width={"calc(100% - 80px)"}>
                <Heading>Career</Heading>
            </Box>
        </CareerLeft>
        <Box width={"calc((100% / 5) * 2 - 80px)"}>
            <Heading>Skills</Heading>
            <Skill header={"JavaScript"} level={2}></Skill>
            <Skill header={"React/React Native"} level={2}></Skill>
            <Skill header={"HTML/CSS/SASS"} level={2}></Skill>
            <Skill header={"TypeScript"} level={1}></Skill>
            <Skill header={"Wordpress"} level={1}></Skill>
            <Skill header={"PHP"} level={1}></Skill>
            <Skill header={"Gatsby/ GraphQL"} level={0}></Skill>
            <Skill header={"C#"} level={0}></Skill>
        </Box>
    </Layout>
);

export default CareerPage;

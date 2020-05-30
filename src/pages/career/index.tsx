import React from "react";
import { Layout, Box, Skill, CareerPill } from "../../components";
import { Heading, SubHeading, CareerLeft } from "../index.styled";
import config from "../../config";

const CareerPage = ({ data, path }: any) => (
    <Layout title="Career">
        <Box width={"calc(100% - 80px)"}>
            <Heading>Career</Heading>
        </Box>
        <CareerLeft>
            <Box width={"calc(100% - 80px)"}>
                <Heading>Work Experience</Heading>
                <SubHeading>Komodo Digital: July 2017 - June 2020</SubHeading>
                <CareerPill text={"Lead developer on GatsbyJS site, built using Typescript and Storybook"} />
                <CareerPill text={"Developer on cross platform react-native project.  Implemented in app subscriptions and Facebook Login."} />
                <CareerPill text={"Lead QA engineer on large PHP project and point of contact for anything related to QA, QC or testing within the company"} />
                <CareerPill text={"Solely responsible for maintaining over 6 wordpress websites each month which included performing server health checks and change requests"} />
                <CareerPill text={"Lead developer on NodeJS microservice built using Typescript, ExpressJS and Sequelize"} />
                <CareerPill text={"Developer on an ASP.NET web application and Xamarin Forms cross platform mobile app"} />
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

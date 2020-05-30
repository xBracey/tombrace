import React from "react";
import { Layout, Box, Skill, CareerPill, Qualification } from "../components";
import { Heading, SubHeading, CareerLeft, HeadingLink, CVImage } from "./index.styled";

const Document = require("../assets/document.svg");
const ISTQB = require("../assets/istqb.jpg");
const Durham = require("../assets/durham.png");
const SixthForm = require("../assets/sixthForm.png");

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
                <Heading>Qualifications</Heading>
                <Qualification image={ISTQB} text={"ISTQB® Foundation Level"} subtext={"August 2018"} />
                <Qualification image={Durham} text={"Durham University"} subtext={"September 2015 -  June 2018"} subsubtext={"BSC Computer Science 2:1"} />
                <Qualification image={SixthForm} text={"Hartlepool Sixth Form College"} subtext={"September 2013 -  June 2015"} subsubtext={"A* - Maths, A - Further Maths, A - Computing"} />
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
        <Box width={"calc(100% - 80px)"}>
            <HeadingLink href="/cv.pdf">
                Full CV <CVImage src={Document}></CVImage>
            </HeadingLink>
        </Box>
    </Layout>
);

export default CareerPage;

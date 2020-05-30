import React from "react";
import { Layout, Box, Pill } from "../components";
import { Heading, Paragraph, HomeImage } from "./index.styled";
import { graphql } from "gatsby";
import config from "../config";

const FootyBee = require("../assets/footyBee.svg");
const Linkedin = require("../assets/linkedin.png");
const Github = require("../assets/github.png");
const Gmail = require("../assets/gmail.svg");

const IndexPage = ({ data, path }: any) => (
    <Layout title="About">
        <Box width={"calc((100% / 5)*3 - 80px)"}>
            <Heading>About Me</Heading>
            <Paragraph>
                My name is Thomas Brace and I’m a software developer working for Komodo Digital in Newcastle.
                <br />
                <br />
                On this site, you will find information about me, (this is a personal site so duh!) the projects I work on and a career section.
                <br />
                <br />
                The career section basically breaks down my CV is a nicer format than the black and white PDF file I use for job applications (that is included on the page if that it is more to your
                tastes though!).
            </Paragraph>
        </Box>

        <HomeImage fluid={data.homeImage.childImageSharp.fluid} />

        <Box width={"calc((100% / 5)*3 - 80px)"}>
            <Heading>FootyBee</Heading>
            <Paragraph>
                FootyBee is a Euro 2020 football predictor. As a user, you can make football predictions, create and join leagues with your friends and you can customise the leagues. 
                <br />
                <br />
                This site is my biggest personal project to date and is inspired by my love of both football and games.
            </Paragraph>
            <Pill image={FootyBee} backgroundcolor={config.colors.GREEN} color={config.colors.WHITE} text={"footybee.com"} link={"https://footybee.com"} />
        </Box>
        <Box width={"calc((100% / 5)*2 - 80px)"}>
            <Heading>Contact</Heading>
            <Pill image={Linkedin} backgroundcolor={config.colors.WHITE} color={config.colors.LINKEDIN} text={"Tom Brace"} link={"https://www.linkedin.com/in/thomas-brace-793690131/"} />
            <Pill image={Github} backgroundcolor={config.colors.BLACK} color={config.colors.WHITE} text={"xBracey"} link={"https://github.com/xBracey/"} />
            <Pill image={Gmail} backgroundcolor={config.colors.WHITE} color={config.colors.RED} text={"thomasbrace22@gmail.com"} link={"mailto:thomasbrace22@gmail.com"} textSize={"14px"} />
        </Box>
    </Layout>
);

export const query = graphql`
    query {
        homeImage: file(relativePath: { eq: "home.JPG" }) {
            childImageSharp {
                fluid(maxWidth: 600, quality: 50) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default IndexPage;

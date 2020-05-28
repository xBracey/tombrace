import React from "react";
import { Layout, Box } from "../../components";
import { Heading, Paragraph, HomeImage } from "./index.styled";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const IndexPage = ({ data, path }: any) => (
    <Layout title="Tom Brace - Developer">
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
        </Box>
        <Box width={"calc((100% / 5)*2 - 80px)"}>
            <Heading>Contact</Heading>
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

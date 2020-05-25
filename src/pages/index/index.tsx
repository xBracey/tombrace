import React from "react";
import { Layout } from "../../components";
import { Heading, Paragraph } from "./index.styled";

const Index = props => (
    <Layout title="Tom Brace - Developer">
        <Heading>About Me</Heading>
        <Paragraph>
            My name is Thomas Brace and I’m a frontend developer working for RelateData in London. On this site, you will find my personal work which includes mainly mini projects I develop to keep
            myself entertained. I also blog about my projects and anything else that I enjoy blogging about.
        </Paragraph>
    </Layout>
);

export default Index;

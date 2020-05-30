import React from "react";
import { Layout, Box } from "../components";
import { Heading } from "../index.styled";

const Projects = ({ data, path }: any) => (
    <Layout title="Projects">
        <Box width={"calc(100% - 80px)"}>
            <Heading>Projects</Heading>
        </Box>
    </Layout>
);

export default Projects;

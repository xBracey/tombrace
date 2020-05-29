import React from "react";
import { Layout, Box, Pill } from "../../components";
import { Heading, Paragraph, HomeImage } from "../index.styled";
import config from "../../config";

const CareerPage = ({ data, path }: any) => (
    <Layout title="Career">
        <Box width={"calc(100% - 80px)"}>
            <Heading>Career</Heading>
        </Box>
    </Layout>
);

export default CareerPage;

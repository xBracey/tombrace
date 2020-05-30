import React from "react";
import { Layout, Box } from "../components";
import { Heading } from "./index.styled";

const FourOhFour = ({ data, path }: any) => (
    <Layout title="404">
        <Box width={"calc(100% - 80px)"}>
            <Heading>404 - Not Found</Heading>
        </Box>
    </Layout>
);

export default FourOhFour;

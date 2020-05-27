import styled from "styled-components";
import config from "../../config";
import Img from "gatsby-image";

export const SingleBlogContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${config.colors.BLACK};
`;

export const BlogImage = styled(Img)``;

export const BlogTitle = styled.h3``;

export const BlogExcerpt = styled.p``;

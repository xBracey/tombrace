import React from "react";
import { SingleBlogContainer, BlogImage, BlogTitle, BlogExcerpt } from "./SingleBlog.styled";
import { FluidObject } from "gatsby-image";

interface ISingleBlogProps {
    image: FluidObject;
    title: string;
    excerpt: string;
}

export const SingleBlog = ({ image, title, excerpt }: ISingleBlogProps) => (
    <SingleBlogContainer>
        <BlogImage fluid={image} />
        <BlogTitle>{title}</BlogTitle>
        <BlogExcerpt>{excerpt}</BlogExcerpt>
    </SingleBlogContainer>
);

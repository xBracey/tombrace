import React, { ReactNode } from "react";
import { OuterLayout, InnerLayout, GlobalStyle } from "./Layout.styled";
import { Header, SEO } from "../";

interface ILayoutProps {
    children: ReactNode;
    title: string;
}

export const Layout = ({ children, title }: ILayoutProps) => (
    <>
        <Header />
        <OuterLayout>
            <InnerLayout>
                <SEO title={title} />
                <GlobalStyle />
                {children}
            </InnerLayout>
        </OuterLayout>
    </>
);

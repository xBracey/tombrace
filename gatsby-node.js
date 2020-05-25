const contentStyledRegex = /.*\/.*(content|styled).ts/;

exports.onCreatePage = ({ page, actions }) => {
    const { deletePage, createPage } = actions;

    // if the page component is the index page component
    if (page.componentPath === `${__dirname}/src/pages/index/index.tsx`) {
        deletePage(page);

        // create a new page but with '/' as path
        createPage({
            ...page,
            path: "/"
        });
    }

    if (page.componentPath.match(contentStyledRegex)) {
        deletePage(page);
    }
};

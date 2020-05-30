const contentStyledRegex = /.*(content|styled).ts/;

exports.onCreatePage = ({ page, actions }) => {
    const { deletePage } = actions;

    if (page.componentPath.match(contentStyledRegex)) {
        deletePage(page);
    }
};

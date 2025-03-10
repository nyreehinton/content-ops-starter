function cssClassesFromUrlPath(urlPath) {
    const parts = urlPath
        .replace(/^\/|\/$/g, '')
        .split('/')
        .filter(Boolean);

    let css = 'page';
    return parts.map((part) => {
        css += `-${part}`;
        return css;
    });
}

function getPageUrl(page) {
    if (!page || !page.__metadata) {
        console.error('🚨 Error: Missing metadata in getPageUrl', page);
        return '/error';
    }

    const { modelName, slug } = page.__metadata;
    const fileSlug = page.slug || slug;

    console.log(`🔍 Getting URL for page:`, {
        modelName,
        slug: fileSlug,
        metadata: page.__metadata,
        filename: page.__metadata.id
    });

    if (!modelName) {
        console.warn('⚠️ Warning: Missing modelName, using default', page);
        return '/default-page';
    }

    if (!fileSlug) {
        console.warn('⚠️ Warning: Page missing slug', page);
        return '/error';
    }

    // Handle index/home page
    if (fileSlug === 'index' || fileSlug === 'home') {
        console.log('🏠 Detected home page');
        return '/';
    }

    // Handle blog posts
    if (modelName === 'PostLayout' || (page.__metadata && page.__metadata.id && page.__metadata.id.includes('/blog/'))) {
        const blogPath = `/blog${fileSlug.startsWith('/') ? fileSlug : `/${fileSlug}`}`;
        console.log(`📝 Generated blog URL: ${blogPath}`);
        return blogPath;
    }

    // Handle regular pages
    const pagePath = fileSlug.startsWith('/') ? fileSlug : `/${fileSlug}`;
    console.log(`📄 Generated page URL: ${pagePath}`);
    return pagePath;
}

function setEnvironmentVariables() {
    return {
        ...(process?.env?.URL && { URL: process.env.URL })
    };
}

module.exports = {
    cssClassesFromUrlPath,
    getPageUrl,
    setEnvironmentVariables
};

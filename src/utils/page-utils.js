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
        console.error("🚨 Error: Missing metadata in getPageUrl", page);
        return "/error"; // Safe fallback
    }

    const { modelName, slug } = page.__metadata;

    if (!slug) {
        console.warn("⚠️ Warning: Page missing slug", page);
        return "/error";
    }

    if (modelName === "PostLayout") {
        return `/blog${slug.startsWith('/') ? slug : `/${slug}`}`;
    }

    return slug.startsWith('/') ? slug : `/${slug}`;
}

function setEnvironmentVariables() {
  return {
    ...(process?.env?.URL && { URL: process.env.URL }),
  }
}


module.exports = {
    cssClassesFromUrlPath,
    getPageUrl,
    setEnvironmentVariables
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://nyreehinton.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'], // exclude server-side sitemap
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://nyreehinton.com/server-sitemap.xml' // if you want to add a server-side sitemap later
        ]
    }
};

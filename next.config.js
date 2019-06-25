const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withImages = require('next-images');

const nextConfig = {
    distDir: 'build',
    exportPathMap: () => ({
        '/': { page: '/' },
        '/skills': { page: '/skills' },
        '/experiences': { page: '/experiences' },
        '/projects': { page: '/projects' },
    }),
};

module.exports = withPlugins(
    [[withCss], [withPurgeCss], [withImages]],
    nextConfig,
);

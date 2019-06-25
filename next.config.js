const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withImages = require('next-images');

const debug = process.env.NODE_ENV !== 'production';

module.exports = withCss(
    withPurgeCss(
        withImages({
            exportPathMap: () => ({
                '/': { page: '/' },
            }),
            assetPrefix: !debug ? '/portfolio' : '',
            env: {
                BACKEND_URL: debug ? '' : '/portfolio',
            },
        }),
    ),
);

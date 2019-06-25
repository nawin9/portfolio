const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withImages = require('next-images');
const compose = require('next-compose');

const debug = process.env.NODE_ENV !== 'production';

// module.exports = compose([
//     [withCss, {}],
//     [withPurgeCss, {}],
//     [withImages, {}],
//     {
//         exportPathMap() {
//             return {
//                 '/': { page: '/' },
//                 '/portfolio': { page: '/portfolio' },
//             };
//         },
//         assetPrefix: !debug ? 'https://nawin9.github.io/portfolio/' : '',
//     },
//     {
//         env: {
//             BACKEND_URL: debug ? '' : '/portfolio',
//         },
//     },
// ]);

module.exports = withCss(
    withPurgeCss(
        withImages({
            exportPathMap: () => ({
                '/': { page: '/' },
                '/portfolio': { page: '/portfolio' },
            }),
            assetPrefix: !debug ? 'https://nawin9.github.io/portfolio/' : '',
            env: {
                BACKEND_URL: debug ? '' : '/portfolio',
            },
        }),
    ),
);

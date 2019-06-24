const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withImages = require('next-images');

module.exports = withCss(withPurgeCss(withImages()));

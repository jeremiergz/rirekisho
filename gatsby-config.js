require('dotenv/config');
const path = require('path');
const personalDetailsJSON = require('./content/data/personal-details/index.json');
const themeJSON = require('./content/theme/index.json');
const packageJSON = require('./package.json');

const { author, description, homepage, keywords, license, name, repository, version } = packageJSON;
const appColor = themeJSON.colors.light.primary;
const appName = `${name.charAt(0).toUpperCase()}${name.substring(1, name.length)}`;
const authorName = personalDetailsJSON.fullName;
const twitterUsername = personalDetailsJSON.twitterUsername;

module.exports = {
  siteMetadata: {
    appName,
    author,
    description,
    keywords,
    license,
    repository,
    siteUrl: homepage,
    title: authorName,
    twitterUsername,
    version,
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        cookieDomain: process.env.GOOGLE_ANALYTICS_COOKIE_DOMAIN,
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        display: 'swap',
        fonts: ['Baloo+Bhaina+2:700', 'Open+Sans:400,600,600i,800,800i'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: appColor,
        display: 'standalone',
        icon: 'logo.png',
        name: `${authorName} - ${appName}`,
        short_name: appName,
        start_url: '/',
        theme_color: appColor,
      },
    },
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        allExtensions: true,
        isTSX: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'theme',
        path: `${__dirname}/content/theme`,
      },
    },
  ],
};

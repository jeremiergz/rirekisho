const personalDetailsJSON = require('./content/data/personal-details.json');
const packageJSON = require('./package.json');

const { author, description, homepage, keywords, license, name, repository, version } = packageJSON;
const appName = `${name.charAt(0).toUpperCase()}${name.substring(1, name.length)}`;
const authorName = personalDetailsJSON.fullName;
const twitterUsername = personalDetailsJSON.twitterUsername;

module.exports = {
  env: {
    APP_NAME: appName,
    APP_AUTHOR: author,
    APP_DESCRIPTION: description,
    APP_KEYWORDS: keywords.join(','),
    APP_LICENSE: license,
    APP_REPOSITORY_URL: repository.url.replace(/git\+|\.git/g, ''),
    APP_SITE_URL: homepage,
    APP_TITLE: authorName,
    APP_TWITTER_USERNAME: twitterUsername,
    APP_VERSION: version,
  },
  poweredByHeader: false,
};

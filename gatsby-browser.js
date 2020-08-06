const React = require('react');
const { ThemeProvider } = require('styled-components');
const theme = require('./src/theme').default;

exports.onServiceWorkerUpdateReady = () => {
  window.location.reload(true);
};

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

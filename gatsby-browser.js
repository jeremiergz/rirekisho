const { default: ThemeProvider } = require('components/providers/ThemeProvider');
const React = require('react');

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};

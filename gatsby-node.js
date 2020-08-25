exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    # Declare common Theme interface to allow use of fragments
    interface ThemeColors {
      background: String
      body1: String
      body2: String
      caption: String
      dark: String
      error: String
      info: String
      primary: String
      secondary: String
      subtitle: String
      success: String
      text: String
      white: String
    }
    type ThemeJsonColorsDark implements ThemeColors
    type ThemeJsonColorsLight implements ThemeColors
  `;
  createTypes(typeDefs);
};

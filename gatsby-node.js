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
    interface ThemeFontWeights {
      bold: Int
      bolder: Int
      regular: Int
    }
    interface ThemeFonts {
      main: String
      title: String
    }
    interface Theme {
      colors: ThemeColors
      fontWeights: ThemeFontWeights
      fonts: ThemeFonts
    }
    type ThemeJsonDarkColors implements ThemeColors
    type ThemeJsonDarkFontWeights implements ThemeFontWeights
    type ThemeJsonDarkFonts implements ThemeFonts
    type ThemeJsonDark implements Theme
    type ThemeJsonLightColors implements ThemeColors
    type ThemeJsonLightFontWeights implements ThemeFontWeights
    type ThemeJsonLightFonts implements ThemeFonts
    type ThemeJsonLight implements Theme
  `;
  createTypes(typeDefs);
};

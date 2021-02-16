export declare global {
  declare module Theme {
    type Colors = {
      background: string;
      body1: string;
      body2: string;
      caption: string;
      dark: string;
      error: string;
      info: string;
      primary: string;
      secondary: string;
      subtitle: string;
      success: string;
      text: string;
      white: string;
    };

    type Data = {
      colors: Colors;
      fonts: Fonts;
      fontWeights: FontWeights;
    };

    type Fonts = {
      main: string;
      title: string;
    };

    type FontWeights = {
      bold: number;
      bolder: number;
      regular: number;
    };

    type Type = 'dark' | 'light';
  }
}

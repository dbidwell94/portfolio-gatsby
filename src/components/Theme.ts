import { DefaultTheme } from 'styled-components';

export const theme = {
  colors: {
    background: '#121212',
    primary: '#BB86FC',
    primaryv2: '#3700B3',
    secondary: '#03DAC6',
    white: (amount: number) => {
      amount = Math.min(Math.max(amount, 16), 255);
      return '#ffffff' + amount.toString(16);
    },
  },
  fonts: {
    ubuntu: "'Ubuntu', sans-serif",
    ubuntuMono: "'Ubuntu-mono', monospace",
  },
  breakpoints: {
    smallLaptop: '1440px',
    laptop: '1200px',
    mobile: '750px',
    largeMobile: '900px',
  },
};

type ITheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

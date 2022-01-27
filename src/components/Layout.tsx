import React from 'react';
import { createGlobalStyle, default as styled, ThemeProvider } from 'styled-components';

/// @ts-ignore
import Ubuntu from '../assets/fonts/Ubuntu/Ubuntu-Regular.ttf';
/// @ts-ignore
import UbuntuMono from '../assets/fonts/Ubuntu_Mono/UbuntuMono-Regular.ttf';
import { theme } from './Theme';

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Ubuntu';
        src: url(${Ubuntu});
    }

    @font-face {
        font-family: 'Ubuntu-mono';
        src: url(${UbuntuMono});
    }
`;

const MeyersReset = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

const GlobalStyle = createGlobalStyle`
    html {
        width: 100vw;
        height: 100%;
    }

    * {
        max-width: 100%;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, p, small, link, button, a {
        font-family: 'Ubuntu', sans-serif;
        color: white;
    };

    p, link, button, a {
        font-size: 1.25rem;
    }

    small {
        font-size: 1.15rem;
    }

    h1, h2 {
        font-size: 2.75rem;
    }

    h3, h4, h5, h6 {
        font-size: 2.25rem;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
    }
`;

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

interface ILayoutProps {
  pageTitle?: string;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children, pageTitle } = props;
  return (
    <>
      <ThemeProvider theme={theme}>
        {pageTitle && <title>{pageTitle}</title>}
        <MeyersReset />
        <GlobalStyle />
        <Fonts />
        <GlobalContainer>{children}</GlobalContainer>
      </ThemeProvider>
    </>
  );
};

export default Layout;

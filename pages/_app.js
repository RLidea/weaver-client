import { useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '@theme';

// https://nextjs.org/docs/advanced-features/custom-app

function MyApp({ Component, pageProps }) {
  // remove the server-side generated CSS after injecting CSS on the client side
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* by default, Material-UI's styles are injected last in the <head> element of the page */}
      {/* if `injectFirst` prop is set, Material-UI's styles are injected first so it can be overridden */}
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            {/* reset css globally (similar with normalize.css) */}
            <CssBaseline />
            <Component {...pageProps} />
          </StyledThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

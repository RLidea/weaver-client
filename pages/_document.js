import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MuiServerStyleSheet } from '@material-ui/core/styles';
import theme from '@theme';

// https://nextjs.org/docs/advanced-features/custom-document
// https://material-ui.com/guides/server-rendering/
// https://styled-components.com/docs/advanced#server-side-rendering

class MyDocument extends Document {
  // `getInitialProps`: expressing asynchronous server-rendering data requirements
  // not called during client-side transitions, nor when a page is statically optimized
  static async getInitialProps(ctx) {
    const styledSheet = new StyledServerStyleSheet();
    const muiSheet = new MuiServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // `renderPage`: a callback function that runs the actual React rendering logic (synchronously)
      // decorate this function in order to support server-rendering
      ctx.renderPage = () => originalRenderPage({
        // `enhanceApp`: wrapping the whole react tree
        // `collectStyles`, `collect`: collect the style sheets during the rendering so they can be later sent to the client
        enhanceApp: (App) => (props) => styledSheet.collectStyles(
          muiSheet.collect(<App {...props} />),
        ),
      });

      // run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/* `getStyleElement()`: alternative to `toString()` when you are rendering the whole page with React */}
            {muiSheet.getStyleElement()}
            {/* `getStyleElement()`: alte/rnative to `getStyleTags()` that returns an array of React elements */}
            {styledSheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      styledSheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

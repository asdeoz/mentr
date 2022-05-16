import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

import Layout from '../src/components/layout';

import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  const hideHeader = Component.hideHeader || false;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:title" content="Mentr" key="title" />
        <title>Mentr</title>
      </Head>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Layout hideHeader={hideHeader}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp

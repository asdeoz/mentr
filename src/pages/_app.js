import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import { MentrContextProvider } from '../context';

import Layout from '../components/layout';

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
      <MentrContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout hideHeader={hideHeader}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </MentrContextProvider>
    </CacheProvider>
  );
}

export default MyApp

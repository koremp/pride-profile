import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Auth } from '@supabase/ui';
import { AppProps } from 'next/app.js';
import Head from 'next/head.js';
import { RecoilRoot } from 'recoil';


import theme from 'src/theme';
import createEmotionCache from 'src/createEmotionCache';
import { supabase } from '../lib/initSupabase.js';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache} >
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Auth.UserContextProvider supabaseClient={supabase}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Auth.UserContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

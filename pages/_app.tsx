import { Auth } from '@supabase/ui';
import { supabase } from '../lib/initSupabase.js';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </Auth.UserContextProvider>
  );
}

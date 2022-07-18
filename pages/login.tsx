import { Auth } from '@supabase/ui';
import { supabase } from '../lib/initSupabase.js';

export default function LoginPage(): JSX.Element {
  const { user } = Auth.useUser();

  return (
    <div>
      {!user ? (
        <div>
          <div>
            <Auth
              supabaseClient={supabase}
              // providers={['google', 'github']}
              socialLayout="horizontal"
              socialButtonSize="xlarge"
              magicLink
            />
          </div>
        </div>
      ) : (
        <div
          style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
        >
          <button
            type="button"
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              if (error) console.log('Error logging out:', error.message);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

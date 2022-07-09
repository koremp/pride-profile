import { Button } from '@supabase/ui';
import Link from 'next/link';

export default function IndexPage() {
  return (
    <div className="w-full h-full bg-gray-300">
      <h1>Pride Profile</h1>
      <p>Create Your Own Pride Profile!</p>
      <Button>
        <Link href='/'>
          Sign In
        </Link>

      </Button>
      <Button>
        Create Profile
      </Button>
    </div>
  )
}
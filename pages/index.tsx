import Link from 'next/link';

export default function Index(): JSX.Element {
  return (
    <div>
      <h1>Pride Profile</h1>
      <Link href="/create-profile">
        <p>create-profile</p>
      </Link>
      <Link href="/login">
        <p>login</p>
      </Link>
    </div>
  );
}

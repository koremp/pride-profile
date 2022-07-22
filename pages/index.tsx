import Link from 'next/link';

export default function IndexPage(): JSX.Element {
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

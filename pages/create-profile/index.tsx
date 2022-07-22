import Link from 'next/link';

export default function IndexPage(): JSX.Element {
  return (
    <div>
      <h1>select profile to create</h1>
      <Link href="/create-profile/pride">
        <p>Pride Profile</p>
      </Link>
      {/* <Link href="/create-profile/etc">
            <p>login</p>
          </Link> */}
    </div>
  );
}

import Link from 'next/link';

export default function CreateProfile(): JSX.Element {
  return (
    <div>
      <h1>Create Profile</h1>
      <h2>Select Profile to Create</h2>
      <Link href="/create-profile/pride">
        <p>Pride Profile</p>
      </Link>
      <Link href="/create-profile/sexual">
        <p>Sexual Profile</p>
      </Link>
    </div>
  );
}

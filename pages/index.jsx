import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  const navigateToNote = () => {
    router.push('/notes/[id]', `/notes/${4}`);
  };

  return (
    <div>
      <button onClick={navigateToNote}>vai pra nota 4</button>
      <h1>minha home</h1>
      <Link href="/notes">
        <a>Notes page link</a>
      </Link>
      <Link href="/notes/[id]" as={`/notes/1`}>
        <a>Notes page link com id</a>
      </Link>
    </div>
  );
}

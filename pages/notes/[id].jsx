import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  return <div> Minha nota {router.query.id}</div>;
}

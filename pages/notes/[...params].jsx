import React from 'react';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  const { params } = router.query;

  console.log(params);
  return <div>teste simples</div>;
}

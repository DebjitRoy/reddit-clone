'use client';

import { useSession } from 'next-auth/react';
export default function Profile() {
  const session = useSession();

  return session.data?.user ? (
    <>From client: User is signed in {session.data?.user.id}</>
  ) : (
    <>From client: </>
  );
}

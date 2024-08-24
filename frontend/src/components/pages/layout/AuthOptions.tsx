'use client';

import { deleteCookie } from 'cookies-next';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function AuthOptions() {
  const router = useRouter();
  const [error, setError] = React.useState('');
  const onLogout = async () => {
    try {
      deleteCookie('pb_auth');
      localStorage.clear();
      router.refresh();
    } catch (err) {
      setError('Failed to log out');
    }
  };

  return (
    <div>
      <Button variant="destructive" onClick={onLogout}>Log out</Button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

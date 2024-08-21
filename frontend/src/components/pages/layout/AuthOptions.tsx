'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export default function AuthOptions() {
  return (
    <Button variant="ghost" className="w-full" onClick={() => signOut()}>
      Cerrar sesión
    </Button>
  );
}

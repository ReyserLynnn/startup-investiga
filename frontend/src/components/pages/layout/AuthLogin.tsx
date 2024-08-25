'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AuthLogin() {
  return (
    <div className="justify-end hidden md:flex gap-2 ml-auto md:ml-3">
      <Button variant="linkHover2">
        <Link href="/login">Iniciar Sesión</Link>
      </Button>

      <Button variant="shine">
        <Link href="/register">Crear una cuenta</Link>
      </Button>
    </div>
  );
}

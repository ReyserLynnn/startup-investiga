'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function LoginBox() {
  const route = useRouter();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [error, setError] = React.useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const form = { email, password };
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        setError('Failed to authenticate user');
        return;
      }
      const data = await response.json();
      if (data?.token) {
        route.replace('/');
        route.refresh();
      } else {
        setError('Failed to authenticate user');
      }
    } catch (err) {
      setEmail('Failed to authenticate user');
    }
  };

  return (
    <div className="w-full flex flex-col gap-10 md:max-w-lg absolute bottom-0 md:right-8 h-full max-h-[55rem] bg-background rounded-t-3xl px-8 py-16 shadow-all">
      <header className="w-full flex justify-between items-start">
        <span className="text-xl">
          <span>
            Bienvenido a
            {' '}
          </span>
          <span className="font-semibold text-primary">
            INVEZTIGA
          </span>
        </span>
        <Link href="/register" className="flex flex-col text-sm">
          <span className="text-muted-foreground">
            ¿No tienes una cuenta ?
          </span>
          <span className="text-primary">
            Registrate
          </span>
        </Link>
      </header>
      <h1 className="font-medium text-4xl md:text-5xl text-center w-full">
        INICIO DE SESIÓN
      </h1>
      <button
        onClick={() => signIn('google')}
        type="button"
        className="w-full rounded-lg bg-primary/20 text-primary-background py-4"
      >
        Iniciar sesión con Google
      </button>

      <form action="" className="flex flex-col gap-8" onSubmit={onSubmit}>
        <Label className="flex flex-col gap-2 font-normal text-base">
          <span>
            Ingresa tu correo electrónico
          </span>
          <Input
            type="email"
            placeholder="Correo electrónico"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value || '')}
          />
        </Label>
        <Label className="flex flex-col gap-2 font-normal text-base">
          <span>
            Ingresa tu contraseña
          </span>
          <Input
            type="password"
            placeholder="Contraseña"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value || '')}
          />
        </Label>
        <Button type="submit" size="lg" variant="secondary">
          Iniciar sesión
        </Button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

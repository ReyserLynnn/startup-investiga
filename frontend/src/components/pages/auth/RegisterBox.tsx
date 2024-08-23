'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

import { useRouter } from 'next/navigation';
import GoogleButton from './GoogleButton';

export default function RegisterBox() {
  const route = useRouter();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [error, setError] = React.useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const form = { email, password };
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setError('Failed to register user');
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
      setEmail('Failed to register user');
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
        <Link href="/login" className="flex flex-col text-sm">
          <span className="text-muted-foreground">
            ¿Ya tienes una cuenta ?
          </span>
          <span className="text-primary">
            Iniciar Sesión
          </span>
        </Link>
      </header>
      <h1 className="font-medium text-4xl md:text-5xl text-center w-full">
        REGISTRO
      </h1>

      <GoogleButton />

      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <Label className="flex flex-col gap-2 font-normal text-base">
          <span>
            Ingresa tu correo electrónico
          </span>
          <Input
            placeholder="Correo electrónico"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value || '')}
          />
        </Label>
        {/*
        <div className="flex gap-8">
          <Label className="w-full">
            <span>Nombre de usuario</span>
            <Input type="text" placeholder="Nombre" />
          </Label>
          <Label className="w-full">
            <span>Teléfono</span>
            <Input type="text" placeholder="Teléfono" />
          </Label>
        </div>
        */}

        <Label className="flex flex-col gap-2 font-normal text-base">
          <span>
            Ingresa tu contraseña
          </span>
          <Input
            placeholder="Contraseña"
            type="password"
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

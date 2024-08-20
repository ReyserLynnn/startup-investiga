'use client';

import { CustomLink } from '@/components/ui/CustomLink';

export function Login() {
  return (
    <>
      <CustomLink href="/login" variant="ghost">
        Iniciar sesión
      </CustomLink>
      <CustomLink href="/register">
        Crear una cuenta
      </CustomLink>
    </>
  );
}

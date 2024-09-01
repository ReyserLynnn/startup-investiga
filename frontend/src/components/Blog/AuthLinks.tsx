/* eslint-disable react/jsx-no-useless-fragment */
import Link from 'next/link';

export default function AuthLinks() {
  const status = 'notauthenticated';

  return (
    <>
      {status === 'notauthenticated' ? (
        <Link href="/login" className="cursor-pointer">
          Iniciar Sesión
        </Link>
      ) : (
        <>
          <Link href="/write" className="cursor-pointer">
            Escribir
          </Link>
          <span className="cursor-pointer">Cerrar Sesión</span>
        </>
      )}
    </>
  );
}

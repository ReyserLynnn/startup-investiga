import BackgroundPage from '@/components/pages/auth/BackgroundPage';
import RegisterBox from '@/components/pages/auth/RegisterBox';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Session } from 'inspector';
import { authConfig } from '../api/auth/[...nextauth]/authConfig';

export default async function RegisterPage() {
  const session = await getServerSession(authConfig) as Session & { user: { service: any } };

  if (session) {
    redirect('/');
  }

  return (
    <BackgroundPage
      h1="Registro de usuario"
      h2="Únete a INVESTIGA y descubre el poder de la ciencia colaborativa."
      h3="El conocimiento compartido es la clave del progreso científico. Regístrate en INVESTIGA"
      h4="y accede a una red de expertos que pueden transformar tu investigación en innovación."
    >
      <RegisterBox />
    </BackgroundPage>
  );
}

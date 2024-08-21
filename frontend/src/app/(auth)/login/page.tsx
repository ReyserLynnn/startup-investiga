import BackgroundPage from '@/components/pages/auth/BackgroundPage';
import LoginBox from '@/components/pages/auth/LoginBox';
import { getServerSession, Session } from 'next-auth';
import { redirect } from 'next/navigation';
import { authConfig } from '@/app/api/auth/[...nextauth]/authConfig';

export default async function LoginPage() {
  const session = await getServerSession(authConfig) as Session & { user: { service: any } };

  if (session) {
    redirect('/');
  }

  return (
    <BackgroundPage
      h1="Iniciar Sesión"
      h2={'"Impulsando la ciencia a través del conocimiento compartido."'}
      h3="¿Sabías que el 85% de los descubrimientos científicos más innovadores surgen de colaboraciones interdisciplinarias?"
      h4="En INVESTIGA, conectamos mentes brillantes para llevar tu investigación al siguiente nivel."
    >
      <LoginBox />
    </BackgroundPage>
  );
}

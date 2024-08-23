import BackgroundPage from '@/components/pages/auth/BackgroundPage';
import RegisterBox from '@/components/pages/auth/RegisterBox';

export default async function RegisterPage() {
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

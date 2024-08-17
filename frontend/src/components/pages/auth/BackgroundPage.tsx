import { User } from 'lucide-react';
import Link from 'next/link';

export default function BackgroundPage({
  children, h1, h2, h3, h4,
}: { children: React.ReactNode, h1: string, h2: string, h3: string, h4: string }) {
  return (
    <main className="flex-1 flex flex-col w-full relative">
      <section className="flex w-full bg-primary-background flex-1 p-10 max-h-[50vh] pr-8 gap-8">
        <div className="w-full hidden md:flex flex-col xl:flex-row justify-center">
          <div className="flex-1 flex flex-col items-start justify-start gap-4 xl:gap-8 max-w-xl">
            <Link className="px-5 py-4 rounded-lg bg-background flex flex-col" href="/">
              <img src="/logo.svg" alt="" className="w-64 h-auto" />
              <span className="sr-only">Inveztiga</span>
            </Link>
            <div className="text-background flex flex-col gap-4">
              <h1 className="text-4xl font-bold">
                {h1}
              </h1>
              <p className="text-2xl xl:text-3xl">
                {h2}
              </p>
              <p className="text-lg w-full max-w-md hidden xl:block">
                <span className="font-bold">
                  {h3}
                </span>
                {' '}
                {h4}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end w-60 xl:w-80 xl:py-10 items-center">
            <img src="/undraw/education.svg" alt="education" className="w-full" />
          </div>
        </div>
        <div className="w-full max-w-2xl" />
      </section>
      <section className="w-full flex bg-background flex-1 p-10 pr-8 gap-8">
        <div className="w-full hidden md:flex flex-col items-center justify-start gap-8">
          <h2 className="text-center text-3xl font-semibold">
            Que dicen nuestros alumnos
          </h2>
          <div className="flex items-center justify-center gap-10">
            <div className="w-full max-w-md p-8 shadow-xl gap-8 flex flex-col">
              <p className="text-lg text-muted-foreground">
                &quot;Los cursos de Investiga transformaron mi
                enfoque hacia la investigación. Ahora me
                siento más seguro y preparado para mis
                proyectos académicos&quot;
              </p>
              <div className="flex w-full gap-4">
                <User className="w-12 h-12 text-background bg-primary p-1 rounded-full" />
                <div className="flex-1 flex-col flex items-start justify-center">
                  <span className="font-bold">
                    Diego R.
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Estudiante de Quimica
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md p-8 shadow-xl gap-8 hidden xl:flex flex-col">
              <p className="text-lg text-muted-foreground">
                &quot;La calidad y la precisión de los cursos son
                excepcionales. En solo unas semanas, he
                aprendido técnicas que antes me parecían
                complicadas&quot;
              </p>
              <div className="flex w-full gap-4">
                <User className="w-12 h-12 text-background bg-primary p-1 rounded-full" />
                <div className="flex-1 flex-col flex items-start justify-center">
                  <span className="font-bold">
                    Diego R.
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Estudiante de Quimica
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-2xl" />
      </section>
      {
        children
      }
    </main>
  );
}

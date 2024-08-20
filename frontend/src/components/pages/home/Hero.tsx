import { HeroImg } from './HeroImg';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#f5c996]  to-[#fc9d4c] text-transparent bg-clip-text">
              Descubre
            </span>
            {' '}
            y Aumenta tu
          </h1>
          {' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Potencial Científico
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Impulsa tu carrera con nuestros cursos de investigación científica en vivo, diseñados por docentes de excelencia.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Empezar</Button>
        </div>
      </div>

      <div className="z-10">
        <HeroImg />
      </div>

      <div className="shadow" />
    </section>
  );
}

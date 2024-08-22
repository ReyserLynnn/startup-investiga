import { Button } from '@/components/ui/button';
import { HeroImg } from './HeroImg';

export function Hero() {
  return (
    <header className="relative bg-white overflow-hidden">
      <div className="relative container mx-auto py-24 lg:grid grid-cols-2 gap-x-8 xl:gap-x-16 items-center px-4 sm:px-6 lg:px-8 md:py-20 overflow-x-hidden">
        <div className=" flex flex-col text-center lg:text-start space-y-6 items-center md:items-start">
          <div className="items-center text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#f5c996]  to-[#fc9d4c] text-transparent bg-clip-text">
                Descubre
              </span>
              {' '}
              y Aumenta tu
              {' '}
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Potencial Científico
              </span>
            </h1>
          </div>

          <p className="text-base lg:text-lg xl:text-xl text-muted-foreground tracking-prose mb-9">
            Impulsa tu carrera con nuestros cursos de investigación científica
            en vivo, diseñados por docentes de excelencia.
          </p>

          <Button className="gap-3 w-full lg:w-1/3 group/btn">
            Empezar

            <div className="flex items-center opacity-50 group-hover/btn:opacity-100 transition-opacity ">
              <svg role="img" viewBox="0 0 16 16" fill="currentColor" className="w-0 group-hover/btn:w-2.5 h-2.5 -mr-2.5 ease-out duration-200 transition-all transform-gpu">
                <path d="M1 9h14a1 1 0 000-2H1a1 1 0 000 2z" />
              </svg>
              <svg role="img" viewBox="0 0 16 16" fill="currentColor" className="size-2.5">
                <path d="M7.293 1.707L13.586 8l-6.293 6.293a1 1 0 001.414 1.414l7-7a.999.999 0 000-1.414l-7-7a1 1 0 00-1.414 1.414z" />
              </svg>
            </div>
          </Button>
        </div>

        <HeroImg />
      </div>

      {/* problem width page, se desborda y queda feo
      <div className="shadow" />
      */}
    </header>
  );
}

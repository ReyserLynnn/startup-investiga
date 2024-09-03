import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { HeroImg } from './HeroImg';

export function HeroAntes() {
  return (
    <header className="relative bg-white overflow-hidden">
      <div className="relative container mx-auto py-24 lg:grid grid-cols-2 gap-x-8 xl:gap-x-16 items-center px-4 sm:px-6 lg:px-8 md:py-20 overflow-x-hidden">
        <div className=" flex flex-col text-center lg:text-start space-y-6 items-center md:items-start">
          <div className="items-center text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#f5c996]  to-[#fc9d4c] text-transparent bg-clip-text">
                Descubre
              </span>{' '}
              y Aumenta tu{' '}
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Potencial Científico
              </span>
            </h1>
          </div>

          <p className="text-base lg:text-lg xl:text-xl text-muted-foreground tracking-prose mb-9">
            Impulsa tu carrera con nuestros cursos de investigación científica
            en vivo, diseñados por docentes de excelencia.
          </p>

          <Button
            className="w-full lg:w-1/3"
            variant="expandIcon"
            Icon={ArrowRightIcon}
            iconPlacement="right"
          >
            Empezar
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

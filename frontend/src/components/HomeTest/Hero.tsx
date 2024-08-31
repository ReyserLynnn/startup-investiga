import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { Cover } from '../ui/Cover';
import { FlipWords } from '../ui/flip-words';
import { OrbitingCirclesDemo } from './OrbitingCirclesDemo';

export function HeroTest() {
  const words = [
    'Descubre',
    'Mejora',
    'Descubre',
    'Transforma',
    'Expande',
    'Avanza',
  ];

  return (
    <header className="relative bg-white overflow-hidden">
      <div className="relative container mx-auto xl:py-32 pb-0 pt-24 flex flex-col px-4 sm:px-6 lg:px-8 lg:py-20 overflow-x-hidden lg:flex-row">
        <div className="lg:w-[65%] flex flex-col gap-8 ">
          <h1 className="text-5xl sm:text-6xl font-semibold text-center lg:text-left dark:via-white dark:to-white">
            <span className="inline bg-gradient-to-r from-[#f5c996] to-[#fc9d4c] text-transparent bg-clip-text">
              <FlipWords words={words} />
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800">
              y Aumenta tu <br />
            </span>
            <Cover className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Potencial Científico
            </Cover>
          </h1>

          <p className="text-base lg:text-lg xl:text-xl text-muted-foreground self-center lg:self-start w-[70%] text-center lg:text-left ">
            Impulsa tu carrera con nuestros cursos de investigación científica
            en vivo, diseñados por docentes de excelencia.
          </p>

          <Button
            className="w-full sm:w-1/3 self-center lg:self-start"
            variant="expandIcon"
            Icon={ArrowRightIcon}
            iconPlacement="right"
          >
            Empezar
          </Button>
        </div>

        <div className="lg:w-[35%] justify-center items-center z-50 hidden lg:flex">
          <OrbitingCirclesDemo />
        </div>
      </div>

      <div className="lg:hidden flex justify-center items-center mt-8">
        <OrbitingCirclesDemo />
      </div>
    </header>
  );
}

import Image from 'next/image';
import { Button } from '../ui/button';

export default function Featured() {
  return (
    <section className="mt-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
        <b className="font-bold">Inveztiga aquí.</b> Descubre las últimas
        herramientas de IA
      </h1>
      <div className="mt-14 flex items-center gap-12">
        <div className="hidden md:flex relative flex-1 h-[500px] w-auto">
          <Image src="/blog/p1.jpeg" alt="hola" className="object-cover" fill />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hola me llamo reyser
          </h1>
          <p className="text-xl font-light">
            Soy un desarrollador de software, me gusta compartir mis
            conocimientos y experiencias en el mundo de la programación.
          </p>
          <Button className="px-4 py-5 w-max">Ver más</Button>
        </div>
      </div>
    </section>
  );
}

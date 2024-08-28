import { Button } from '@/components/ui/button';
import { ShoppingCart, Timer, Users, Video } from 'lucide-react';
import Image from 'next/image';

export default function NotCourseCard() {
  return (
    <div className="relative bg-white shadow-sm rounded-lg overflow-hidden w-full max-w-xs flex flex-col">
      <div className="relative w-full h-44">
        <div className="absolute w-full h-full bg-black opacity-50 z-10" />
        <Image
          src="/img/notice1.webp"
          alt="Imagen del curso"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover blur-sm"
        />
      </div>

      <div className="flex flex-col gap-2 p-3 flex-1">
        <h2 className="text-base font-semibold">---</h2>

        <div className="flex flex-row gap-2 text-xs text-gray-500 justify-between mt-auto">
          <span className="flex flex-row gap-1 items-center">
            <Timer size="14" />
            Duración
          </span>
          <span className="flex flex-row gap-1 items-center">
            <Video size="14" />
            sesiones
          </span>
          <span className="flex flex-row gap-1 items-center relative lg:hidden xl:flex">
            <Users size="14" />
            alumnos
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mt-auto p-3">
        <Button
          className="text-xs h-7 rounded-lg px-2 bg-secondary"
          variant="expandIcon"
          disabled
          Icon={ShoppingCart}
          iconPlacement="left"
        >
          Comprar
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[90%] bg-gradient-to-t from-black via-black to-transparent flex items-center justify-center text-white text-xs font-semibold opacity-50">
        Próximamente...
      </div>
    </div>
  );
}

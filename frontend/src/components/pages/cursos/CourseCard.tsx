'use client';

import { Button } from '@/components/ui/button';
import { ShoppingCart, Timer, Users, Video } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CourseCardList = ({ course }: any) => {
  const urlImage = `https://inveztiga-pb.zapto.org/api/files/${course.collectionId}/${course.id}/${course.image}`;
  const router = useRouter();

  return (
    <div
      key={course.id}
      className="bg-white shadow-sm rounded-lg overflow-hidden w-full max-w-xs flex flex-col"
    >
      <div className="relative w-full h-44">
        <Image
          src={urlImage}
          alt={`Imagen de ${course.name}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col gap-2 p-3 flex-1">
        <h2 className="text-base font-semibold">{course.name}</h2>

        <p className="text-gray-600 text-xs mt-auto">
          {course.shortDescription}
        </p>

        <div className="flex flex-row gap-2 text-xs text-gray-500 justify-between mt-auto">
          <span className="flex flex-row gap-1 items-center">
            <Timer size="14" />
            {course.duration} H
          </span>
          <span className="flex flex-row gap-1 items-center">
            <Video size="14" />
            {course.modules?.length} sesiones
          </span>
          <span className="flex flex-row gap-1 items-center relative lg:hidden xl:flex">
            <Users size="14" />
            {course.alumns?.length} alumnos
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mt-auto p-3">
        <Button
          className="text-xs h-7 rounded-lg px-2 bg-secondary"
          variant="expandIcon"
          Icon={ShoppingCart}
          iconPlacement="left"
          onClick={() => router.push(`/cursos/${course.id}`)}
        >
          Comprar
        </Button>
        <span className="text-xs">S/{course.price} Soles</span>
      </div>
    </div>
  );
};

export default CourseCardList;

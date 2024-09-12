'use client';

import { Button } from '@/components/ui/button';
import { BookOpen, Timer, Video, Wallet, Check, Computer } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  course: {
    id: number;
    page_url: string;
    name: string;
    IE: string;
    hours: string;
    price: number;
    mode: string;
    Benefits: string[];
    image_url: string;
  };
  isMyCourse?: Boolean;
}

function CourseCardList({ course, isMyCourse = false }: Props) {
  const router = useRouter();

  return (
    <div
      key={course.name}
      className="bg-white shadow-sm rounded-lg overflow-hidden w-full max-w-xs flex flex-col "
    >
      <div className="relative w-full h-44">
        <Image
          src={course.image_url}
          alt={`Imagen de ${course.name}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col gap-2 p-3 flex-1">
        <h2 className="text-base font-semibold min-h-28">{course.name}</h2>

        <p className="text-gray-600 text-xs font-semibold min-h-10">
          {course.IE}
        </p>

        <div className="flex flex-col gap-2 text-xs text-gray-500 justify-between">
          <span className="flex flex-row gap-1 items-center">
            <Computer size="14" />
            {course.mode}
          </span>
          <span className="flex flex-row gap-1 items-center">
            <Timer size="14" />
            {course.hours}
          </span>
          <span className="flex flex-row gap-1 items-center">
            <Video size="14" />
            S/. {course.price}
          </span>
          <span className="flex flex-col gap-1 items-start relative lg:hidden xl:flex">
            {course?.Benefits?.map((benefit) => (
              <span key={benefit} className="flex flex-row gap-1 items-center">
                <Check className="text-green-700 min-w-4 w-4" />
                {benefit}
              </span>
            ))}
          </span>
        </div>
      </div>

      {isMyCourse ? (
        <Button
          className="text-xs h-7 rounded-lg px-2 bg-primary m-3 shadow-md"
          variant="expandIcon"
          Icon={BookOpen}
          iconPlacement="left"
          onClick={() => router.push(`/cursos/${course.id}`)}
        >
          Ir
        </Button>
      ) : (
        <div className="flex flex-row items-center justify-between mt-auto p-3">
          <Button
            className="text-xs h-7 rounded-lg px-2 bg-secondary"
            variant="expandIcon"
            Icon={Wallet}
            iconPlacement="left"
            onClick={() => router.push(`/cursos/${course.id}`)}
          >
            Suscribirse
          </Button>
        </div>
      )}
    </div>
  );
}

export default CourseCardList;

import { Courses, CoursesFields } from '@/types/courses';
import { AudioLines, Book, BookOpen, Play } from 'lucide-react';
import BuyCourseButton from './BuyCourseButton';

interface Props {
  course: Courses;
}

export default function BuyCardCourse({ course }: Props) {
  return (
    <>
      <div className="relative flex flex-col gap-1">
        <div className="flex gap-2">
          <span className=" text-2xl font-semibold">
            S/{course[CoursesFields.PRICE]}.00
          </span>
          <div className="relative">
            <span className="absolute text-gray-500 text-xs top-1 line-through ">
              S/30.00
            </span>
          </div>
        </div>
        <span className="self-start bg-purple-600 text-sm font-medium text-white px-2 py-1 rounded-md inline-block">
          20% Menos
        </span>
      </div>

      <BuyCourseButton />

      <div className="flex flex-col gap-2 text-gray-700 text-sm ">
        <span className="flex gap-2 items-center">
          <Book size="16" />
          {course[CoursesFields.MODULES].length} Módulos
        </span>
        <span className="flex gap-2 items-center">
          <BookOpen size="16" />
          22 Lecciones
        </span>
        <span className="flex gap-2 items-center">
          <Play size="16" />
          {course[CoursesFields.DURATION]} Horas en total
        </span>
        <span className="flex gap-2 items-center">
          <AudioLines size="16" />
          Español
        </span>
      </div>
    </>
  );
}

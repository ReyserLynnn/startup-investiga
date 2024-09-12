'use client';

import { Button } from '@/components/ui/button';
import { Courses } from '@/types/courses';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CtaCourse from '../curso/CtaCourse';
// import CourseCardList from '../cursos/CourseCard';

const filters = [
  'Todos mis cursos',
  'En progreso',
  'Completados',
  'Lista Blanca',
];

interface Props {
  courses: Courses[];
}

export default function ClientComponentMisCursos({ courses = [] }: Props) {
  const [filter, setFilter] = useState<string>(filters[0]);
  const router = useRouter();

  const handleFilter = (filterName: string) => {
    setFilter(filterName);
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center justify-center">
          <span className="text-xl font-semibold">Mis Cursos</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {filters.map((filterName) => (
              <Button
                key={filterName}
                variant={filter === filterName ? 'linkHover1' : 'linkHover2'}
                onClick={() => handleFilter(filterName)}
                className={`relative ${
                  filter === filterName
                    ? 'font-medium hover:after:scale-x-100'
                    : 'font-normal'
                }`}
              >
                {filterName}
              </Button>
            ))}
          </div>
        </div>

        <div className="coantainer h-full px-5 my-10 ">
          {courses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
              {/* {courses.map((course: Courses) => (
                <CourseCardList key={course.id} course={course} isMyCourse />
              ))} */}
            </div>
          ) : (
            <div className="text-center flex flex-col items-center justify-center gap-2">
              <p className="text-lg font-medium">
                No tienes cursos actualmente.
              </p>
              <p className="text-md text-gray-500">
                Mira nuestro catálogo y encuentra un curso que te interese.
              </p>
              <Button className="mt-4" onClick={() => router.push('/cursos')}>
                Ir al Catálogo de Cursos
              </Button>
            </div>
          )}
        </div>
        <CtaCourse />
      </div>
    </div>
  );
}

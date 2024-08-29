'use client';
import { Button } from '@/components/ui/button';
import { Courses } from '@/types/courses';
import { useState } from 'react';
import CourseCardList from '../cursos/CourseCard';

const filters = [
  'Todos mis cursos',
  'En progreso',
  'Completados',
  'Lista Blanca',
];

interface Props {
  courses: Courses;
}

export default function ClientComponentMisCursos({ courses }: Props) {
  const [filter, setFilter] = useState<string>(filters[0]);

  const handleFilter = (filterName: string) => {
    setFilter(filterName);
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center justify-center">
          <span className="text-xl font-semibold ">Mis Cursos</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {filters.map((filterName) => (
              <Button
                key={filterName}
                variant={filter === filterName ? 'linkHover1' : 'linkHover2'}
                onClick={() => handleFilter(filterName)}
                className={`relative ${filter === filterName ? 'font-medium hover:after:scale-x-100' : 'font-normal'}`}
              >
                {filterName}
              </Button>
            ))}
          </div>
        </div>

        <div className="container h-full px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10 place-items-center">
          {courses.map((course: Courses) => (
            <CourseCardList key={course.id} course={course} isMyCourse />
          ))}
        </div>
      </div>
    </div>
  );
}

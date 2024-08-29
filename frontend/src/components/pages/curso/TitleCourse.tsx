import { Courses } from '@/types/courses';
import { StarIcon } from 'lucide-react';

interface Props {
  course: Courses;
}
export default function TitleCourse({ course }: Props) {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <h3 className="text-3xl font-semibold">{course.name}</h3>
      <div className="flex gap-2 text-sm">
        <span className="text-red-500">
          {course.expand?.teacher.name} {course.expand?.teacher.lastname}
        </span>
        <span className="flex items-center gap-1">
          <StarIcon size="18" className="text-yellow-300" />
          4.8
        </span>
        <span className="text-gray-400">({course.alumns.length} alumnos)</span>
      </div>
    </div>
  );
}

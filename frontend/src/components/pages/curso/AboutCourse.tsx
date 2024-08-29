import { Courses } from '@/types/courses';

interface Props {
  course: Courses;
}

export default function AboutCourse({ course }: Props) {
  return (
    <div className="flex flex-col gap-2 ml-4">
      <span className="font-semibold">Acerca del Curso</span>
      <div
        className="joditBox font-light"
        dangerouslySetInnerHTML={{
          __html: course.description,
        }}
      />
    </div>
  );
}

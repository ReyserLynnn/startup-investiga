/* eslint-disable react/no-array-index-key */
import pb from '@/lib/pocketbase';
import CourseCardList from './CourseCard';
import NotCourseCard from './NotCourseCard';

export default async function FutureCourses() {
  const futureCourses = await pb.getFutureCourses();

  return (
    <div className=" flex flex-col items-center gap-5 my-5">
      <div className="flex items-center font-semibold text-xl">
        Próximos Talleres en Vivo
      </div>

      <div className="flex justify-center items-center h-full p-5">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-1 gap-4 px-5 max-w-7xl">
          {futureCourses.slice(0, 4).map((course) => (
            <CourseCardList key={course.id} course={course} />
          ))}

          {[...Array(4 - futureCourses.length)].map((_, index) => (
            <NotCourseCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import NotCourseCard from "./NotCourseCard";
import pb from "@/lib/pocketbase";
import CourseCardList from "./CourseCard";

export default async function TredingCourses() {
  const trendingCourses = await pb.getTrendingCourses();

  return (
    <div className=" flex flex-col items-center gap-5 my-5">
    <div className="flex items-center font-semibold text-xl">
      Cursos en Tendencia
    </div>

    <div className="container h-full grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-4 px-5 lg:grid-cols-4 lg:grid-rows-2">
      <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
        <div className="relative w-full h-full">
          <Image
            src="/img/notice2.webp"
            layout="fill"
            objectFit="cover"
            alt="Masterclass 1"
            className="absolute inset-0 w-full h-full object-cover z-0 rounded-2xl"
          ></Image>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-900 to-transparent z-10 rounded-2xl">
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <span className="block text-md font-thin mb-2">
                Francisco Renfigo
              </span>
              <span className="text-2xl font-semibold">
                Masterclass en Keenious AI, artículos más cerca de tí
              </span>
            </div>
          </div>
        </div>
      </div>

      {trendingCourses.slice(0, 4).map((course) => (
        <CourseCardList key={course.id} course={course} />
      ))}

      {[...Array(4 - trendingCourses.length)].map((_, index) => (
        <NotCourseCard key={index} />
      ))}
    </div>
  </div>
  )
}
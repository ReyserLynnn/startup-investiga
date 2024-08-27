import CourseCardList from '@/components/pages/cursos/CourseCard';
import NotCourseCard from '@/components/pages/cursos/NotCourseCard';
import NoticesCourses from '@/components/pages/cursos/NoticesCourses';
import { Button } from '@/components/ui/button';
import pb from '@/lib/pocketbase';
import Image from 'next/image';
import Link from 'next/link';

const FILTER_TAG = [
  'Todos',
  'Resumidora',
  'Traductora',
  'Explorativa',
  'Analizadora',
];

export default async function CursosPage() {
  const bestCourses = await pb.getBestCourses();
  const trendingCourses = await pb.getTrendingCourses();
  const futureCourses = await pb.getFutureCourses();

  return (
    <section
      id="cursosPage"
      className="relative bg-white overflow-hidden h-full"
    >
      <div className="relative container mx-auto flex flex-col items-center justify-center px-6">
        <NoticesCourses />

        <div className="flex flex-col items-center w-full px-4 my-10 gap-3">
          <span className="text-lg font-semibold">
            Explora nuestros mejores cursos
          </span>

          <div className="hidden sm:flex sm:flex-row gap-2">
            {FILTER_TAG.map((nameTag) => (
              <Button
                key={nameTag}
                variant="linkHover2"
                className="font-normal"
                // variant={tag === nameTag ? 'linkHover1' : 'linkHover2'}
                // onClick={() => handleClick(nameTag)}
                // className={`relative ${tag === nameTag ? 'font-medium hover:after:scale-x-100' : 'font-normal'}`}
              >
                {nameTag}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center h-full p-5">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-1 gap-4 px-5 max-w-7xl">
            {bestCourses.slice(0, 4).map((course) => (
              <CourseCardList key={course.id} course={course} />
            ))}

            {[...Array(4 - bestCourses.length)].map((_, index) => (
              <NotCourseCard key={index} />
            ))}
          </div>
        </div>

        <div className="coantainer w-full flex flex-col gap-5 my-10 justify-center p-8 bg-[#1B283F] rounded-lg h-auto text-white">
          <span className="font-semibold  text-2xl">
            Únete a Inveztiga ahora y obtén un 35% de descuento
          </span>
          <span className="font-extralight w-[90%]">
            Con nuestros cursos grabados y en vivo tenrás una experiencia
            inigualable en aprender habilidades de invesitgación científica
          </span>
          <Link
            className="bg-primary rounded-lg px-4 py-2 self-start font-medium"
            href="/register"
          >
            Unirme a Inveztiga
          </Link>
        </div>

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

        <div className=" flex flex-col items-center gap-5 my-5">
          <div className="flex items-center font-semibold text-xl">
            Proximos Talleres en Vivo
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

        <div className="w-screen mt-5 p-8 bg-[#FFEC8A] h-auto text-black">
          <div className="container flex flex-col gap-5 justify-center items-center">
            <span className="font-semibold text-2xl text-center">
              Obtenga recomendaciones de aprendizaje personalizadas según sus
              necesidades
            </span>

            <Link
              className="rounded-lg px-4 py-2 bg-transparent border-2 border-black font-medium"
              href="/register"
            >
              Unirme a Inveztiga
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import BetterCourses from '@/components/pages/cursos/BetterCourses';
import CourseCardList from '@/components/pages/cursos/CourseCard';
import NotCourseCard from '@/components/pages/cursos/NotCourseCard';
import NoticesCourses from '@/components/pages/cursos/NoticesCourses';
import TredingCourses from '@/components/pages/cursos/TredingCourses';
import pb from '@/lib/pocketbase';
import Link from 'next/link';

export default async function CursosPage() {
  const futureCourses = await pb.getFutureCourses();

  return (
    <section
      id="cursosPage"
      className="relative bg-white overflow-hidden h-full"
    >
      <div className="relative container mx-auto flex flex-col items-center justify-center px-6">
        <NoticesCourses />

        <BetterCourses />

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

        <TredingCourses />

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

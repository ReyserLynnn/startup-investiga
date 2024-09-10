import BetterCourses from '@/components/pages/cursos/BetterCourses';
import FutureCourses from '@/components/pages/cursos/FutureCourses';
import NoticesCourses from '@/components/pages/cursos/NoticesCourses';
import TredingCourses from '@/components/pages/cursos/TredingCourses';
import Link from 'next/link';

export default async function CursosPage() {
  return (
    <section
      id="cursosPage"
      className="relative flex-grow bg-white overflow-hidden min-h-screen flex flex-col"
    >
      <div className="relative container mx-auto flex flex-col items-center justify-center px-6">
        <NoticesCourses />

        <BetterCourses />

        <div className="coantainer w-full flex flex-col gap-5 my-10 justify-center p-8 bg-[#1B283F] rounded-lg h-auto text-white">
          <span className="font-semibold  text-2xl">
            Únete a Investiga ahora y obtén un 35% de descuento
          </span>
          <span className="font-extralight w-[90%]">
            Con nuestros cursos grabados y en vivo tendrás una experiencia
            inigualable en aprender habilidades de invesitgación científica
          </span>
          <Link
            className="bg-primary rounded-lg px-4 py-2 self-start font-medium"
            href="/register"
          >
            Unirme a Investiga
          </Link>
        </div>

        <TredingCourses />

        <FutureCourses />
      </div>

      <div className=" mt-auto w-screen min-mt-5 p-8 bg-[#FFEC8A] h-auto text-black">
        <div className="container flex flex-col gap-5 justify-center items-center">
          <span className="font-semibold text-2xl text-center">
            Obtenga recomendaciones de aprendizaje personalizadas según sus
            necesidades
          </span>

          <Link
            className="rounded-lg px-4 py-2 bg-transparent border-2 border-black font-medium"
            href="/register"
          >
            Unirme a Investiga
          </Link>
        </div>
      </div>
    </section>
  );
}

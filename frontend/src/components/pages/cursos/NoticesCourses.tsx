import Image from 'next/image';
import Link from 'next/link';

export default function NoticesCourses() {
  return (
    <div className="container flex flex-row h-96 w-full rounded-2xl my-5">
      <div className="relative w-full lg:w-[40%] bg-primary rounded-2xl lg:rounded-r-none overflow-hidden p-10">
        <div className="relative flex flex-col justify-center h-full text-white z-20">
          <span className="text-4xl font-bold leading-normal">
            Domina la IA en la Investigación Científica
          </span>

          <span className="text-sm mt-2">
            Bienvenido a los científicos de la edad moderna
          </span>

          <Link
            className="bg-white text-primary text-xl font-semibold rounded-2xl py-3 w-[60%] text-center mt-5"
            href="/"
          >
            Explorar en Vivo
          </Link>
        </div>

        <Image
          src="/assets/pattern1.svg"
          width="0"
          height="0"
          className="absolute hidden lg:block inset-0 opacity-10 w-full h-full object-cover z-0"
          alt="patron de diseño 1"
        />

        <div className="absolute block lg:hidden inset-0 w-full h-full bg-black opacity-50 z-10"></div>
        <img
          src="/img/notice1.webp"
          alt="patron de diseño 1"
          className="absolute block lg:hidden inset-0 w-full h-full object-cover z-0"
        />
      </div>

      <div className="hidden lg:block relative w-[60%] rounded-r-2xl overflow-hidden">
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <img
          src="/img/notice1.webp"
          alt="patron de diseño 1"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

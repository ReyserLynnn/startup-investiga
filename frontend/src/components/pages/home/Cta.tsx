import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Cta() {
  return (
    <section id="cta" className="bg-[#1B283F] text-white py-16 my-16 w-full">
      <div className="container flex flex-col lg:flex-row place-items-center justify-between">
        <div className="lg:col-start-1">
          <h2 className="text-2xl lg:text-3xl  font-light ">
            Todas tus
            <span className="font-bold"> Ideas y Conocimientos </span>
            en una sola plataforma
          </h2>
          <p className="text-gray-300 font-light text-lg mt-4 mb-8 lg:mb-0">
            Descubre cursos en vivo de investigación científica con la ayuda de
            IA. ¡Explora y aprende!
          </p>
        </div>

        <Button className="w-full md:w-auto font-medium" asChild>
          <Link href="/register">Unirme a Investiga</Link>
        </Button>
      </div>
    </section>
  );
}

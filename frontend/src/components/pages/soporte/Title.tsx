import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Title() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 py-32 px-6">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl text-primary font-bold">
            Sobre nosotros
          </h1>
          <h2 className="text-4xl font-semibold">
            Somos la plataforma de educación online especializada en
            {' '}
            <span className="text-secondary">
              investigación científica.
            </span>
          </h2>
          <p>
            En nuestra plataforma, nos dedicamos a formar investigadores excepcionales. Ofrecemos cursos especializados que combinan rigor académico con prácticas aplicadas, guiados por expertos en diversas áreas científicas. Nuestro objetivo es proporcionar herramientas esenciales y conocimientos avanzados para que nuestros estudiantes puedan destacar en la creación y publicación de artículos científicos.
          </p>
          <Button className="rounded-full max-w-36 flex gap-4" size="lg">
            Unete
            <ArrowRight />
          </Button>
        </div>
        <div className="w-full hidden lg:flex flex-col gap-4">
          <div className="w-full flex justify-end">
            <Image
              src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1724251584/n5ybsj4sulleybve5nrb.png"
              alt="Soporte"
              width={400}
              height={400}
              className="w-2/3"
            />
          </div>
          <div className="w-full flex justify-start">

            <Image
              src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1724251631/chbxuzf41buknnftllfu.png"
              alt="Soporte"
              width={400}
              height={400}
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/ServerComponent.tsx
import { Button } from '@/components/ui/button';
import { ShoppingCart, Timer, Users, Video } from 'lucide-react';
import Image from 'next/image';
import ClientComponent from './ClientComponent';

// Simulación de función que obtiene cursos filtrados
async function getCoursesByTag(tag: string) {
  const allCourses = [
    {
      id: 1,
      title: 'Curso 1',
      tag: 'Resumidora',
      duration: '4.5 H',
      sessions: 20,
      students: 15,
      price: 15,
    },
    {
      id: 2,
      title: 'Curso 2',
      tag: 'Traductora',
      duration: '3 H',
      sessions: 15,
      students: 10,
      price: 20,
    },
    // Otros cursos...
  ];

  if (tag === 'Todos') return allCourses;
  return allCourses.filter((course) => course.tag === tag);
}

interface ServerComponentProps {
  selectedTag: string;
}

export default async function ServerComponent({
  selectedTag,
}: ServerComponentProps) {
  const courses = await getCoursesByTag(selectedTag);

  return (
    <section
      id="cursosPage"
      className="relative bg-white overflow-hidden h-full"
    >
      <div className="relative container mx-auto flex flex-col items-center px-6">
        <div className="flex flex-col items-center w-full px-4 my-10 gap-3">
          <span className="text-lg font-semibold">
            Explora nuestros mejores cursos
          </span>

          <div className="flex flex-row gap-2">
            {/* Enviar datos al componente cliente */}
            <ClientComponent selectedTag={selectedTag} />
          </div>

          <div className="flex flex-row gap-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-sm rounded-lg overflow-hidden w-full max-w-xs"
              >
                <div className="relative w-full h-44">
                  <Image
                    src="/img/notice1.webp"
                    alt={`Imagen del curso ${course.title}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="flex flex-col gap-2 p-3">
                  <h2 className="text-base font-semibold">{course.title}</h2>
                  <p className="text-gray-600 text-xs">
                    Descripción breve del curso.
                  </p>

                  <div className="flex flex-row gap-2 text-xs text-gray-500 justify-between">
                    <span className="flex flex-row gap-1 items-center">
                      <Timer size="14" />
                      {course.duration}
                    </span>
                    <span className="flex flex-row gap-1 items-center">
                      <Video size="14" />
                      {course.sessions} sesiones
                    </span>
                    <span className="flex flex-row gap-1 items-center">
                      <Users size="14" />
                      {course.students} alumnos
                    </span>
                  </div>

                  <div className="flex flex-row items-center justify-between mt-2">
                    <Button
                      className="text-xs h-7 rounded-lg px-2 bg-secondary"
                      variant="expandIcon"
                      Icon={ShoppingCart}
                      iconPlacement="left"
                    >
                      Comprar
                    </Button>
                    <span className="text-xs">${course.price} dólares</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

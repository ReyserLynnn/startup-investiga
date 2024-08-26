'use client';

import NoticesCourses from '@/components/pages/cursos/NoticesCourses';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, Timer, Users, Video } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const FILTER_TAG = [
  'Todos',
  'Resumidora',
  'Traductora',
  'Explorativa',
  'Analizadora',
];

export default function CursosPage() {
  const [tag, setTag] = useState(FILTER_TAG[0]);

  const handleClick = (nameTag: string) => {
    setTag(nameTag);
  };

  const imageUrl =
    'https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <section
      id="cursosPage"
      className="relative bg-white overflow-hidden h-full"
    >
      <div className="relative container mx-auto flex flex-col items-center px-6">
        <NoticesCourses />

        <div className="flex flex-col items-center w-full px-4 my-10 gap-3">
          <span className="text-lg font-semibold">
            Explora nuestros mejores cursos
          </span>

          <div className="flex flex-row gap-2">
            {FILTER_TAG.map((nameTag) => (
              <Button
                key={nameTag}
                variant={tag === nameTag ? 'linkHover1' : 'linkHover2'}
                onClick={() => handleClick(nameTag)}
                className={`relative ${tag === nameTag ? 'font-medium hover:after:scale-x-100' : 'font-normal'}`}
              >
                {nameTag}
              </Button>
            ))}
          </div>

          <div className="flex flex-row gap-4">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden w-full max-w-xs">
              {/* Imagen */}
              <div className="relative w-full h-44">
                <Image
                  src="/img/notice1.webp"
                  alt="Imagen de ejemplo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-col gap-2 p-3">
                <h2 className="text-base font-semibold">Título del Curso</h2>
                <p className="text-gray-600 text-xs">
                  Descripción breve del curso. Esto proporciona una visión
                  general del contenido.
                </p>

                {/* Footer */}
                <div className="flex flex-row gap-2 text-xs text-gray-500 justify-between">
                  <span className="flex flex-row gap-1 items-center">
                    <Timer size="14" />
                    4.5 H
                  </span>
                  <span className="flex flex-row gap-1 items-center">
                    <Video size="14" />
                    20 sesiones
                  </span>
                  <span className="flex flex-row gap-1 items-center">
                    <Users size="14" />
                    15 alumnos
                  </span>
                </div>

                <div className="flex flex-row items-center justify-between mt-2">
                  <Button
                    className="text-xs h-7 rounded-lg px-2 bg-secondary"
                    variant="expandIcon"
                    Icon={ArrowRightIcon}
                    iconPlacement="right"
                  >
                    Comprar
                  </Button>
                  <span className="text-xs">$15 dólares</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

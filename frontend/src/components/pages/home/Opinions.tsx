/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import { useEffect, useState } from 'react';

type Opinion = {
  text: string;
  user: string;
  label: string;
};

const OPINIONS: Opinion[] = [
  {
    text: '“La integración de herramientas de IA en mi investigación ha sido un cambio total. Ahora puedo encontrar y organizar información de manera mucho más eficiente.”',
    user: 'María Fernández',
    label: 'Estudiante de Sistemas, Universidad Nacional de San Agustín',
  },
  {
    text: '“Los cursos ofrecidos me han ayudado a mejorar significativamente mis habilidades en redacción científica. La plataforma es una excelente adición a mi toolkit.”',
    user: 'Carlos Mendoza',
    label: 'Estudiante de Economía, Universidad Nacional de San Agustín',
  },
  {
    text: '“Gracias a las herramientas de búsqueda y comparación, he acelerado mis procesos de investigación y mejorado la calidad de mis publicaciones.”',
    user: 'Sofía Vargas',
    label: 'Estudiante de Psicología, Universidad Nacional de San Agustín',
  },
];

export default function Opinions() {
  const [index, setIndex] = useState(0);

  const paginate = (newDirection: number) => {
    if (index === 0 && newDirection === -1) {
      setIndex(OPINIONS.length - 1);
    } else if (index === OPINIONS.length - 1 && newDirection === 1) {
      setIndex(0);
    } else {
      setIndex((prevPage) => prevPage + newDirection);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="w-full bg-muted/50 flex flex-col items-center justify-center gap-10 py-20 px-6">
      <img src="/logo.svg" alt="" className="w-full max-w-40" />
      <h1 className="text-4xl text-center w-full max-w-6xl font-medium">
        {OPINIONS[index].text}
      </h1>
      <div className="flex flex-col items-center gap-4">
        <User className="w-16 h-16" />
        <span className="font-semibold">{OPINIONS[index].user}</span>
        <span className="text-sm text-muted-foreground">
          {OPINIONS[index].label}
        </span>
      </div>
      <div className="flex items-center justify-center gap-4">
        {OPINIONS.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => {
              setIndex(i);
            }}
            className={cn(
              'w-4 h-4 rounded-full bg-primary-background transition-all',
              { 'w-10': i === index },
            )}
          >
            <span className="sr-only">{i + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

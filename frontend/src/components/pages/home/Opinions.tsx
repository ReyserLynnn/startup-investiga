/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Opinion = {
  text: string;
  user: string;
  label: string;
};

const OPINIONS: Opinion[] = [
  {
    text: '“Este curso superó mis expectativas. Los docentes son increíbles, y aprendí herramientas clave para mi carrera científica.”',
    user: 'Juan Pérez',
    label: 'Estudiante, Universidad Nacional de San Agustín',
  },
  {
    text: '“Este curso superó mis expectativas. aprendí herramientas clave para mi carrera científica.”',
    user: 'Pedro Pérez',
    label: 'Estudiante, Universidad Nacional de San Agustín',
  },
  {
    text: '“Este curso superó mis expectativas. Los docentes son increíbles”',
    user: 'Juan Pérez',
    label: 'Estudiante, Universidad Nacional de San Agustín',
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
        <span className="font-semibold">
          {OPINIONS[index].user}
        </span>
        <span className="text-sm text-muted-foreground">
          {OPINIONS[index].label}
        </span>
      </div>
      <div className="flex items-center justify-center gap-4">
        {
          OPINIONS.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => {
                setIndex(i);
              }}
              className={cn('w-4 h-4 rounded-full bg-primary-background transition-all', { 'w-10': i === index })}
            >
              <span className="sr-only">{i + 1}</span>
            </button>
          ))
        }
      </div>
    </section>
  );
}

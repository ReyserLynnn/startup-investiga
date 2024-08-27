// src/components/ClientComponent.tsx
'use client';

import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';

interface ClientComponentProps {
  selectedTag: string;
}

export default function ClientComponent({ selectedTag }: ClientComponentProps) {
  const searchParams = useSearchParams();
  const currentTag = searchParams.get('tag') || selectedTag;

  return (
    <div className="flex flex-row gap-2">
      {['Todos', 'Resumidora', 'Traductora', 'Explorativa', 'Analizadora'].map(
        (nameTag) => (
          <Button
            key={nameTag}
            variant={currentTag === nameTag ? 'linkHover1' : 'linkHover2'}
            href={`/cursos?tag=${nameTag}`}
            className={`relative ${currentTag === nameTag ? 'font-medium hover:after:scale-x-100' : 'font-normal'}`}
          >
            {nameTag}
          </Button>
        ),
      )}
    </div>
  );
}

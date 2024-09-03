'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

interface Props {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function Pagination({ page, hasPrev, hasNext }: Props) {
  const router = useRouter();

  return (
    <div className=" flex justify-between">
      <Button
        onClick={() => {
          router.push(`?page=${page - 1}`);
        }}
        disabled={!hasPrev}
        className="bg-secondary w-[100px] p-4"
      >
        Anterior
      </Button>

      <Button
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
        className="bg-secondary w-[100px] p-4"
      >
        Siguiente
      </Button>
    </div>
  );
}

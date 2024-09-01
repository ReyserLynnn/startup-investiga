import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

export default function CommentsBlog() {
  const status = 'authenticated';
  return (
    <div className="mt-12">
      <h1 className="text-3xl font-bold mb-8">Comentarios</h1>

      {status === 'authenticated' ? (
        <div className="flex items-center justify-between gap-7">
          <Textarea
            placeholder="Escribe un comentario"
            className="overflow-y-hidden resize-none"
          />
          <Button>Enviar</Button>
        </div>
      ) : (
        <Link href="/login">Inicia sesión para escribir un comentario</Link>
      )}

      <div className="mt-12">
        <div className="mb-12">
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/blog/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className="rounded-full object-cover"
            />

            <div className="flex flex-col gap-2">
              <span className="font-medium">ReyserLyn</span>
              <span className="text-sm text-gray-500">12.05.2024</span>
            </div>
          </div>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima rem
            temporibus impedit officia adipisci deleniti, error sunt laborum
            beatae, sapiente unde sint repudiandae vitae nihil blanditiis quia
            ullam explicabo. Porro?
          </p>
        </div>
      </div>
    </div>
  );
}

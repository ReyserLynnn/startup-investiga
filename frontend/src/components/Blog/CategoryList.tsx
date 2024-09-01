import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryList() {
  return (
    <section>
      <h1 className="my-12 mx-0 text-3xl font-bold">Categorías Populares</h1>
      <div className="flex flex-wrap justify-between gap-5">
        <Link
          href="/blog?cat=style"
          className={cn(
            'flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-xl',
            'bg-[#57c4ff31]',
          )}
        >
          <Image
            src="/blog/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8 w-8"
          />
          Style
        </Link>

        <Link
          href="/blog?cat=style"
          className={cn(
            'flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-xl',
            'bg-[#57c4ff31]',
          )}
        >
          <Image
            src="/blog/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8 w-8"
          />
          Style
        </Link>

        <Link
          href="/blog?cat=style"
          className={cn(
            'flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-xl',
            'bg-[#57c4ff31]',
          )}
        >
          <Image
            src="/blog/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8 w-8"
          />
          Style
        </Link>

        <Link
          href="/blog?cat=style"
          className={cn(
            'flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-xl',
            'bg-[#57c4ff31]',
          )}
        >
          <Image
            src="/blog/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8 w-8"
          />
          Style
        </Link>

        <Link
          href="/blog?cat=style"
          className={cn(
            'flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-xl',
            'bg-[#57c4ff31]',
          )}
        >
          <Image
            src="/blog/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8 w-8"
          />
          Style
        </Link>

        <Link
          href="/blog?cat=style"
          className={cn(
            'flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-xl',
            'bg-[#57c4ff31]',
          )}
        >
          <Image
            src="/blog/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8 w-8"
          />
          Style
        </Link>
      </div>
    </section>
  );
}

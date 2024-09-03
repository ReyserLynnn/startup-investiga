import Image from 'next/image';
import Link from 'next/link';

interface Props {
  withImage?: boolean;
}

export default function MenuPost({ withImage = false }: Props) {
  return (
    <div className="mt-9 mb-14 flex flex-col gap-9">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/blog/p1.jpeg"
              alt=""
              fill
              className="object-cover rounded-full border-b-2 border-gray-300"
            />
          </div>
        )}
        <div className="flex flex-4 flex-col gap-[5px]">
          <span className="py-1 px-2 rounded-lg text-xs text-white w-max bg-secondary">
            Travel
          </span>
          <h3 className="text-lg font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>

          <div className="text-xs">
            <span>Reyser - </span>
            <span className="text-gray-500">13.05.2024</span>
          </div>
        </div>
      </Link>

      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/blog/p1.jpeg"
              alt=""
              fill
              className="object-cover rounded-full border-b-2 border-gray-300"
            />
          </div>
        )}
        <div className="flex flex-4 flex-col gap-[5px]">
          <span className="py-1 px-2 rounded-lg text-xs text-white w-max bg-secondary">
            Travel
          </span>
          <h3 className="text-lg font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>

          <div className="text-xs">
            <span>Reyser - </span>
            <span className="text-gray-500">13.05.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

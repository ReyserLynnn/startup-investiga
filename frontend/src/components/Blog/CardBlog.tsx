import Image from 'next/image';
import Link from 'next/link';
// { key, item }: any
export default function CardBlog() {
  return (
    <div className="mb-12 flex items-center gap-12">
      {/* {item.img && (
        <div className="flex-1 h-[350px] relative">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      )} */}

      <div className="hidden lg:flex flex-1 h-[350px] w-auto relative">
        <Image src="/blog/p1.jpeg" alt="" fill className="object-cover" />
      </div>

      <div className=" flex-1 flex flex-col gap-7">
        <div className="">
          <span className="text-gray-500">11.02.2023 - </span>
          <span className="text-red-500 font-medium">IA nueva</span>
        </div>
        <Link href="/">
          <h1 className="text-3xl font-bold">Hola me llamo reyser</h1>
        </Link>

        <p className="text-lg font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptates, natus saepe error maiores laboriosam
          mollitia, atque soluta molestiae odio porro laudantium perspiciatis
          harum sit distinctio aliquid vel consequatur quae.
        </p>

        <Link href="/" className="border-b border-red-900 w-max py-0.5">
          Leer más
        </Link>
      </div>
    </div>
  );
}

import CommentsBlog from '@/components/Blog/CommentsBlog';
import MenuBlog from '@/components/Blog/MenuBlog';
import Image from 'next/image';

export default function SlugBlogPage() {
  return (
    <div>
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl xl:text-5xl 2xl:text-6xl mb-14 font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-5">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src="/blog/p1.jpeg"
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xl font-medium">John Doe</span>
              <span className="text-gray-500">2021-08-07</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 h-[350px] relative">
          <Image src="/blog/p1.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>

      <div className="flex gap-12">
        <div className="flex-5 mt-14">
          <p className="text-lg sm:text-xl font-light mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quasi cum at odio debitis repellat assumenda perferendis labore
            perspiciatis autem non tempore itaque, fuga aperiam a laudantium
            illum magnam harum?
          </p>

          <div className="mb-12">
            <CommentsBlog />
          </div>
        </div>
        <MenuBlog />
      </div>
    </div>
  );
}

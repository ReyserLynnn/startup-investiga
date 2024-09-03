import Link from 'next/link';

export default function MenuCategories() {
  return (
    <div className="mt-9 mb-14 flex flex-wrap gap-5">
      <Link
        href="/blog/?cat=style"
        className="py-2 px-6 rounded-lg text-sm bg-[#57c4ff31]"
      >
        Style
      </Link>
      <Link
        href="/blog/?cat=style"
        className="py-2 px-6 rounded-lg text-sm bg-[#da85c731]"
      >
        Style
      </Link>
      <Link
        href="/blog/?cat=style"
        className="py-2 px-6 rounded-lg text-sm bg-[#57c4ff31]"
      >
        Style
      </Link>
      <Link
        href="/blog/?cat=style"
        className="py-2 px-6 rounded-lg text-sm bg-[#da85c731]"
      >
        Style
      </Link>
      <Link
        href="/blog/?cat=style"
        className="py-2 px-6 rounded-lg text-sm bg-[#57c4ff31]"
      >
        Style
      </Link>
      <Link
        href="/blog/?cat=style"
        className="py-2 px-6 rounded-lg text-sm bg-[#da85c731]"
      >
        Style
      </Link>
    </div>
  );
}

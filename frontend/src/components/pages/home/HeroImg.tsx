import Image from 'next/image';
import { HeroChart } from './HeroChart';

export function HeroImg() {
  return (
    <div className="hidden lg:flex flex-wrap gap-8 relative w-[500px] h-[500px]">
      <HeroChart />

      <Image
        src="/heroImg.webp"
        alt="user avatar"
        width={500}
        height={500}
        className="rounded-full object-cover"
      />
    </div>
  );
}

import StepperDemo from '@/components/pages/auth/StepperRegister';
import Image from 'next/image';
import Link from 'next/link';

export default function PageCompleteRegistration() {
  return (
    <section className="relative bg-white h-screen w-screen">
      <div className="container mx-auto flex flex-col items-center justify-center h-screen px-6">
        <Link href="/" className=" hidden md:flex" prefetch={false}>
          <Image
            src="logo.svg"
            width="0"
            height="0"
            alt="Logo de investiga"
            className="lg:w-50 w-full h-auto mb-8"
          />
          <span className="sr-only">Investiga</span>
        </Link>
        <StepperDemo isOAuthLogin />
      </div>
    </section>
  );
}

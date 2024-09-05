import Image from 'next/image';

export default function Feature() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 py-32 px-6 justify-items-center">
        <div className="w-full flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1724252184/hmjiof6akd6xjrasgz7r.png"
            alt="Soporte"
            width={500}
            height={500}
            className="w-full lg:max-w-80 max-w-sm"
          />
        </div>
        <div className="flex flex-col w-full gap-4 lg:gap-8 max-w-sm lg:max-w-none">
          <h1 className="text-2xl text-primary font-bold">Características</h1>
          <h2 className="text-4xl lg:text-5xl">Lo Que Nos Define</h2>
          <p>
            Comprometidos con la excelencia en educación científica, ofrecemos
            recursos innovadores y apoyo especializado para impulsar tu éxito en
            la investigación.
          </p>
          <p className="mt-4 lg:mt-10">
            Dedicados a la excelencia, brindamos recursos avanzados y apoyo
            experto para potenciar tu investigación científica.
          </p>
        </div>
      </div>
    </section>
  );
}

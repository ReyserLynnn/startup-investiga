import { Button } from '@/components/ui/button';

export default function Cta2() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-7 items-center gap-x-8 gap-y-4 max-w-6xl mx-auto px-10 md:px-14 xl:px-20 py-0 rounded-3xl bg-gradient-to-br ring-1 ring-violet-900/10 ring-inset">
        <div className="lg:order-last lg:col-span-3 lg:-mr-9 -mb-6 -mt-3 lg:-my-11">
          <img
            src="/heroImg.webp"
            alt=""
            width="500"
            className="w-full max-w-lg lg:max-w-max mx-auto"
          />
        </div>
        <div className="space-y-4 py-6 md:py-10 lg:py-12 xl:py-20 lg:col-span-4">
          <h2 className="font-heading text-2xl md:text-3xl text-navy -mt-1">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="block text-lg pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            non. Officia sapiente voluptas tempore amet fugiat. Corrupti ullam
            unde minus repellendus id! Nulla cumque.
          </p>
          <Button className="gap-4 group/btn w-full sm:w-auto btn-border-dark">
            Más información
            <div className="flex items-center opacity-50 group-hover/btn:opacity-100 transition-opacity ">
              <svg
                role="img"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-0 group-hover/btn:w-2.5 h-2.5 -mr-2.5 ease-out duration-200 transition-all transform-gpu"
              >
                <path d="M1 9h14a1 1 0 000-2H1a1 1 0 000 2z" />
              </svg>
              <svg
                role="img"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-2.5"
              >
                <path d="M7.293 1.707L13.586 8l-6.293 6.293a1 1 0 001.414 1.414l7-7a.999.999 0 000-1.414l-7-7a1 1 0 00-1.414 1.414z" />
              </svg>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

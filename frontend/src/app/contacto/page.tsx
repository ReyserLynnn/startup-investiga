import { GlobeIcon, Mail, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/pages/contact/form';

export default function ContactoPage() {
  return (
    <div className="my-24 max-w-5xl shadow-xl rounded-xl">

      <div className="flex flex-col items-center ">
        <h2 className="text-4xl font-bold mb-4 text-primary underline underline-offset-8">
          Contáctanos
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-16 p-8 ">
        <div className="flex-1">
          <p className="text-lg mb-8">
            Comuníquese para obtener ayuda, realizar consultas o comentarios, garantizando una asistencia rápida y fomentando una experiencia de usuario perfecta.
          </p>

          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-6 text-[#413eC2] mr-2" />
              <Link
                href="mailto:soporte@investiga.com"
                className="hover:underline focus:underline underline-offset-4 "
              >
                soporte@investiga.com
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <PhoneIcon className="w-6 text-[#413eC2] mr-2" />
              +51 958 756 870
            </li>

            <li className="flex items-center gap-2">
              <GlobeIcon className="w-6 text-[#413eC2] mr-2" />
              Arequipa - Perú
            </li>
          </ul>
 
          <div className="w-full my-10">
            <iframe
              title="map arequipa"
              width="100%"
              height="170"
              src="https://maps.google.com/maps?width=100%25&amp;height=170&amp;hl=en&amp;q=-16.40084018219274,%20-71.53377598771684+(Arequipa)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="border-none"
            />
          </div>
        </div>

        <div className="flex-1 mt-8 lg:mt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

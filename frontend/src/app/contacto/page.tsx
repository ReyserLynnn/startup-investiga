import { GlobeIcon, PhoneIcon, Tv } from 'lucide-react';
import { ContactForm } from '@/components/pages/contact/form';

export default function contactoPage() {
  return (
    <aside className="flex-1">
      <div>
        <h2>
          Contactanos
        </h2>

        <span>
          Comuníquese para obtener ayuda, realizar consultas o comentarios, garantizando una asistencia rápida y fomentando una experiencia de usuario perfecta.
          {' '}
        </span>
      </div>

      <ul className="flex flex-col gap-3 text-sm">
        <li className="flex items-center gap-2">
          <span className="w-5 text-[#413eC2]">
            <Tv />
          </span>

          <a
            href="mailto:hello@veryfront.com"
            className="hover:underline focus:underline underline-offset-4"
          >
            [soporte@investiga.com](mailto:soporte@investiga.com)
          </a>
        </li>

        <li className="flex items-center gap-2">
          <span className="w-5 text-[#413eC2]">
            <PhoneIcon />
          </span>

          +51 958 756 870
        </li>

        <li className="flex items-center gap-2">
          <span className="w-5 text-[#413eC2]">
            <GlobeIcon />
          </span>

          Arequipa - Perú
        </li>
      </ul>

      <ContactForm />
    </aside>
  );
}

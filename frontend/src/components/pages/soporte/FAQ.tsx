/* eslint-disable react/no-unused-prop-types */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Qué tipo de cursos ofrece Inveztiga?",
    answer: "Ofrecemos cursos en vivo especializados en la aplicación de IA en investigación científica.",
    value: "item-1",
  },
  {
    question: "¿Cómo puedo acceder a los cursos en vivo?",
    answer:
      "Puedes acceder a los cursos en vivo a través de nuestra plataforma después de registrarte y seleccionar el plan que mejor se adapte a tus necesidades.",
    value: "item-2",
  },
  {
    question: "¿Los cursos están disponibles en varios idiomas?",
    answer:
      "Actualmente, nuestros cursos están disponibles en español, con planes de expandir a otros idiomas en el futuro.",
    value: "item-3",
  },
  {
    question: "¿Qué beneficios ofrece el plan Premium?",
    answer:
      "El plan Premium incluye acceso completo a todos los cursos, sesiones exclusivas con expertos, y material adicional para profundizar en los temas.",
    value: "item-4",
  },
  {
    question: "¿Cómo se gestionan las consultas durante los cursos?",
    answer:
      "Durante los cursos, puedes realizar preguntas y participar en discusiones en tiempo real a través de nuestra plataforma, y los expertos responderán tus consultas.",
    value: "item-5",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className=" max-w-7xl py-24 sm:py-32 "
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Preguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frecuentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        ¿Aún tienes preguntas?
        {' '}
        <Link
          rel="noreferrer noopener"
          href="/contacto"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contáctanos
        </Link>
      </h3>
    </section>
  );
};

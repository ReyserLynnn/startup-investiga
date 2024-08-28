const BENEFITS = [
  {
    title: 'Acceso Exclusivo',
    description:
      'Disfruta de materiales y herramientas especializadas solo para miembros de INVESTIGA.',
  },
  {
    title: 'Asesoría de Expertos',
    description:
      'Conéctate con líderes en investigación que te brindarán orientación personalizada.',
  },
  {
    title: 'Recursos Avanzados',
    description:
      'Utiliza herramientas innovadoras diseñadas para mejorar tu aprendizaje y proyectos científicos.',
  },
  {
    title: 'Comunidad Internacional',
    description:
      'Colabora y comparte conocimientos con investigadores y académicos de todo el mundo.',
  },
  {
    title: 'Capacitación Continua',
    description:
      'Participa en cursos y talleres actualizados para mantener tus habilidades a la vanguardia.',
  },
  {
    title: 'Soporte Eficiente',
    description:
      'Recibe asistencia rápida y efectiva para resolver cualquier duda o problema.',
  },
];

export default function Benefit() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col px-6 gap-16">
        <div className="flex-col flex items-center gap-6">
          <h2 className="text-2xl text-primary font-bold">
            Nuestros Beneficios
          </h2>
          <h1 className="text-5xl text-center max-w-[50rem] font-semibold">
            Descubre los Beneficios de Unirte a INVESTIGA
          </h1>
          <p className="text-center max-w-xl">
            Únete a nuestra plataforma para acceder a recursos avanzados, apoyo
            experto y una comunidad global vibrante para tu investigación
            científica.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {BENEFITS.map(({ title, description }, i) => (
            <div
              key={title}
              className="flex flex-col items-start justify-start gap-4"
            >
              <span className="text-4xl text-primary font-semibold">
                0{i + 1}
              </span>
              <h3 className="text-2xl">{title}</h3>
              <p className="text-black/80">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  ChartLine,
  LaptopMinimal,
  LucideIcon,
  TvMinimalPlay,
} from 'lucide-react';

type CualidadesProps = {
  label: string;
  color: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export function getCualidades(): CualidadesProps[] {
  return [
    {
      label: 'Compruebalo',
      color: 'DCA005',
      icon: LaptopMinimal,
      title: 'Enseñanza',
      description: 'Videos grabados y en vivo, seguimiento de investigadores',
    },
    {
      label: 'Ver más',
      color: '4883FF',
      icon: TvMinimalPlay,
      title: 'Material',
      description:
        'Diapositivas, cuadernos de ejercicios, actividades interactivas, videos, etc.',
    },
    {
      label: 'Aprender más',
      color: 'C11574',
      icon: ChartLine,
      title: 'Contenido del Curso',
      description:
        'Cursos completos de metodología y estadística para la investigación',
    },
  ];
}

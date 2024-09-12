/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-shadow */

'use client';

import { Button } from '@/components/ui/button';
import { capitalizeFirstLetter } from '@/lib/utils';
import { Tags, TagsFields } from '@/types/tags';
import { useState } from 'react';
import CourseCardList from './CourseCard';

export default function ButtonCourse({ tags }: { tags: Tags[] }) {
  const [tag, setTag] = useState<Tags | null>(tags[0]);

  const handleClick = (tag: Tags) => {
    setTag(tag);
  };

  const courses = [
    {
      id: 1,
      page_url: 'http://surl.li/hnpgzs',
      name: 'IA para académicos Revoluciona tu investigación científica',
      IE: 'Udemy',
      hours: '2,5 horas de video',
      price: 49.9,
      mode: '100% Online asincrónica',
      Benefits: [
        'Acceso de por vida, 11 recursos descargables',
        'Certificado de finalización',
      ],
      image_url:
        'https://ynoa-uploader.ynoacamino.site/uploads/1726113384_Screenshot%20from%202024-09-11%2022-56-14.png',
    },
    {
      id: 2,
      page_url: 'http://surl.li/inpjld',
      name: 'Metodología y Estadística para la Investigación con I.A.',
      IE: 'CEPS UNI Centro de Proyección y Responsabilidad Social Universitaria',
      hours: '96 horas de video',
      price: 0,
      mode: '100% virtual sincrónica',
      Benefits: [
        'Autoevaluaciones en línea y trabajos colaborativos en office 365, con entrega obligatoria de los trabajos desarrollados. ',
        'Certificado de finalización',
      ],
      image_url:
        'https://ynoa-uploader.ynoacamino.site/uploads/1726112732_Screenshot%20from%202024-09-11%2022-45-18.png',
    },
    {
      id: 3,
      page_url: 'https://goo.su/tYuois',
      name: 'Inteligencia Artificial e Investigación',
      IE: 'Grupo Eureka Consultores',
      hours: '96 horas de video',
      price: 70.0,
      mode: '100% Online asincrónica',
      Benefits: [
        'Material didáctico',
        'No hay ningún requisito previo ni experiencia necesaria',
        'Certificado de finalización',
      ],
      image_url:
        'https://ynoa-uploader.ynoacamino.site/uploads/1726112819_Screenshot%20from%202024-09-11%2022-46-34.png',
    },
    {
      id: 4,
      page_url: 'http://surl.li/nhhnbz',
      name: 'La inteligencia artificial en apoyo a la investigación científica: Consensus, Research Rabbit',
      IE: 'PUCP',
      hours: '96 horas de video',
      price: 0,
      mode: '100% Online sincrónica',
      Benefits: ['Sin Certificado de finalización.'],
      image_url:
        'https://ynoa-uploader.ynoacamino.site/uploads/1726113384_Screenshot%20from%202024-09-11%2022-56-14.png',
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center w-full px-4 my-10 gap-3">
        <span className="text-lg font-semibold">
          Explora nuestros mejores cursos
        </span>
        <div className="hidden sm:flex sm:flex-row gap-2">
          {tags.slice(0, 4).map((nameTag) => (
            <Button
              key={nameTag[TagsFields.ID]}
              variant={tag === nameTag ? 'linkHover1' : 'linkHover2'}
              onClick={() => handleClick(nameTag)}
              className={`relative ${tag === nameTag ? 'font-medium hover:after:scale-x-100' : 'font-normal'}`}
            >
              {capitalizeFirstLetter(nameTag[TagsFields.NAME])}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center h-full p-5">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-1 gap-4 px-5 max-w-7xl">
          {courses.map((course) => (
            <CourseCardList key={course.name} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}

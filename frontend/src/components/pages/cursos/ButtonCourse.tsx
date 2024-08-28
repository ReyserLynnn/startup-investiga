"use client";

import { Button } from "@/components/ui/button";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Courses } from "@/types/courses";
import { Tags, TagsFields } from "@/types/tags";
import { useState } from "react";
import CourseCardList from "./CourseCard";
import NotCourseCard from "./NotCourseCard";

export default function ButtonCourse({ tags, bestCourses }: {tags: Tags[], bestCourses: Courses[]}) {
  const [tag, setTag] = useState<Tags | null>(null);

  const handleClick = (tag: Tags) => {
    console.log(tag);
    setTag(tag);
  }

  return (
        <>
        <div className="flex flex-col items-center w-full px-4 my-10 gap-3">
          <span className="text-lg font-semibold">
            Explora nuestros mejores cursos
          </span>
          <div className="hidden sm:flex sm:flex-row gap-2">
          {tags.map((nameTag) => (
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
              {bestCourses.slice(0, 4).map((course) => (
                <CourseCardList key={course.id} course={course} />
              ))}
  
              {[...Array(4 - bestCourses.length)].map((_, index) => (
                <NotCourseCard key={index} />
              ))}
            </div>
          </div>
      </>
  )
}
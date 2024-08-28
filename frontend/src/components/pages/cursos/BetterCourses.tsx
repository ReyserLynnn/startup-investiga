import { Button } from "@/components/ui/button"; 
import pb from "@/lib/pocketbase";    
import NotCourseCard from "./NotCourseCard";    
import CourseCardList from "./CourseCard";     
import { TagsFields } from "@/types/tags";     
import { capitalizeFirstLetter } from "@/lib/utils";
import ButtonCourse from "./ButtonCourse";
   
export default async function BetterCourses() {   
  const bestCourses = await pb.getBestCourses();
  const tags = await pb.getTags();

  return (
    <ButtonCourse tags={tags} bestCourses={bestCourses} />
  );
}
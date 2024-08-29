import pb from '@/lib/pocketbase';
import ButtonCourse from './ButtonCourse';

export default async function BetterCourses() {
  const bestCourses = await pb.getBestCourses();
  const tags = await pb.getTags();

  return <ButtonCourse tags={tags} bestCourses={bestCourses} />;
}

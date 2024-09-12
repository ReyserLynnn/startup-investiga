import pb from '@/lib/pocketbase';
import ButtonCourse from './ButtonCourse';

export default async function BetterCourses() {
  const tags = await pb.getTags();

  return <ButtonCourse tags={tags} />;
}

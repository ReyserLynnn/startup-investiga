import CardList from '@/components/Blog/CardList';
import CategoryList from '@/components/Blog/CategoryList';
import Featured from '@/components/Blog/Featured';
import MenuBlog from '@/components/Blog/MenuBlog';

export default function BlogPage() {
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="flex gap-12">
        <CardList />
        <MenuBlog />
      </div>
    </div>
  );
}

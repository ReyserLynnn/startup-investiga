import CardList from '@/components/Blog/CardList';
import MenuBlog from '@/components/Blog/MenuBlog';

export default function CategoriaBlogPage() {
  return (
    <div>
      <h1 className="bg-secondary text-white text-3xl font-bold py-1 px-2 text-center capitalize">
        Blog
      </h1>

      <div className="flex gap-12">
        <CardList />
        <MenuBlog />
      </div>
    </div>
  );
}

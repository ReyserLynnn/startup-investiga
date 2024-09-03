import CardBlog from './CardBlog';
import Pagination from './Pagination';

export default function CardList() {
  return (
    <div className="flex-5 ">
      <h1 className="text-3xl font-bold my-12 mx-0">Publicaciones recientes</h1>
      <div className="">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
      <Pagination page={1} hasPrev hasNext />
    </div>
  );
}

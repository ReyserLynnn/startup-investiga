import MenuCategories from './MenuCategories';
import MenuPost from './MenuPost';

export default function MenuBlog() {
  return (
    <div className="hidden lg:flex flex-2 flex-col mt-14">
      <h2 className="text-base font-normal text-gray-500 ">
        ¿Qué está de moda?
      </h2>
      <h1 className="text-[28px]">Más populares</h1>
      <MenuPost />

      <h2 className="text-base font-normal text-gray-500 ">
        Descubrir por tema
      </h2>
      <h1 className="text-[28px]">Categorías</h1>
      <MenuCategories />

      <h2 className="text-base font-normal text-gray-500 ">
        Elegido por el autor
      </h2>
      <h1 className="text-[28px]">Selecciones del autor</h1>
      <MenuPost withImage />
    </div>
  );
}

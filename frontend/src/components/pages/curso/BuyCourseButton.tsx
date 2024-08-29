import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';

export default function BuyCourseButton() {
  return (
    <div className="flex flex-col gap-3">
      <Button className="w-full font-semibold rounded-xl gap-2" variant="shine">
        <ShoppingCart />
        Comprar
      </Button>
      <Button
        className="rounded-xl  text-gray-500 gap-2 hover:text-red-600 hover:bg-red-100"
        variant="outline"
      >
        <Heart />
        Me gusta
      </Button>
    </div>
  );
}

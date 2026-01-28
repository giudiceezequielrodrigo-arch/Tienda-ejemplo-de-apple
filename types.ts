
export type Category = 'Mac' | 'iPhone' | 'iPad' | 'Watch' | 'AirPods' | 'Accesorios';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  specs: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

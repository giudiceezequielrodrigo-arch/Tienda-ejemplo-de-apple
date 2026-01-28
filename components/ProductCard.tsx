
import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gray-100 flex flex-col">
      <div className="h-48 mb-6 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
        <ul className="text-xs text-gray-400 space-y-1 mb-4">
          {product.specs.map((spec, i) => (
            <li key={i}>• {spec}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold">${product.price.toLocaleString()}</span>
        <button 
          onClick={() => onAddToCart(product)}
          className="bg-gray-100 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

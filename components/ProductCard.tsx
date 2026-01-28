
import React from 'react';
import { Product } from '../types';
import { Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="glass-card group flex flex-col p-8">
      <div className="h-56 mb-8 flex items-center justify-center relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="mb-2">
            <span className="text-[10px] font-bold text-apple-gray uppercase tracking-widest">{product.category}</span>
            <h3 className="text-xl font-bold text-apple-black leading-tight mt-1">{product.name}</h3>
        </div>
        
        <p className="text-apple-gray text-sm mb-6 line-clamp-2 leading-relaxed">
            {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {product.specs.slice(0, 2).map((spec, i) => (
            <span key={i} className="text-[10px] px-2 py-1 bg-apple-light rounded-md font-medium text-apple-gray">
              {spec}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-black/5 mt-auto">
        <div>
            <p className="text-xs text-apple-gray font-medium">Desde</p>
            <span className="text-xl font-bold text-apple-black">${product.price.toLocaleString()}</span>
        </div>
        <button 
          onClick={handleAdd}
          className={`p-3 rounded-full transition-all duration-300 ${
            isAdded ? 'bg-green-500 text-white' : 'bg-apple-black text-white hover:bg-apple-blue'
          }`}
        >
          {isAdded ? <Check size={20} /> : <Plus size={20} />}
        </button>
      </div>
    </div>
  );
};

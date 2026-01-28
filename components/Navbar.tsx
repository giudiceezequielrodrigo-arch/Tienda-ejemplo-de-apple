
import React from 'react';
import { ShoppingCart, Search, Apple } from 'lucide-react';

interface NavbarProps {
  onCartClick: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 apple-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between text-sm font-medium">
        <div className="flex items-center space-x-8">
          <a href="#" className="hover:opacity-70 transition-opacity">
            <Apple size={20} />
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:opacity-70 transition-opacity">Tienda</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Mac</a>
            <a href="#" className="hover:opacity-70 transition-opacity">iPad</a>
            <a href="#" className="hover:opacity-70 transition-opacity">iPhone</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Soporte</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="hover:opacity-70 transition-opacity">
            <Search size={18} />
          </button>
          <button 
            onClick={onCartClick}
            className="hover:opacity-70 transition-opacity flex items-center space-x-1"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="bg-blue-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

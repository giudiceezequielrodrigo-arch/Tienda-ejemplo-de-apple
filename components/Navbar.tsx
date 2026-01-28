
import React from 'react';
import { ShoppingCart, Search, Apple } from 'lucide-react';

interface NavbarProps {
  onCartClick: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartCount }) => {
  return (
    <nav className="nav-blur">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-xs font-semibold">
        <div className="flex items-center space-x-10">
          <a href="#" className="hover:opacity-60 transition-opacity">
            <Apple size={18} fill="currentColor" />
          </a>
          <div className="hidden md:flex space-x-8 text-apple-black/80">
            <a href="#" className="hover:text-apple-black transition-colors">Mac</a>
            <a href="#" className="hover:text-apple-black transition-colors">iPad</a>
            <a href="#" className="hover:text-apple-black transition-colors">iPhone</a>
            <a href="#" className="hover:text-apple-black transition-colors">Watch</a>
            <a href="#" className="hover:text-apple-black transition-colors">Soporte</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-apple-black/80">
          <button className="hover:text-apple-black transition-colors">
            <Search size={16} strokeWidth={2.5} />
          </button>
          <button 
            onClick={onCartClick}
            className="hover:text-apple-black transition-colors relative flex items-center"
          >
            <ShoppingCart size={16} strokeWidth={2.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-apple-blue text-white text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

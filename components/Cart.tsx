
import React from 'react';
import { X, Trash2, ChevronRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div 
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" 
        onClick={onClose} 
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Tu Bolsa</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Tu bolsa está vacía.</p>
              <button 
                onClick={onClose}
                className="text-blue-600 mt-4 hover:underline"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex space-x-4">
                <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center">
                  <img src={item.product.image} alt={item.product.name} className="max-h-16 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <button onClick={() => onRemove(item.product.id)} className="text-gray-400 hover:text-red-500">
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                  <p className="font-medium mt-1">${(item.product.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-medium text-gray-500">Subtotal</span>
              <span className="font-bold">${total.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-400">Envío gratuito para todos los pedidos de iDistribute.</p>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
              <span>Continuar compra</span>
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { GeminiAssistant } from './components/GeminiAssistant';
import { Cart } from './components/Cart';
import { PRODUCTS } from './constants';
import { Product, CartItem, Category } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const categories: (Category | 'Todos')[] = ['Todos', 'Mac', 'iPhone', 'iPad', 'Watch', 'AirPods', 'Accesorios'];

  return (
    <div className="min-h-screen">
      <Navbar 
        onCartClick={() => setIsCartOpen(true)} 
        cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} 
      />
      
      <main>
        <Hero />

        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Busca el tuyo.</h2>
              <p className="text-gray-500">Explora nuestra gama de productos Apple certificados.</p>
            </div>
            
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-24 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Distribución para empresas.</h2>
            <p className="text-xl text-gray-500">
              Ofrecemos soluciones personalizadas para el despliegue de hardware Apple en tu organización. 
              Gestión MDM, soporte técnico especializado y financiación flexible.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors">
              Hablar con un consultor
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2 text-gray-400 font-bold tracking-widest text-lg">
            <span className="text-black">i</span>DISTRIBUTE
          </div>
          <div className="flex space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:underline">Privacidad</a>
            <a href="#" className="hover:underline">Condiciones</a>
            <a href="#" className="hover:underline">Mapa del sitio</a>
          </div>
          <p className="text-sm text-gray-400">© 2024 iDistribute Hardware. Todos los derechos reservados.</p>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
      />
      
      <GeminiAssistant />
    </div>
  );
};

export default App;

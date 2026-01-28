
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
    <div className="min-h-screen bg-apple-light selection:bg-apple-blue/10">
      <Navbar 
        onCartClick={() => setIsCartOpen(true)} 
        cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} 
      />
      
      <main>
        <Hero />

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Busca el tuyo.</h2>
              <p className="text-apple-gray text-lg font-medium">Explora nuestra gama de productos Apple certificados.</p>
            </div>
            
            <div className="flex overflow-x-auto pb-4 md:pb-0 gap-3 no-scrollbar scroll-smooth">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-apple-black text-white shadow-xl shadow-black/10 scale-105'
                      : 'bg-white text-apple-gray border border-black/5 hover:border-black/20 hover:text-apple-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="bg-white py-32 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">Distribución para empresas.</h2>
            <p className="text-xl md:text-2xl text-apple-gray font-medium leading-relaxed">
              Ofrecemos soluciones personalizadas para el despliegue de hardware Apple en tu organización. 
              Gestión MDM, soporte técnico especializado y financiación flexible.
            </p>
            <div className="pt-6">
              <button className="btn-apple-primary text-lg">
                Hablar con un consultor
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-apple-light border-t border-black/5 py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-2 text-apple-black font-extrabold tracking-tighter text-2xl">
              <span>i</span>DISTRIBUTE
            </div>
            <div className="flex space-x-10 text-sm font-semibold text-apple-gray">
              <a href="#" className="hover:text-apple-black transition-colors">Privacidad</a>
              <a href="#" className="hover:text-apple-black transition-colors">Condiciones</a>
              <a href="#" className="hover:text-apple-black transition-colors">Mapa del sitio</a>
            </div>
          </div>
          <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-apple-gray">
            <p>© 2024 iDistribute Hardware. Distribuidor Autorizado.</p>
            <p>Hecho para el ecosistema Apple.</p>
          </div>
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


import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4 text-center bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-orange-600 font-semibold tracking-tight">Nuevo</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">iPad Pro</h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium">Extraordinariamente fino. Potencia descomunal.</p>
        <div className="flex justify-center space-x-6 pt-4">
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Más información
          </button>
          <button className="text-blue-600 font-medium hover:underline flex items-center">
            Comprar &gt;
          </button>
        </div>
      </div>
      <div className="mt-12 max-w-5xl mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1200" 
          alt="iPad Pro" 
          className="rounded-2xl shadow-2xl mx-auto transform hover:scale-[1.01] transition-transform duration-700"
        />
      </div>
    </section>
  );
};
